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

**思路：**

和上一题一样的思路，排序+双指针法

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  // 对数组进行排序
  nums.sort((a, b) => a - b);

  // 初始化最接近 target 的和及其差值
  let closest = Infinity;
  let diff = Infinity;

  // 遍历数组，寻找最接近 target 的和
  for (let i = 0; i < nums.length - 2; ++i) {
    // 跳过重复的元素
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    // 确保 left 指针不指向重复的元素
    while (left < right && nums[left] === nums[left - 1]) {
      left++;
    }

    // 确保 right 指针不指向重复的元素
    while (left < right && nums[right] === nums[right + 1]) {
      right--;
    }

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let newDiff = Math.abs(sum - target);

      // 更新最接近 target 的和及其差值
      if (newDiff < diff) {
        diff = newDiff;
        closest = sum;
      }

      // 根据当前和与 target 的大小调整指针
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  // 返回最接近 target 的和
  return closest;
}
```
