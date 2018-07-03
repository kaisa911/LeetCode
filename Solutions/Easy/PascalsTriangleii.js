/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
  let res = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    let e = [];
    for (let j = 0; j <= i; j++) {
      if (j === i) {
        e.push(1);
      }
      e.push(j === 0 ? res[i - 1][j] : res[i - 1][j - 1] + res[i - 1][j]);
    }
    res.push(e);
  }
  return res[rowIndex];
};
