function findDifference(nums1, nums2) {
  const set2 = new Set(nums2); // 将 nums2 转换为 Set，便于快速查找
  const set1 = new Set(nums1); // 将 nums1 转换为 Set

  // 筛选出 nums1 中不在 nums2 中的元素
  const diff1 = [...new Set(nums1.filter((item) => !set2.has(item)))];

  // 筛选出 nums2 中不在 nums1 中的元素
  const diff2 = [...new Set(nums2.filter((item) => !set1.has(item)))];

  return [diff1, diff2];
}
