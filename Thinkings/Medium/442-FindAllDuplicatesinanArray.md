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

```js
var findDuplicates = function (nums) {
  const swap = (nums, index1, index2) => {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]]
  };
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    while (nums[i] != nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1);
    }
  }
  const ans = [];
  for (let i = 0; i < n; ++i) {
    if (nums[i] - 1 !== i) {
      ans.push(nums[i]);
    }
  }
  return ans;
};
```