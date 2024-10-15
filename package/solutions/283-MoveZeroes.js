/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let insertPos = 0; // 记录非零元素应该插入的位置
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i]; // 将非零元素移动到前面
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos++] = 0; // 在数组末尾填充0
  }
};
