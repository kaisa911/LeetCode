const getSum = (num: number): number => {
  let sum: number = 0;
  while (num > 9) {
    sum += ~~(num / 10);
    num = num % 10;
  }
  return sum + num;
};
function movingCount(m: number, n: number, k: number): number {
  const dp: boolean[][] = new Array(m).fill(null).map(() => new Array(n).fill(false));
  let res: number = 0;
  const dfs = (i: number, j: number): void => {
    if (i >= m || j >= n || dp[i][j] || getSum(i) + getSum(j) > k) return;
    dp[i][j] = true;
    res += 1;
    dfs(i, j + 1);
    dfs(i + 1, j);
  };
  dfs(0, 0);
  return res;
}
