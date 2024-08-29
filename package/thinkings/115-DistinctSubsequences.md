# 不同的子序列

给你两个字符串 s 和 t ，统计并返回在 s 的 子序列 中 t 出现的个数，结果需要对 109 + 7 取模。

示例 1：

```js
输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
rabbbit
rabbbit
rabbbit
```

示例 2：

```js
输入：s = "babgbag", t = "bag"
输出：5
解释：
如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。
babgbag
babgbag
babgbag
babgbag
babgbag
```

提示：

- 1 <= s.length, t.length <= 1000
- s 和 t 由英文字母组成

思路

1. 初始化动态规划数组：创建一个数组 dp，其中 dp[j]表示字符串 t 的前 j 个字符在字符串 s 中的不同子序列的数量。
2. 边界条件：dp[0]初始化为 1，表示空字符串在任何字符串中都有 1 种子序列。
3. 填充动态规划数组：
   - 遍历字符串 s，对于每个字符 s[i]：
   - 从后向前更新 dp 数组，dp[j]存储在 s[0...i]中形成 t[0...j-1]的子序列的数量。
   - 如果 s[i]不等于 t[j-1]，则 dp[j]保持不变，因为 s[i]不能扩展 t[0...j-1]的子序列。
   - 如果 s[i]等于 t[j-1]，则 dp[j]需要加上 dp[j-1]的值，因为 s[i]可以作为 t[0...j-1]的一个新子序列的结尾。
4. 模运算：在更新 dp[j]时，由于结果需要对 10^9 + 7 取模，所以使用模运算来避免整数溢出。
5. 返回结果：dp[n]即为在 s 中 t 作为子序列出现的不同数量。

时间复杂度：O(m×n)，其中 m 是字符串 s 的长度，n 是字符串 t 的长度。
空间复杂度：O(n)，因为只维护了一个与 t 长度相关的一维数组。

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const MOD = 10 ** 9 + 7;
  const n = t.length,
    m = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1; // 空子序列的个数为1

  for (let i = 0; i < m; i++) {
    let prev = 0; // 用于存储前一个状态的值
    for (let j = 0; j < n; j++) {
      let temp = dp[j + 1];
      if (s[i] === t[j]) {
        dp[j + 1] = (prev + dp[j + 1]) % MOD;
      }
      prev = temp;
    }
  }

  return dp[n];
};
```
