/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = A => {
  const arr = A.map(v => v * v);
  return arr.sort((a, b) => a - b);
};
