# 删掉一个元素以后全为 1 的最长子数组

给你一个二进制数组 nums ，你需要从中删掉一个元素。

请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。

如果不存在这样的子数组，请返回 0 。

示例 1：

```javascript
输入：nums = [1,1,0,1]
输出：3
解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
```

示例 2：

```javascript
输入：nums = [0,1,1,1,0,1,1,0,1]
输出：5
解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。
```

示例 3：

```javascript
输入：nums = [1,1,1]
输出：2
解释：你必须要删除一个元素。
```

提示：

- 1 <= nums.length <= 10^5
- nums[i] 要么是 0 要么是 1 。

思路：

拿到这个题目，首先考虑使用滑动窗口的方法。因为题目要求找到删除一个元素后全为 1 的最长子数组，通过滑动窗口可以方便地维护一个子数组，并动态调整窗口的左右边界来计算符合条件的最长子数组长度。选择滑动窗口方法的理由是它能够高效地处理子数组相关的问题，通过窗口的滑动和边界的调整，可以在一次遍历中找到最优解。

1. 首先定义了两个指针 `left` 和 `right` 分别表示滑动窗口的左右边界，一个变量 `countZero` 用于记录窗口内 0 的个数，以及 `maxLength` 用于记录最长符合条件的子数组长度。
2. 当 `right` 指针向右移动时，如果遇到 0 就增加 `countZero` 的值。
3. 当 `countZero` 大于 1 时，通过移动 `left` 指针来缩小窗口，直到窗口内 0 的个数不超过 1 个。
4. 每次更新 `maxLength` 为当前窗口长度减去（如果窗口内只有一个 0 则减 1）。
5. 最后 `right` 指针继续向右移动，重复上述过程。

时间复杂度：O(n)，因为整个数组只遍历了一次。
空间复杂度：O(1)，使用的额外空间是固定的几个变量，不随输入规模变化。

```javascript
var longestSubarray = function (nums) {
  let left = 0,
    right = 0,
    countZero = 0,
    maxLength = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      countZero++;
    }

    while (countZero > 1) {
      if (nums[left] === 0) {
        countZero--;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left - (countZero === 1 ? 1 : 0));

    right++;
  }

  return maxLength;
};
```
