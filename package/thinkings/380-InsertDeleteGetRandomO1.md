# O(1) 时间插入、删除和获取随机元素

实现 RandomizedSet 类：

RandomizedSet() 初始化 RandomizedSet 对象
bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。

示例：

```js
输入
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
输出
[null, true, false, true, 2, true, false, 2]

解释
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。
randomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。
randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
```

提示：

- -2^31 <= val <= 2^31 - 1
- 最多调用 insert、remove 和 getRandom 函数 2 \* 10^5 次
- 在调用 getRandom 方法时，数据结构中 至少存在一个 元素。

思路：

对于这个问题，要实现一个数据结构满足在平均时间复杂度为 O (1) 的情况下进行插入、删除和获取随机元素操作。

- 插入操作：为了实现 O (1) 插入，使用数组来存储元素，同时使用一个 Map 来记录元素值和其在数组中的索引。这样在插入时，先检查元素是否存在于 Map 中，如果不存在，将元素添加到数组末尾，并在 Map 中记录其索引。
- 删除操作：当要删除一个元素时，不能直接在数组中删除（因为这会导致后面元素的索引改变，且在数组中间删除元素时间复杂度不是 O (1)）。可以将待删除元素与数组最后一个元素交换位置，然后删除数组最后一个元素，并更新交换后元素在 Map 中的索引。
- 获取随机元素：由于有数组存储元素，通过生成一个随机索引来获取数组中的随机元素，随机索引的范围是 0 到数组长度 - 1。

1. 插入操作思路
   - 首先在 insert 方法中，检查 val 是否在 this.indices（Map）中存在。
   - 如果存在，说明元素已经在集合中，直接返回 false。
   - 如果不存在，获取当前数组 this.nums 的长度作为新元素的索引，将新元素 val 添加到数组末尾，同时在 this.indices 中记录 val 对应的索引。最后返回 true 表示插入成功。
2. 删除操作思路
   - 在 remove 方法中，先检查 val 是否在 this.indices 中存在。
   - 如果不存在，返回 false。
   - 如果存在，获取 val 在 this.nums 中的索引 id。
   - 将 this.nums[id]设置为 this.nums[this.nums.length - 1]，即将待删除元素位置替换为数组最后一个元素。
   - 然后更新替换后元素在 this.indices 中的索引。
   - 接着从数组 this.nums 中删除最后一个元素（使用 pop 方法），并从 this.indices 中删除 val 对应的键值对，最后返回 true 表示删除成功。
3. 获取随机元素思路
   - 在 getRandom 方法中，通过 Math.floor(Math.random() \* this.nums.length)生成一个随机索引 randomIndex，范围是 0 到 this.nums.length - 1。
   - 然后返回 this.nums[randomIndex]，即随机获取数组中的一个元素。

时间复杂度

1. 插入操作：
   - 检查元素是否在 this.indices 中存在，Map 的查找操作时间复杂度是 O (1)。
   - 将元素添加到 this.nums 末尾和在 this.indices 中记录索引操作时间复杂度都是 O (1)。
   - 所以插入操作的平均时间复杂度是 O (1)。
2. 删除操作：
   - 检查元素是否在 this.indices 中存在时间复杂度是 O (1)。
   - 交换元素位置、更新索引、删除数组最后一个元素和从 Map 中删除键值对操作时间复杂度都是 O (1)。
   - 所以删除操作的平均时间复杂度是 O (1)。
3. 获取随机元素操作：
   - 生成随机索引时间复杂度是 O (1)，获取数组中对应索引元素时间复杂度也是 O (1)。
   - 所以获取随机元素操作的时间复杂度是 O (1)。

空间复杂度：除了存储元素的数组 this.nums 和记录元素索引的 Mapthis.indices 外，没有其他额外的数据结构。在最坏情况下，如果插入了 n 个不同元素，this.nums 长度为 n，this.indices 中存储 n 个键值对。所以空间复杂度是 O (n)，其中 n 是插入元素的数量。

```javascript
var RandomizedSet = function () {
  this.nums = [];
  this.indices = new Map();
};

RandomizedSet.prototype.insert = function (val) {
  if (this.indices.has(val)) {
    return false;
  }
  let index = this.nums.length;
  this.nums.push(val);
  this.indices.set(val, index);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.indices.has(val)) {
    return false;
  }
  let id = this.indices.get(val);
  this.nums[id] = this.nums[this.nums.length - 1];
  this.indices.set(this.nums[id], id);
  this.nums.pop();
  this.indices.delete(val);
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};
```
