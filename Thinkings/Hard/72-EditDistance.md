# 编辑距离

给定两个单词  word1 和  word2，计算出将  word1  转换成  word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

- 插入一个字符
- 删除一个字符
- 替换一个字符

**示例  1:**

```
输入: word1 = "horse", word2 = "ros"
输出: 3

解释:
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```

**示例  2:**

```
输入: word1 = "intention", word2 = "execution"
输出: 5

解释:
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
```

**思路：**
这个问题是一个典型的动态规划问题，可以通过以下步骤解决：

1. 定义状态：定义 dp[i][j] 表示将 word1 的前 i 个字符转换成 word2 的前 j 个字符所使用的最少操作数。
2. 初始化 DP 表：创建一个大小为 (m+1) x (n+1) 的 DP 表，其中 m 和 n 分别是 word1 和 word2 的长度。dp[0][0] 初始化为 0，表示两个空字符串之间的转换操作数为 0。其余位置初始化为它们对应的行和列的索引之和，表示只删除或只插入字符的操作数。
3. 状态转移方程：填充 DP 表，对于每个 dp[i][j]：
  - 如果 word1[i-1] 等于 word2[j-1]，则不需要操作，dp[i][j] = dp[i-1][j-1]。
  - 否则，考虑以下三种情况：
    - 替换：dp[i-1][j-1] + 1（将 word1 的一个字符替换为 word2 的一个字符）。
    - 删除：dp[i-1][j] + 1（从 word1 删除一个字符）。
    - 插入：dp[i][j-1] + 1（在 word1 插入一个字符）。
  取这三种情况的最小值作为 dp[i][j] 的值。
4. 返回结果：DP 表中 dp[m][n] 的值即为将 word1 转换成 word2 的最少操作数。

时间复杂度：O(m×n)，其中 m 和 n 分别是 word1 和 word2 的长度。需要填充一个 (m+1) x (n+1) 的 DP 表。
空间复杂度：O(m×n)，DP 表的大小。

**代码：**

```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  const m = word1.length;
  const n = word2.length;
  const res = [];
  for (let i = 0; i <= m; i++) {
    res.push([]);
    for (let j = 0; j <= n; j++) {
      if (i * j) {
        res[i][j] =
          word1[i - 1] === word2[j - 1]
            ? res[i - 1][j - 1]
            : 1 + Math.min(res[i - 1][j - 1], res[i - 1][j], res[i][j - 1]);
      } else {
        res[i][j] = i + j;
      }
    }
  }
  return res[m][n];
};
```
