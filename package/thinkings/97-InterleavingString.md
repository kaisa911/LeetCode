# 交错字符串

给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空
子字符串
：

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
注意：a + b 意味着字符串 a 和 b 连接。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg)

```js
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true
```

示例 2：

```js
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false
```

示例 3：

```js
输入：s1 = "", s2 = "", s3 = ""
输出：true
```

提示：

- 0 <= s1.length, s2.length <= 100
- 0 <= s3.length <= 200
- s1、s2、和 s3 都由小写英文字母组成

进阶：您能否仅使用 O(s2.length) 额外的内存空间来解决它?

思路：
1. 理解问题：判断s3是否由s1和s2交替组成，即s3可以是s1和s2的字符交错连接形成的所有可能序列之一。
2. 初始化：创建一个二维数组dp，其中dp[i][j]表示s3的前i+j个字符可以由s1的前i个字符和s2的前j个字符交替组成。
3. 边界条件：初始化dp[0][0]为true，表示空字符串可以通过空字符串交替组成。然后根据s1和s2的字符更新第一行和第一列。
4. 动态规划：遍历dp数组，对于每个dp[i][j]：
  - 如果s1[i-1]等于s3[i+j-1]，并且dp[i-1][j]为true，则dp[i][j]为true，因为s1的字符可以扩展到s3中。
  - 如果s2[j-1]等于s3[i+j-1]，并且dp[i][j-1]为true，则dp[i][j]为true，因为s2的字符可以扩展到s3中。
5. 最终结果：dp[m-1][n-1]中的值即为所求，表示s3是否完全由s1和s2交替组成。

时间复杂度：O(m×n)，其中m是s1的长度，n是s2的长度。需要填充一个m×n的矩阵。
空间复杂度：O(m×n)，用于存储动态规划矩阵。

```js
var isInterleave = function (s1, s2, s3) {
  const m = s1.length + 1,
    n = s2.length + 1;
  if (s3.length !== m + n - 2) return false;
  const dp = [];
  for (let i = 0; i < m; ++i) {
    const temp = new Array(n);
    dp.push(temp);
  }
  dp[0][0] = true;
  for (let i = 1; i < m; ++i) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }
  for (let j = 1; j < n; ++j) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }
  return dp[m - 1][n - 1];
};
```
