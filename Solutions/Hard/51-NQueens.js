/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = n => {
  let cur = [],
    t = 1,
    space = [];
  cur.length = n + 1;
  cur.fill(0);

  const validQueen = () => {
    for (let i = cur[t]; i <= n; ++i) {
      let collision = false;
      for (let j = 1; j <= t - 1; ++j) {
        if (cur[j] == i || Math.abs(i - cur[j]) == Math.abs(t - j)) {
          collision = true;
          break;
        }
      }
      if (!collision) return i;
    }
    return 0;
  };

  while (t > 0) {
    if (t > n) {
      let lines = [];
      for (let i = 1; i <= n; ++i) {
        lines.push('.'.repeat(cur[i] - 1) + 'Q' + '.'.repeat(n - cur[i]));
      }
      space.push(lines);
      t--;
    }
    if (cur[t] + 1 > n) {
      cur[t] = 0;
      t--;
    } else {
      cur[t]++;
      let res = validQueen();
      cur[t] = res;
      t = res > 0 ? t + 1 : t - 1;
    }
  }

  return space;
};
