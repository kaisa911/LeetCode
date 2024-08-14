/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) => {
  let res = 0;
  for (const char of columnTitle) {
    res = res * 26 + (char.charCodeAt() - 64);
  }
  return res;
};