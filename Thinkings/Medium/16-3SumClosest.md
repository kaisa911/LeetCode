# 最接近的三数之和

给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

示例 1：

```js
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
```

示例 2：

```js
输入：nums = [0,0,0], target = 1
输出：0
```

提示：

- 3 <= nums.length <= 1000
- -1000 <= nums[i] <= 1000
- -104 <= target <= 104

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  let closest = nums[0] + nums[1] + nums[2];
  let diff = Math.abs(closest - target);
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; ++i) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let newDiff = Math.abs(sum - target);
      if (diff > newDiff) {
        diff = newDiff;
        closest = sum;
      }
      if (sum < target) ++left;
      else --right;
    }
  }
  return closest;
};
```
