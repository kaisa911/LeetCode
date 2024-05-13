/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let diffSum = 0;
  const sIndexMap = {};

  // 首先，构建一个映射表，存储s中每个字符的索引
  for (let i = 0; i < s.length; i++) {
    sIndexMap[s[i]] = i;
  }

  // 然后，遍历t字符串，对于t中的每个字符，找到它在s中的索引，并计算差的绝对值
  for (let i = 0; i < t.length; i++) {
    const charIndexInS = sIndexMap[t[i]];
    diffSum += Math.abs(charIndexInS - i);
  }

  return diffSum;
};
