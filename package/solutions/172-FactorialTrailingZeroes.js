/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = (n) => {
  let count = 0; // 用于计数尾部零的数量
  // 循环除以5，因为每个5都会至少产生一个尾部零
  while (n >= 5) {
    count += Math.floor(n / 5); // 计算当前n中5的倍数的数量
    n = Math.floor(n / 5); // 更新n为除以5后的整数部分
  }
  return count; // 返回尾部零的总数
};