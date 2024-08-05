# 组合

给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

**示例:**

```js
输入: (n = 4), (k = 2);
输出: [
  [2, 4],
  [3, 4],
  [2, 3],
  [1, 2],
  [1, 3],
  [1, 4],
];
```

**思路：**
这个问题可以通过回溯算法来解决。以下是算法的基本步骤：

1. 初始化：创建一个结果数组 res 用于存储所有可能的组合。
2. 定义回溯函数：定义一个回溯函数 backTrack，它接收两个参数：start 表示当前考虑的起始数字，current 表示当前的组合数组。
3. 递归退出条件：如果当前组合 current 的长度等于 k，则将这个组合添加到结果数组 res 中，并返回。
4. 递归逻辑：在回溯函数中，使用一个循环从 start 开始，遍历到 n。对于每个数字 i：
  - 将数字 i 添加到当前组合 current 中。
  - 递归调用 backTrack 函数，传入 i + 1 作为新的起始数字，以及更新后的 current。
  - 回溯，即从 current 中移除最后添加的数字 i，以便进行下一次迭代。
5. 初始调用：在函数的主体部分，调用 backTrack 函数，从 1 开始，初始化一个空的当前组合数组。
6. 返回结果：在所有递归调用完成后，返回结果数组 res。

时间复杂度：O(C(n,k))，其中 C(n,k) 是组合数，表示从 n 个不同元素中取 k 个元素的组合方式数目。在最坏的情况下，我们需要生成所有可能的组合。
空间复杂度：O(k)，这是因为在递归过程中，我们需要存储当前的组合，其最大长度为 k。

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n < k) return 0;
  let res = [];

  const backTrack = (start = 1, current = []) => {
    if (current.length === k) {
      res.push([...current]);
      return;
    }
    for (let i = start; i <= n; i++) {
      current.push(i);
      backTrack(i + 1, current);
      current.pop();
    }
  };
  backTrack(1, []);
  return res;
};
```
