# 数组中重复的数据

给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。

你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间（不包括存储输出所需的空间）的算法解决此问题。

示例 1：

```js
输入：nums = [4,3,2,7,8,2,3,1]
输出：[2,3]
```

示例 2：

```js
输入：nums = [1,1,2]
输出：[1]
```

示例 3：

```js
输入：nums = [1]
输出：[]
```

提示：

- n == nums.length
- 1 <= n <= 10^5
- 1 <= nums[i] <= n
- nums 中的每个元素出现 一次 或 两次

思路：

这道题要求找出长度为 n 的整数数组 nums 中出现两次的整数，且要求时间复杂度为 O(n)，仅使用常量额外空间。

采用一种原地交换的思路。利用数组中的数字都在[1, n]范围内这一特点，将数字 nums[i]放到它应该在的位置 nums[nums[i] - 1]上，如果在这个过程中发现 nums[i]已经在它应该在的位置了，那么 nums[i]就是重复的数字。

1. 首先定义了一个交换函数 swap，用于交换数组 nums 中的两个元素。
2. 获取数组 nums 的长度 n。
3. 外层循环遍历数组 nums：
   - 内层 while 循环，只要 nums[i]不等于 nums[nums[i] - 1]，就交换 nums[i]和 nums[nums[i] - 1]，目的是将数字放到它应该在的位置。
4. 创建一个空数组 res 用于存储结果。
5. 再次遍历数组 nums：
   - 如果 nums[i] - 1 不等于 i，说明 nums[i]不在它应该在的位置，即 nums[i]是重复的数字，将 nums[i]添加到 res 中。
6. 最后返回 ans，即所有重复数字组成的数组。

时间复杂度：虽然有两层循环，但每个元素最多被交换一次，所以总的时间复杂度为 O(n)，其中 n 是数组 nums 的长度。
空间复杂度：除了定义的常数级别的函数和变量，以及用于存储结果的数组 ans（题目中不考虑存储输出所需的空间），没有使用额外的空间，所以空间复杂度为 O(1)。

```js
var findDuplicates = function (nums) {
  const swap = (nums, index1, index2) => {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
  };
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    while (nums[i] != nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1);
    }
  }
  const res = [];
  for (let i = 0; i < n; ++i) {
    if (nums[i] - 1 !== i) {
      res.push(nums[i]);
    }
  }
  return res;
};
```
