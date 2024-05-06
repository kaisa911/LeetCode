# N 皇后

按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)

```js
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

示例 2：

```js
输入：n = 1
输出：[["Q"]]
```

提示：

- 1 <= n <= 9

```js
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

```
