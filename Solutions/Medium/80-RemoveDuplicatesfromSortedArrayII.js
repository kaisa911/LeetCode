/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 1;
  let i = 1
  while(i<nums.length) {
    if(nums[i]===nums[i-1]){
      count++
      if(count>2){
          nums.splice(i,1);
          i--;
      }
    }else{
      count=1;
    }
    i++
  }
  return nums.length;
};