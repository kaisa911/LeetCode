/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let len1 = nums1.length;
  let len2 = nums2.length;
  let i = 0;
  let j = 0;
  let arr = [];
  while (i < len1 && j < len2) {
    if (nums1[i] == nums2[j]) {
      arr.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return arr;
};
