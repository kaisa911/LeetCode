# 分割回文串 II

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是
回文串
。

返回符合要求的 最少分割次数 。

示例 1：

```javascript
输入：s = "aab"
输出：1
解释：只需一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
```

示例 2：

```javascript
输入：s = "a"
输出：0
```

示例 3：

```javascript
输入：s = "ab"
输出：1
```

提示：

- 1 <= s.length <= 2000
- s 仅由小写英文字母组成

思路

1. 初始化：创建一个二维数组 g 用于存储字符串 s 的子串是否为回文串。
2. 填充回文子串：使用两层循环填充 g 数组。如果子串 s[i...j]是回文串，则 g[i][j]设置为 true。
3. 初始化最少分割次数数组：创建一个数组 f，其中 f[i]表示将字符串 s[0...i]分割成回文子串的最少分割次数。
4. 动态规划：使用循环和 g 数组来填充 f 数组。对于每个 i，检查是否可以将 s[0...i]分割成更少的次数。

返回结果：返回 f[n - 1]，即整个字符串 s 分割成回文子串的最少分割次数。

时间复杂度：O(n^2)，其中 n 是字符串 s 的长度。需要填充一个 n×n 的矩阵。
空间复杂度：O(n^2)，用于存储回文子串信息的二维数组 g，以及 O(n)用于存储最少分割次数的数组 f。

```js
var minCut = function (s) {
  const n = s.length;
  const g = new Array(n).fill(0).map(() => new Array(n).fill(true));

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      g[i][j] = s[i] == s[j] && g[i + 1][j - 1];
    }
  }

  const f = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < n; ++i) {
    if (g[0][i]) {
      f[i] = 0;
    } else {
      for (let j = 0; j < i; ++j) {
        if (g[j + 1][i]) {
          f[i] = Math.min(f[i], f[j] + 1);
        }
      }
    }
  }

  return f[n - 1];
};
```
