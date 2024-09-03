var singleNumber = function (nums) {
  let xorSum = 0;
  for (const num of nums) {
    xorSum ^= num;
  }

  // 找到 xorSum 中任意一个为 1 的位
  let diffBit = 1;
  while ((diffBit & xorSum) === 0) {
    diffBit <<= 1;
  }

  let num1 = 0;
  let num2 = 0;
  for (const num of nums) {
    if ((num & diffBit) === 0) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }
  return [num1, num2];
};
