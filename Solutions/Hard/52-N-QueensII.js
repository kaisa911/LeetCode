/**
 * @param {number} n
 * @return {number}
 * 把上一题的答案返回长度
 */
var totalNQueens = function(n) {
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

  return space.length;
};

// 大佬的做法
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  var arr = [0, 1, 0, 0, 2, 10, 4, 40, 92, 352, 724];
  return arr[n];
};
// 大佬的做法2
function totalNQueens(n) {
  return DFS(n);
}
//                                                ???           ???
function DFS(n, row = 0, col = 0, lSlope = 0, rSlope = 0) {
  if (row >= n) {
    return 1;
  }
  // col , lSlope , rSlope ?????1????????
  // eg: 00000100 | 00001000 | 00000010  => 00001110  (??n?4,bits?8)
  // javascript?bit?32?
  // ~????,1????????, ???32?bit,?????0?1?,???
  // eg: ~00001110 => 11110001
  // n?4: (1 << n) - 1  => 00001111
  // 11110001 & 00001111 => 11110001   1???????????
  let bits = ~(col | lSlope | rSlope) & ((1 << n) - 1);
  // ????
  let count = 0;
  // ??0??????
  while (bits) {
    // ????,???????
    // eg: 11110001 & 00001111 => 00000001
    const vacancy = bits & -bits;
    count += DFS(
      n,
      row + 1, // ????
      col | vacancy, // ???? 00000000 | 00000001 => 00000001
      (lSlope | vacancy) << 1, // ?????
      (rSlope | vacancy) >> 1
    ); // ?????
    bits = bits & (bits - 1);
  }
  return count;
}
