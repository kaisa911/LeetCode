# 接雨水

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1：
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

```js
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
```

示例 2：

```js
输入：height = [4,2,0,3,2,5]
输出：9
```

提示：

- n == height.length
- 1 <= n <= 2 \* 104
- 0 <= height[i] <= 105

思路：
首先计算每个位置的左侧和右侧最大高度，然后通过比较这些最大高度与当前高度的差值来计算雨水量。

1. 计算左侧最大高度：从左到右遍历数组，记录每个位置左侧的最大高度。
2. 计算右侧最大高度：从右到左遍历数组，记录每个位置右侧的最大高度。
3. 计算雨水量：对于每个位置，计算其左侧最大高度和右侧最大高度的较小值与当前高度的差值，累加这些差值即为总雨水量。

时间复杂度为 O(n)，其中 n 是数组 height 的长度。这是因为我们需要遍历数组三次：一次计算左侧最大高度，一次计算右侧最大高度，一次计算雨水量。
空间复杂度为 O(n)，因为我们使用了两个额外的数组 leftMax 和 rightMax 来存储每个位置的最大高度。

```js
var trap = function (height) {
  const n = height.length;
  if (n === 0) {
    return 0;
  }

  // 计算每个位置左侧的最大高度
  const leftMax = new Array(n).fill(0);
  leftMax[0] = height[0];
  for (let i = 1; i < n; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // 计算每个位置右侧的最大高度
  const rightMax = new Array(n).fill(0);
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let res = 0;
  // 计算雨水量
  for (let i = 0; i < n; ++i) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
};
```
