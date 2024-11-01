# O(1) 时间插入、删除和获取随机元素 - 允许重复

RandomizedCollection 是一种包含数字集合(可能是重复的)的数据结构。它应该支持插入和删除特定元素，以及删除随机元素。

实现 RandomizedCollection 类:

RandomizedCollection()初始化空的 RandomizedCollection 对象。
bool insert(int val) 将一个 val 项插入到集合中，即使该项已经存在。如果该项不存在，则返回 true ，否则返回 false 。
bool remove(int val) 如果存在，从集合中移除一个 val 项。如果该项存在，则返回 true ，否则返回 false 。注意，如果 val 在集合中出现多次，我们只删除其中一个。
int getRandom() 从当前的多个元素集合中返回一个随机元素。每个元素被返回的概率与集合中包含的相同值的数量 线性相关 。
您必须实现类的函数，使每个函数的 平均 时间复杂度为 O(1) 。

注意：生成测试用例时，只有在 RandomizedCollection 中 至少有一项 时，才会调用 getRandom 。

示例 1:

```js
输入
["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
[[], [1], [1], [2], [], [1], []]
输出
[null, true, false, true, 2, true, 1]

解释
RandomizedCollection collection = new RandomizedCollection();// 初始化一个空的集合。
collection.insert(1);   // 返回 true，因为集合不包含 1。
                        // 将 1 插入到集合中。
collection.insert(1);   // 返回 false，因为集合包含 1。
                        // 将另一个 1 插入到集合中。集合现在包含 [1,1]。
collection.insert(2);   // 返回 true，因为集合不包含 2。
                        // 将 2 插入到集合中。集合现在包含 [1,1,2]。
collection.getRandom(); // getRandom 应当:
                        // 有 2/3 的概率返回 1,
                        // 1/3 的概率返回 2。
collection.remove(1);   // 返回 true，因为集合包含 1。
                        // 从集合中移除 1。集合现在包含 [1,2]。
collection.getRandom(); // getRandom 应该返回 1 或 2，两者的可能性相同。
```

提示:

- -2^31 <= val <= 2^31 - 1
- insert, remove 和 getRandom 最多 总共 被调用 2 \* 10^5 次
- 当调用 getRandom 时，数据结构中 至少有一个 元素

思路：

对于这个问题，我们需要设计一个数据结构来满足插入、删除和随机获取元素的操作，并且要求平均时间复杂度为 O(1)。初步思路是使用一个数组来存储元素，使用一个映射来记录每个元素在数组中的索引位置，以便快速进行删除操作。选择这种方法的理由是数组可以方便地进行随机访问，而映射可以快速查找和操作元素的索引信息。

1. 在`insert`方法中，将元素添加到数组末尾，并在映射中更新或添加该元素对应的索引集合。通过判断集合的大小来确定插入的元素是否为新元素。
2. 在`remove`方法中，先检查元素是否存在。通过遍历找到一个要删除的索引位置，然后将数组末尾的元素移到该位置，更新映射中对应元素的索引信息，最后根据情况删除空的集合和弹出数组末尾元素。
3. 在`getRandom`方法中，通过生成随机数来随机获取数组中的元素。

时间复杂度：

- `insert`方法：O(1)，添加到数组末尾和在映射中操作的时间复杂度均为 O(1)。
- `remove`方法：平均 O(1)，虽然有遍历找索引的操作，但由于平均情况下删除的元素分布较为均匀，时间复杂度接近 O(1)。
- `getRandom`方法：O(1)，通过随机数生成和数组随机访问实现。
  空间复杂度：O(n)，其中 n 为插入元素的数量，用于存储数组和映射。

```js
/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.idx = new Map();
  this.nums = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  this.nums.push(val);
  const set = this.idx.has(val) ? this.idx.get(val) : new Set();
  set.add(this.nums.length - 1);
  this.idx.set(val, set);
  return set.size === 1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.idx.has(val)) {
    return false;
  }
  let i = undefined;
  for (const it of this.idx.get(val)) {
    if (!i) {
      i = it;
      break;
    }
  }
  const lastNum = this.nums[this.nums.length - 1];
  this.nums[i] = lastNum;
  this.idx.get(val).delete(i);
  this.idx.get(lastNum).delete(this.nums.length - 1);
  if (i < this.nums.length - 1) {
    this.idx.get(lastNum).add(i);
  }
  if (this.idx.get(val).size === 0) {
    this.idx.delete(val);
  }
  this.nums.pop();
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};
```
