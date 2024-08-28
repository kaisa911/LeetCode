/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
  // 找到三个最大的数和两个最小的数
  let first = (second = third = Infinity); // 初始化为正无穷
  let fourth = (fifth = -Infinity); // 初始化为负无穷

  for (const num of nums) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }

    if (num < fourth) {
      fifth = fourth;
      fourth = num;
    } else if (num < fifth) {
      fifth = num;
    }
  }

  // 计算两种情况的乘积并返回较大者
  return Math.max(first * second * third, first * fourth * fifth);
};
