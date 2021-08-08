/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = (s, k) => {
  let transferStr = s
    .split('')
    .map((item) => item.charCodeAt() - 96)
    .join('');
  let str = transferStr;
  for (let i = 0; i < k; i++) {
    str = String(str.split('').reduce((sum, cur) => +sum + +cur, 0));
  }
  return +str;
};
