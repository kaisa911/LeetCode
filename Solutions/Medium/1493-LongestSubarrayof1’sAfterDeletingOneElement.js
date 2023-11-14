var longestSubarray = function (nums) {
  //右边为[0, 0, 0, 0]的简写
  let [left, right, cur, max] = new Array(4).fill(0);
  // 滑动窗口
  while (right < nums.length) {
    cur += nums[right];
    while (right - left > cur) {
      cur -= nums[left++];
    }
    // 判断是否含有0 解释: 若子数组全为1, 其总和等于right - left + 1 举例 [1,1,1]
    max = Math.max(max, cur - (right - left === cur - 1 ? 1 : 0));
    right++;
  }
  return max;
};
