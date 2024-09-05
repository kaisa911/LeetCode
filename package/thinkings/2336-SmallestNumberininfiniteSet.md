# 无限集中的最小数字

现有一个包含所有正整数的集合 [1, 2, 3, 4, 5, ...] 。

实现 SmallestInfiniteSet 类：

SmallestInfiniteSet() 初始化 SmallestInfiniteSet 对象以包含 所有 正整数。
int popSmallest() 移除 并返回该无限集中的最小整数。
void addBack(int num) 如果正整数 num 不 存在于无限集中，则将一个 num 添加 到该无限集最后。

示例：

```js
输入
["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
[[], [2], [], [], [], [1], [], [], []]
输出
[null, null, 1, 2, 3, null, 1, 4, 5]

解释
SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 已经在集合中，所以不做任何变更。
smallestInfiniteSet.popSmallest(); // 返回 1 ，因为 1 是最小的整数，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 2 ，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 3 ，并将其从集合中移除。
smallestInfiniteSet.addBack(1);    // 将 1 添加到该集合中。
smallestInfiniteSet.popSmallest(); // 返回 1 ，因为 1 在上一步中被添加到集合中，
                                   // 且 1 是最小的整数，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 4 ，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 5 ，并将其从集合中移除。
```

提示：

- 1 <= num <= 1000
- 最多调用 popSmallest 和 addBack 方法 共计 1000 次

思路：

1. 类的构造函数 SmallestInfiniteSet()
   - 初始化一个最小堆 minPriorityQueue，用于存储和获取最小值。
   - 初始化一个集合 set，用于快速判断某个数是否已经在集合中。
   - 通过一个循环，将从 1 到 1000 的所有整数加入到最小堆和集合中。
2. 方法 popSmallest()
   - 从最小堆中弹出（移除）并返回最小元素。
   - 同时将这个元素从集合中删除。
3. 方法 addBack(num)
   - 如果传入的 num 不在集合中，将其加入到最小堆的末尾（虽然题目要求是加入到“最后”，但考虑到堆的特性，实际操作是直接插入，堆会自动调整以保持最小堆的特性）。
   - 同时将这个元素添加到集合中。

```javascript
var SmallestInfiniteSet = function () {
  this.minPriorityQueue = new MinPriorityQueue(); // 构造
  this.set = new Set();
  for (let i = 1; i <= 1000; i++) {
    this.minPriorityQueue.enqueue(i);
    this.set.add(i);
  }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  const element = this.minPriorityQueue.dequeue().element;
  this.set.delete(element);
  return element;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (!this.set.has(num)) {
    this.minPriorityQueue.enqueue(num);
    this.set.add(num);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
```
