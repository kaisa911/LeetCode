# 不同路径

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/robot_maze.png)

例如，上图是一个 7 x 3 的网格。有多少可能的路径？

说明：m  和 n 的值均不超过 100。

**示例  1:**

```js
输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。


1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右

```

**示例  2:**

```js
输入: (m = 7), (n = 3);
输出: 28;
```

**思路：**
根据题目描述，可以看出，这个小机器人一共要走 m+n-2 步，其中，有 m-1 步是向下走的，所以有多少中向下走的方法，就有多少种走法。

实质上是在求 m-1 在 m+n-1 中有多少种组合

```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  return helper(m + n - 2, m - 1) / helper(m - 1, m - 1);
};
// 这是一个阶乘函数，用来求m中取n个有多少个排列
var helper = (m, n) => {
  var num = 1;
  var count = 0;
  for (var i = m; i > 0; i--) {
    if (count == n) {
      break;
    }
    num = num * i;
    count++;
  }
  return num;
};
```
