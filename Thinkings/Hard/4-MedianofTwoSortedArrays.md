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

可以使用二分查找法。以下是具体的算法步骤：

1. 合并逻辑：由于两个数组都是有序的，我们可以模拟合并过程而不是真的合并它们，这样可以避免不必要的排序开销。
2. 初始化：设置两个指针 i = 0 和 j = 0 分别指向 nums1 和 nums2 的起始位置，以及一个变量 total 来存储两个数组元素总数。
3. 二分查找：使用二分查找确定中位数可能在哪个数组中，或者两个数组的交界处。
4. 确定中位数：根据 nums1 和 nums2 的元素数量和中位数的位置，确定中位数是单个值还是两个值的平均。

在这个实现中，findKthElement 函数负责找到两个数组合并后第 k 小的元素。我们使用 while 循环来模拟合并过程，同时更新 i 和 j 指针。当我们知道中位数的位置时（即 total 是奇数或偶数的情况），我们调用 findKthElement 来获取中位数或中位数的两个相邻元素，然后计算平均值。

这种方法避免了合并两个数组的开销，并且通过二分查找直接定位到中位数或中位数的两个相邻元素，从而实现了 O(log(m + n)) 的时间复杂度。

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

  // 确保nums1的长度小于或等于k/2
  while (len1 > Math.ceil(k / 2) && nums1[len1 - 1] > nums2[k - len1]) {
    len1--;
  }

  // 确定第k小元素在nums1的子数组nums1[0..len1-1]中
  // 或者在nums2的子数组nums2[0..len2-k+len1-1]中
  let i = Math.min(len1, k) - 1;
  let j = k - i - 1;

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
