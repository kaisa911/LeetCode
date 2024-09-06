# 乘积最大子数组

给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续
子数组
（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。

示例 1:

```javascript
输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

示例 2:

```javascript
输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```

提示:

- 1 <= nums.length <= 2 \* 10^4
- -10 <= nums[i] <= 10
- nums 的任何子数组的乘积都 保证 是一个 32-位 整数

思路：

1. 初始化变量：定义 res 来存储遍历过程中遇到的最大的乘积，初始化为数组的第一个元素。定义 prevMin 和 prevMax 分别存储之前子数组的最小和最大乘积，初始化为数组的第一个元素。
2. 遍历数组：从数组的第二个元素开始遍历，对于每个元素，计算以当前元素结尾的子数组的最大乘积和最小乘积。这是因为当前元素与之前的子数组的乘积可能成为新的最小或最大乘积。
3. 更新乘积：更新 prevMin 和 prevMax 为包含当前元素的新的最大乘积和最小乘积，同时更新全局的最大乘积 res。
4. 处理负数：负数与负数相乘会变为正数，因此需要特别处理。如果当前元素为负数，那么 prevMin 与 prevMax 需要互换。
5. 处理零：如果数组中包含零，那么包含零的子数组的乘积会重置为零。需要检查并处理这种情况。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。只需要遍历数组一次。
空间复杂度：O(1)，只需要常量级别的额外空间。

```javascript
var maxProduct = function (nums) {
  let res = nums[0];
  let prevMin = nums[0];
  let prevMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    if (current < 0) {
      // 当前元素为负数，最小和最大乘积互换
      let temp = prevMin;
      prevMin = prevMax;
      prevMax = temp;
    }

    // 更新最小乘积和最大乘积
    prevMin = Math.min(current, prevMin * current);
    prevMax = Math.max(current, prevMax * current);

    // 更新全局最大乘积
    res = Math.max(res, prevMax);
  }

  return res;
};
```
