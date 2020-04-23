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
专门去学习了一下什么叫回溯算法。
定义一个回溯的方法，设置当前的数组长度===k 就返回的退出条件
然后开始递归。
初始条件就从 1 开始

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
