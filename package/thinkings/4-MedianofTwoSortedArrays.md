# 寻找两个正序数组的中位数

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

思路：

对于寻找两个有序数组的中位数这一问题，由于要求时间复杂度为 O(log(m + n))，考虑到两个数组有序的特点，可以利用二分查找的思想。通过逐步缩小搜索范围，比较两个数组的元素来确定中位数所在的位置。选择二分查找是因为它能够在有序数据中高效地定位目标元素，从而满足时间复杂度的要求。

1. `findMedianSortedArrays` 函数首先计算两个数组元素的总数 `total` 和中位数的位置 `half`。
2. 根据总数的奇偶性来决定调用 `findKthElement` 函数获取中位数或两个相邻中位数的元素。
3. `findKthElement` 函数中，首先处理 `nums1` 的长度，确保其在合理范围内。
4. 确定两个数组的子数组范围，通过循环比较两个子数组的元素来逐步缩小范围，找到第 `k` 小的元素。
5. 在循环中，根据元素大小更新指针和要返回的元素。
6. 对于未在循环中找到的情况，分别处理在 `nums1` 左侧部分和 `nums2` 左侧部分的情况。

时间复杂度：O(log(m + n))，通过二分查找的方式逐步缩小搜索范围，达到了题目要求的时间复杂度。
空间复杂度：O(1)，使用的额外空间固定，不随输入规模的增大而增大。

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);

  return total % 2 !== 0
    ? findKthElement(nums1, nums2, half + 1)
    : (findKthElement(nums1, nums2, half) + findKthElement(nums1, nums2, half + 1)) / 2.0;
};
const findKthElement = (nums1, nums2, k) => {
  const len1 = nums1.length,
    len2 = nums2.length;

  // len1 中大于 Math.ceil(k / 2)的，并且如果nums1[len1 - 1] > nums2[k - len1]。那就说明 nums1 中的这个最后元素肯定不是第 k 小元素
  // 比如 num1 = [1,3,4,7,9], num2 = [2,5,6,8] k = 5
  // len1 = 5 > 3 且 num1[4] > num2[0],那 num1[4]就肯定不是k大的元素了
  // 继续 4>3 且 num1[3] > num2[1]; 那num1[3] 也不是了
  // 继续 3 不大于3了，len1不再减小了

  while (len1 > Math.ceil(k / 2) && nums1[len1 - 1] > nums2[k - len1]) {
    len1--;
  }

  // 确定第k小元素在nums1的子数组nums1[0..len1-1]中
  // 或者在nums2的子数组nums2[0..len2-k+len1-1]中
  // 这里面就确定 k 小的元素在num1[0, 2] 里，或者在 num2的[0, 1]中
  let i = Math.min(len1, k) - 1;
  let j = k - i - 1;
  let kthElement;

  // 继续循环
  while (i >= 0 && j < len2) {
    if (nums1[i] > nums2[j]) {
      kthElement = nums2[j++];
    } else {
      kthElement = nums1[i--];
    }
    k--;
    // 如果已经找到第k小的元素，结束循环
    if (k === 0) return kthElement;
  }

  // 如果第k小的元素在nums1的左侧部分
  while (k > 0 && i >= 0) {
    kthElement = nums1[i--];
    k--;
  }

  // 如果第k小的元素在nums2的左侧部分
  while (k > 0 && j >= 0) {
    kthElement = nums2[j++];
    k--;
  }

  return kthElement;
};
```
