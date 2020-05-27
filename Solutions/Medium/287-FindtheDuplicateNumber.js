/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i]
    if(value in obj) {
      return value
    }
    obj[value] = i
  }
};