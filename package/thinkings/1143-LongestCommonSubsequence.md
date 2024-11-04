# 最长公共子序列

给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

示例 1：

```javascript
输入：text1 = "abcde", text2 = "ace"
输出：3
解释：最长公共子序列是 "ace" ，它的长度为 3 。
```

示例 2：

```javascript
输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
```

示例 3：

```javascript
输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。
```

提示：

1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。

思路：

拿到这个题目，首先想到的是使用动态规划来解决。因为要求两个字符串的最长公共子序列长度，通过逐步比较两个字符串的字符，可以根据之前的比较结果来得出当前位置的最优解，具有明显的子问题重叠性质。选择动态规划的理由是其能够有效地处理这种具有最优子结构和重叠子问题的情况，通过建立状态转移方程来逐步求解最终的结果。

1. 首先创建了一个二维数组 `dp` 来存储中间计算的结果，`dp[i][j]` 表示 `text1` 的前 `i` 个字符和 `text2` 的前 `j` 个字符的最长公共子序列长度。
2. 外层的两个循环遍历两个字符串的每个位置。
3. 当当前比较的两个字符相等时，即 `c1 === c2`，此时的最长公共子序列长度等于前一个位置的长度加 1，即 `dp[i][j] = dp[i - 1][j - 1] + 1` 。
4. 当两个字符不相等时，通过比较去掉当前 `text1` 字符和去掉当前 `text2` 字符这两种情况的最长公共子序列长度，取最大值，即 `dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])` 。

时间复杂度：O(m _ n)，其中 m 是 `text1` 的长度，n 是 `text2` 的长度。需要双重循环遍历两个字符串。
空间复杂度：O(m _ n)，创建了一个大小为 `m + 1` 乘以 `n + 1` 的二维数组来存储中间结果。

```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length,
    n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};
```
