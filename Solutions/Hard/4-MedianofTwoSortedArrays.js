/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let i,
    j,
    left,
    arr = [];
  for (i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    if (nums1[i] > nums2[j]) {
      arr.push(nums2[j++]);
    } else {
      arr.push(nums1[i++]);
    }
  }
  left = nums1.length === i ? nums2.slice(j) : nums1.slice(i);
  arr = arr.concat(left);
  if (arr.length % 2) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    return (
      (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2 - 1)]) /
      2
    );
  }
};

const findMedianSortedArrays = (nums1, nums2) => {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  let len = arr.length;
  let middle = Math.floor(len / 2);
  if (len % 2) {
    return arr[middle];
  }
  return (arr[middle - 1] + arr[middle]) / 2;
};
