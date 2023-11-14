function findDifference(nums1, nums2) {
  return [
    [...new Set(nums1.filter((_) => !nums2.includes(_)))],
    [...new Set(nums2.filter((_) => !nums1.includes(_)))],
  ];
}
