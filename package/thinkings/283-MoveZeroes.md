# 移动零

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例 1:

```javascript
输入: nums = [0, 1, 0, 3, 12];
输出: [1, 3, 12, 0, 0];
```

示例 2:

```javascript
输入: nums = [0];
输出: [0];
```

提示:

1 <= nums.length <= 10^4
-2^31 <= nums[i] <= 2^31 - 1

进阶：你能尽量减少完成的操作次数吗？

思路：

这个问题要求我们原地（in-place）将数组中的所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。这意味着我们不能使用额外的数组来存储非零元素，也不能复制整个数组。一个有效的方法是使用双指针，一个指针用于遍历数组，另一个指针用于记录非零元素应该插入的位置。

1. 初始化一个insertPos变量，用于记录非零元素应该插入的位置。
2. 遍历数组，如果当前元素非零，则将其移动到insertPos的位置，并递增insertPos。
3. 在遍历结束后，insertPos之后的所有位置都应该是0，因此从insertPos开始填充0，直到数组末尾。

时间复杂度：O(n)，其中n是数组的长度。我们只需要遍历一次数组。
空间复杂度：O(1)，我们没有使用额外的空间，所有的操作都是原地进行的。

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let insertPos = 0; // 记录非零元素应该插入的位置
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i]; // 将非零元素移动到前面
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos++] = 0; // 在数组末尾填充0
  }
};
```
