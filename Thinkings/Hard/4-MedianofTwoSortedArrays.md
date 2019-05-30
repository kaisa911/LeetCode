# 寻找两个有序数组的中位数

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

```js
nums1 = [1, 3];
nums2 = [2];


则中位数是 2.0
```

示例 2:

```js
nums1 = [1, 2];
nums2 = [3, 4];


则中位数是 (2 + 3)/2 = 2.5
```

思路：思路很简单，就是先把两个数组合并，然后从大到小排序，如果长度是奇数，返回中间值，如果是偶数，就返回中间两个值的平均值。sort()的最佳和平均时间复杂度为 O(log(n)),所以是不是可以认为时间复杂度为 O(log(m+n))

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  let len = arr.length;
  let middle = Math.floor(len / 2);
  if (len % 2) {
    return arr[middle];
  }
  return (arr[middle - 1] + arr[middle]) / 2;
};
```
