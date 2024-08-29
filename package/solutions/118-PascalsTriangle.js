/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const e = [];
    for (let j = 0; j <= i; j++) {
      e.push(j === 0 || i === j ? res[i - 1][0] : res[i - 1][j - 1] + res[i - 1][j]);
    }
    res.push(e);
  }
  return res;
};
