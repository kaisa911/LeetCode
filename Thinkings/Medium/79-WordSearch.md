# 单词搜索

给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)

```js
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

示例 2：
![1](https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg)

```js
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true
```

示例 3：
![1](https://assets.leetcode.com/uploads/2020/10/15/word3.jpg)

```js
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false
```

提示：

- m == board.length
- n = board[i].length
- 1 <= m, n <= 6
- 1 <= word.length <= 15
- board 和 word 仅由大小写英文字母组成

进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？

思路：

1. 初始化访问矩阵：创建一个与输入的 board 大小相同的 visited 矩阵，并初始化所有值为 false。这个矩阵用于记录每个单元格是否已经被访问过。
2. 定义 DFS 函数：定义一个递归函数 dfs，它接收当前位置 y, x 和当前匹配到的单词索引 index 作为参数。
3. 递归退出条件：如果索引 index 等于单词 word 的长度，说明已经找到了整个单词，返回 true。
4. 越界和访问检查：如果当前位置超出边界，或者该位置已经被访问过，或者当前位置的字符与单词不匹配，返回 false。
5. 标记访问：将当前位置标记为已访问。
6. 搜索四个方向：递归搜索当前位置的上、下、左、右四个方向，如果任意方向上找到了单词的剩余部分，返回 true。
7. 回溯：搜索结束后，将当前位置标记回未访问状态，以便其他路径可以访问这个位置。
8. 遍历 board：在 exist 函数的主体部分，遍历 board 的每个单元格，如果该单元格未被访问且与单词的第一个字符匹配，则从该单元格开始 DFS 搜索。
9. 返回结果：如果在任何位置找到了整个单词，返回 true；如果遍历完所有单元格都没有找到，返回 false。

时间复杂度：O(m×n)，其中 m 是行数，n 是列数。最坏情况下需要遍历整个 board。
空间复杂度：O(m×n)，用于存储访问状态的 visited 矩阵。

```js
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));

  function dfs(y, x, index) {
    if (index === word.length) return true;
    if (y < 0 || y >= rows || x < 0 || x >= cols || visited[y][x] || board[y][x] !== word[index]) {
      return false;
    }

    visited[y][x] = true; // 标记为已访问
    let exists =
      dfs(y + 1, x, index + 1) ||
      dfs(y - 1, x, index + 1) ||
      dfs(y, x + 1, index + 1) ||
      dfs(y, x - 1, index + 1);
    visited[y][x] = false; // 回溯，恢复状态
    return exists;
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (!visited[y][x] && dfs(y, x, 0)) {
        return true;
      }
    }
  }

  return false;
};
```
