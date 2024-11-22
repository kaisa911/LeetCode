/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const list1 = [...new Set(nums1)];
  const list2 = [...new Set(nums2)];
  return list1.filter((item) => list2.includes(item));
};
// @lc code=end
