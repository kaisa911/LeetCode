var removeDuplicates = function (nums) {
  let count = 1; // 用于记录当前元素的重复次数
  let i = 1; // 从数组的第二个元素开始遍历
  while (i < nums.length) {
    if (nums[i] === nums[i - 1]) {
      count++;
      if (count > 2) {
        nums.splice(i, 1); // 删除重复元素
        i--; // 重新检查当前位置
      } else {
        i++; // 继续检查下一个元素
      }
    } else {
      count = 1; // 重置计数器
      i++; // 继续检查下一个元素
    }
  }
  return nums.length; // 返回新数组的长度
};
