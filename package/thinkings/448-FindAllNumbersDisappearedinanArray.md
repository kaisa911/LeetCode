# 找到所有数组中消失的数字

给定一个范围在   1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为 O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

**示例:**

```
输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
```

**思路：**

这道题目的关键在于在不使用额外空间且时间复杂度为 O(n)的情况下找到消失的数字。原思路很巧妙，利用数组本身来标记数字是否出现过。因为数组中的元素范围在 1 到 n 之间，所以可以将出现过的数字对应的下标位置的元素取负，最后剩下的正数下标加 1 就是消失的数字。

1. 首先初始化一个空数组 results 用于存储结果。
2. 进入第一个循环：
   - 对于数组 nums 中的每个元素 nums[i]，取其绝对值作为下标（因为可能已经被标记为负数了），将对应下标位置的元素取负，前提是该位置元素为正数。这一步是在标记已经出现过的数字对应的位置。
3. 进入第二个循环：
   - 再次遍历数组 nums，检查每个位置的元素。如果元素为正数，说明该下标加 1 对应的数字没有在原数组中出现过，将其添加到 results 数组中。
4. 最后返回 results 数组。

时间复杂度：对数组进行了两次遍历，每次遍历时间复杂度为 O(n)，所以总的时间复杂度为 O(n)，其中 n 是数组 nums 的长度。
空间复杂度：除了结果数组 results 外，没有使用额外的空间，而结果数组不算在额外空间内，所以空间复杂度为 O(1)。

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let results = [];
  for (let i = 0, len = nums.length; i < len; ++i) {
    if (nums[Math.abs(nums[i]) - 1] > 0) {
      nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
    }
  }
  for (let i = 0, len = nums.length; i < len; ++i) {
    if (nums[i] > 0) {
      results.push(i + 1);
    }
  }
  return results;
};
```