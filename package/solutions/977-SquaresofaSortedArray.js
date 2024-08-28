/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = (A) => {
  let left = 0;
  let right = A.length - 1;
  const squares = new Array(A.length);

  for (let k = right; k >= 0; k--) {
    const squareLeft = A[left] * A[left];
    const squareRight = A[right] * A[right];
    if (squareLeft > squareRight) {
      squares[k] = squareLeft;
      left++;
    } else {
      squares[k] = squareRight;
      right--;
    }
  }

  return squares;
};
