/**
 * @param {number[]} nums
 * @return {number[]}
 * hash表
 */
var smallerNumbersThanCurrent = function (nums) {
  const count = new Array(101).fill(0); // 因为数字范围是 0 到 100
  const res = [];

  for (let num of nums) {
    count[num]++; // 统计每个数字出现的次数
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]; // 计算前缀和
  }

  for (let num of nums) {
    if (num === 0) {
      res.push(0);
    } else {
      res.push(count[num - 1]); // 直接获取小于当前数字的个数
    }
  }

  return res;
};