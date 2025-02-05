/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const cur = []
    const backtrack = (cur) => {
      if(cur.length === nums.length) {
        res.push(cur);
        return;
      }
      for(let i = 0; i < nums.length; i++) {
        if(cur.includes(nums[i])) continue;
        cur.push(nums[i]);
        backtrack(cur.slice());
        cur.pop();
      }
    }
    backtrack(cur);
    return res;
};
// @lc code=end

