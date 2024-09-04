# 随机翻转矩阵

给你一个 m x n 的二元矩阵 matrix ，且所有值被初始化为 0 。请你设计一个算法，随机选取一个满足 matrix[i][j] == 0 的下标 (i, j) ，并将它的值变为 1 。所有满足 matrix[i][j] == 0 的下标 (i, j) 被选取的概率应当均等。

尽量最少调用内置的随机函数，并且优化时间和空间复杂度。

实现 Solution 类：

Solution(int m, int n) 使用二元矩阵的大小 m 和 n 初始化该对象
int[] flip() 返回一个满足 matrix[i][j] == 0 的随机下标 [i, j] ，并将其对应格子中的值变为 1
void reset() 将矩阵中所有的值重置为 0

示例：

```js
输入
["Solution", "flip", "flip", "flip", "reset", "flip"]
[[3, 1], [], [], [], [], []]
输出
[null, [1, 0], [2, 0], [0, 0], null, [2, 0]]

解释
Solution solution = new Solution(3, 1);
solution.flip();  // 返回 [1, 0]，此时返回 [0,0]、[1,0] 和 [2,0] 的概率应当相同
solution.flip();  // 返回 [2, 0]，因为 [1,0] 已经返回过了，此时返回 [2,0] 和 [0,0] 的概率应当相同
solution.flip();  // 返回 [0, 0]，根据前面已经返回过的下标，此时只能返回 [0,0]
solution.reset(); // 所有值都重置为 0 ，并可以再次选择下标返回
solution.flip();  // 返回 [2, 0]，此时返回 [0,0]、[1,0] 和 [2,0] 的概率应当相同
```

提示：

- 1 <= m, n <= 104
- 每次调用flip 时，矩阵中至少存在一个值为 0 的格子。
- 最多调用 1000 次 flip 和 reset 方法。

思路：
1. 初始化：在构造函数中，初始化矩阵的大小 m 和 n，计算总的格子数 total，并使用一个 Map 来存储随机选择的索引。
2. 翻转：flip 方法通过生成一个从0到total-1的随机数 x 来选择一个格子。然后，它查找 x 对应的映射值（如果存在），这将是实际的索引。同时，它将 x 映射到 total 对应的索引，因为 total 总是指向最后一个未使用的索引。每次调用 flip 后，total 减1，表示有一个格子已经被使用。
3. 重置：reset 方法将 total 重置为矩阵的总格子数，并将映射 Map 清空，这样所有格子都再次变为未使用状态。

时间复杂度：flip 方法的时间复杂度为 O(1)，因为每次操作只涉及常数次数的查找和更新。
空间复杂度：O(1)，因为 Map 的大小不会超过 total，即矩阵的总格子数。

```js
var Solution = function (m, n) {
  this.m = m;
  this.n = n;
  this.total = m * n;
  this.map = new Map();
};
Solution.prototype.flip = function () {
  const x = Math.floor(Math.random() * this.total);
  this.total--;
  // 查找位置 x 对应的映射
  const idx = this.map.get(x) || x;
  // 将位置 x 对应的映射设置为位置 total 对应的映射
  this.map.set(x, this.map.get(this.total) || this.total);
  return [Math.floor(idx / this.n), idx % this.n];
};
Solution.prototype.reset = function () {
  this.total = this.m * this.n;
  this.map.clear();
};
```
