# 矩阵中的路径

给定一个  m x n 二维字符网格  board 和一个字符串单词  word 。如果  word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。

![tu](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)

示例 1：

```js
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

示例 2：

```js
输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
```

提示：

- m == board.length
- n = board[i].length
- 1 <= m, n <= 6
- 1 <= word.length <= 15
- board 和 word 仅由大小写英文字母组成

**思路：**

在做这道题的时候，我想到了dfs来做，就是找到起始点，然后上下左右继续深度的找，找到就返回true，到达边界或者其他下一个找不到当前字符，就返回。

- DFS 解析：
  - 递归参数： 当前元素在矩阵 board 中的行列索引 i 和 j ，当前目标字符 word 。
- 终止条件：
  - 返回 false：
    - 行或列索引越界
    - 当前矩阵元素与目标字符不同
    - 当前矩阵元素已访问过（通过将访问过的字符置空）
  - 返回 true： word === '' ，即字符串 word 已全部匹配。

- 递推过程：
  - 标记当前矩阵元素： 将 board[i][j] 修改为 空字符 '' ，代表此元素已访问过，防止之后搜索时重复访问。
  - 搜索下一单元格： 朝当前元素的 上、下、左、右 四个方向开启下层递归，使用 或 连接 （代表只需找到一条可行路径就直接返回，不再做后续 DFS ），并记录结果至 res 。
  - 还原当前矩阵元素： 将 board[i][j] 元素还原至初始值，即 word[k] 。
- 返回值： 返回布尔量 res ，代表是否搜索到目标字符串。


```ts
function exist(board: string[][], word: string): boolean {
  let res: boolean = false;
  const col: number = board[0].length;
  const row: number = board.length;

  // 深度遍历
  const dfs = (i: number, j: number, word: string): void => {
    // 边界校验
    if (res) return;
    if (word === '') {
      res = true;
      return;
    }
    if (i < 0 || j < 0 || i > row - 1 || j > col - 1) return;
    if (board[i][j] !== word[0]) return;

    let temp = board[i][j];
    board[i][j] = '';
    const newWord = word.slice(1);
    dfs(i - 1, j, newWord);
    dfs(i, j - 1, newWord);
    dfs(i, j + 1, newWord);
    dfs(i + 1, j, newWord);
    board[i][j] = temp;
  };

  for (let i: number = 0; i < row; i++) {
    for (let j: number = 0; j < col; j++) {
      if (word[0] === board[i][j]) {
        dfs(i, j, word);
      }
    }
  }
  return res;
}
```
