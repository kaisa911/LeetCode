# 至少是其他数字两倍的最大数

给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。

请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。

示例 1：

```javascript
输入：nums = [3,6,1,0]
输出：1
解释：6 是最大的整数，对于数组中的其他整数，6 至少是数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。
```

示例 2：

```javascript
输入：nums = [1,2,3,4]
输出：-1
解释：4 没有超过 3 的两倍大，所以返回 -1 。
```

提示：

- 2 <= nums.length <= 50
- 0 <= nums[i] <= 100
- nums 中的最大元素是唯一的

思路：

对于这个问题，首先要找到数组中的最大元素，然后判断它是否至少是其他元素的两倍。通过对数组进行排序，可以很方便地找到最大元素和第二大元素，进而进行比较判断。这种方法利用了排序的特性来解决问题。

1. 首先初始化最大元素的下标为 0（firstMaxIndex），第二大元素为 0（secondMax）。
2. 然后从索引 1 开始遍历数组 nums。
3. 当发现当前元素 nums[i]大于当前最大元素 nums[firstMaxIndex]时，更新第二大元素为原来的最大元素，更新最大元素的下标为当前索引 i。
4. 当发现当前元素 nums[i]大于第二大元素但小于最大元素时，更新第二大元素为当前元素。
5. 最后判断最大元素是否大于等于第二大元素的两倍，如果是，则返回最大元素的下标，否则返回 -1。

- 时间复杂度：只遍历了数组一次，时间复杂度为 O(n)，其中 n 是数组 nums 的长度。
- 空间复杂度：只使用了几个额外的变量，空间复杂度为 O(1)。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let firstMaxIndex = 0;
  let secondMax = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[firstMaxIndex]) {
      secondMax = nums[firstMaxIndex];
      firstMaxIndex = i;
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }
  return nums[firstMaxIndex] >= secondMax * 2 ? firstMaxIndex : -1;
};
```
