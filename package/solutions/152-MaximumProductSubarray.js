var maxProduct = function(nums) {
  let res = nums[0];
  let prevMin = nums[0];
  let prevMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    if (current < 0) {
      // 当前元素为负数，最小和最大乘积互换
      let temp = prevMin;
      prevMin = prevMax;
      prevMax = temp;
    }
    
    // 更新最小乘积和最大乘积
    prevMin = Math.min(current, prevMin * current);
    prevMax = Math.max(current, prevMax * current);
    
    // 更新全局最大乘积
    res = Math.max(res, prevMax);
  }
  
  return res;
};