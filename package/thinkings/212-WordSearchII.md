# 单词搜索 II

给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words， 返回所有二维网格上的单词 。

单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

示例 1：

![1](https://assets.leetcode.com/uploads/2020/11/07/search1.jpg)

```js
输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
输出：["eat","oath"]
```

示例 2：
![1](https://assets.leetcode.com/uploads/2020/11/07/search2.jpg)

```js
输入：board = [["a","b"],["c","d"]], words = ["abcb"]
输出：[]
```

提示：

- m == board.length
- n == board[i].length
- 1 <= m, n <= 12
- board[i][j] 是一个小写英文字母
- 1 <= words.length <= 3 \* 10^4
- 1 <= words[i].length <= 10
- words[i] 由小写英文字母组成
- words 中的所有字符串互不相同

思路：

1. 构建字典树：首先，使用字典树来存储所有单词。字典树是一种用于检索字符串的数据结构，它可以快速判断一个字符串是否在树中。
2. 深度优先搜索：对于网格中的每个单元格，如果该单元格的字符在字典树中存在，就从该单元格开始进行深度优先搜索，尝试构建单词。
3. 搜索过程中的剪枝：在搜索过程中，如果当前路径上的字符不在字典树中，或者已经访问过（在网格中标记为'@'），则停止当前路径的搜索。
4. 回溯：在 DFS 过程中，每次递归后需要将当前单元格的字符恢复，以便进行下一次搜索。
5. 结果存储：使用一个集合来存储找到的单词，因为集合会自动去重。

时间复杂度：最坏情况下是 O((m \* n) \* l \* 4^l)，其中 m 和 n 分别是网格的行数和列数，l 是单词的最大长度，4 是因为在每个单元格上最多有四个方向可以移动。
空间复杂度：O(t \* l)，其中 t 是单词列表的大小，l 是单词的最大长度。这是因为字典树的空间占用。

```javascript
var findWords = function (board, words) {
  // build trie
  const trie = {};
  for (const word of words) {
    node = trie;
    for (const char of word) {
      node[char] = node[char] || {};
      node = node[char];
    }
    node._end = true;
  }

  // dfs fn
  function dfs(board, node, i, j, word) {
    if (node._end) {
      res.add(word);
    }
    const tmp = board[i][j];
    board[i][j] = '@';
    for (const arr of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      let _i = i + arr[0];
      let _j = j + arr[1];
      if (_i >= 0 && _i < m && _j >= 0 && _j < n && node[board[_i][_j]] && board[_i][_j] !== '@') {
        dfs(board, node[board[_i][_j]], _i, _j, word + board[_i][_j]);
      }
    }
    board[i][j] = tmp;
  }

  // search board by dfs
  const res = new Set();
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (trie[board[i][j]]) {
        dfs(board, trie[board[i][j]], i, j, board[i][j]);
      }
    }
  }

  return Array.from(res);
};
```
