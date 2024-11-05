/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = (s, k) => {
  let numStr = '';
  for (let char of s) {
    let num = char.charCodeAt() - 96;
    numStr += num < 10 ? num : num.toString();
  }

  let curNum = parseInt(numStr);
  for (let i = 0; i < k; i++) {
    let sum = 0;
    while (curNum > 0) {
      sum += curNum % 10;
      curNum = Math.floor(curNum / 10);
    }
    curNum = sum;
  }
  return curNum;
};
