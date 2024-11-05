# 找到最高海拔

有一个自行车手打算进行一场公路骑行，这条路线总共由 n + 1 个不同海拔的点组成。自行车手从海拔为 0 的点 0 开始骑行。

给你一个长度为 n 的整数数组 gain ，其中 gain[i] 是点 i 和点 i + 1 的 净海拔高度差（0 <= i < n）。请你返回 最高点的海拔 。

示例 1：

```js
输入：gain = [-5,1,5,0,-7]
输出：1
解释：海拔高度依次为 [0,-5,-4,1,1,-6] 。最高海拔为 1 。
```

示例 2：

```js
输入：gain = [-4,-3,-2,-1,4,3,2]
输出：0
解释：海拔高度依次为 [0,-4,-7,-9,-10,-6,-3,-1] 。最高海拔为 0 。
```

提示：

- n == gain.length
- 1 <= n <= 100
- -100 <= gain[i] <= 100

思路：

拿到这个题目，首先要明确我们需要根据给定的海拔高度差数组来计算每个点的累计海拔，并找出其中的最大值。选择遍历数组并累计计算海拔的方法是直观且有效的，因为可以通过逐步累加来得到每个点的海拔，然后在累加过程中更新最大值。

1. 首先初始化答案 `ans` 为 0，累计和 `sum` 为 0。这是为了在后续的计算中能够正确记录最大值和累计海拔。
2. 通过遍历 `gain` 数组，对于每个元素 `x` ，将其累加到 `sum` 中。
3. 每次累加后，使用 `Math.max` 函数比较当前的累计和 `sum` 与之前记录的最大值 `ans` ，并更新最大值。
4. 遍历结束后，返回的 `ans` 即为最高点的海拔。

时间复杂度为 O(n)，因为只需要遍历 `gain` 数组一次。
空间复杂度为 O(1)，只使用了固定的几个变量，不随输入规模变化。

```javascript
var largestAltitude = function (gain) {
  let ans = 0,
    sum = 0;
  for (const x of gain) {
    sum += x;
    ans = Math.max(ans, sum);
  }
  return ans;
};
```