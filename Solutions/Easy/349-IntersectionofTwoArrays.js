/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const result = [];
  for (let num of s1.values()) {
    if (s2.has(num)) {
      result.push(num);
    }
  }
  return result;
};
