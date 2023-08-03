# 连续子数组的最大和

输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为 O(n)。

示例 1:

```js
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

提示：

- 1 <= arr.length <= 10^5
- -100 <= arr[i] <= 100

**思路：**

要求复杂度 O(n)，就是遍历一遍呗。

遍历的时候，就要计算前面 sum 的值+nums[i]和当前 nums[i]大的那个，如果 curSum + nums[i]大，那就继续加，如果 nums[i]大，那就从当前开始计算子数组咯，

然后把 res 和 curSum 进行比较，res 取大的那个

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = -Number.MAX_VALUE,
    curSum = 0;
  for (let i in nums) {
    curSum = Math.max(curSum + nums[i], nums[i]);
    res = Math.max(res, curSum);
  }
  return res;
};
```
