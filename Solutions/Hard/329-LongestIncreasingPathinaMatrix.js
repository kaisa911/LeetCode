var longestIncreasingPath = function (matrix) {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  const dp = Array.from({ length: rowLen }, () => new Array(colLen).fill(0));
  let ans = 0;

  // 第一步： 从一点往4个方向递归：碰到比他大的就加一，否则就加0，结束返回；
  function helper(i, j, lastNum) {
    if (i < 0 || j < 0 || i >= rowLen || j >= colLen || matrix[i][j] <= lastNum) return 0;
    if (dp[i][j]) return dp[i][j]; //第二步： 如果当前格子已经算出来过最大值 就直接使用
    const top = helper(i - 1, j, matrix[i][j]) + 1;
    const bottom = helper(i + 1, j, matrix[i][j]) + 1;
    const left = helper(i, j - 1, matrix[i][j]) + 1;
    const right = helper(i, j + 1, matrix[i][j]) + 1;
    dp[i][j] = Math.max(top, bottom, left, right); //第三步： 否则就把往4个方向上走的最大值记录下来给dp
    return dp[i][j];
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      ans = Math.max(ans, helper(i, j, -1));
    }
  }
  return ans;
};
