# 分割回文串

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是
回文串
。返回 s 所有可能的分割方案。

示例 1：

```javascript
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
```

示例 2：

```javascript
输入：s = "a"
输出：[["a"]]
```

提示：

- 1 <= s.length <= 16
- s 仅由小写英文字母组成

思路

1. 初始化：创建一个全局数组 ret 用于存储所有可能的分割方案，以及一个局部数组 ans 用于构建当前的分割方案。
2. DFS 函数：定义一个递归函数 dfs，它接收一个参数 i，表示当前正在考虑的字符串 s 的起始索引。
3. 基本情况：如果 i 等于字符串 s 的长度 n，则将当前的分割方案（ans 的副本）添加到结果数组 ret 中。
4. 递归搜索：对于每个可能的子串，从索引 i 到 j：
   - 检查子串 s[i...j]是否是回文串。
   - 如果是回文串，则将其添加到当前分割方案 ans 中，并递归调用 dfs(j + 1)探索下一个子串。
   - 递归完成后，从 ans 中移除最后一个元素（回溯）。
5. 检查回文：定义一个函数 isPalindrome，它使用记忆化搜索来检查子串 s[i...j]是否是回文串。
6. 记忆化搜索：使用一个二维数组 f 来存储子串是否是回文串的结果，避免重复计算。
7. 主函数调用：在 partition 函数中调用 dfs 函数，并传入起始索引 0。

时间复杂度：最坏情况下为 O(2^n)，其中 n 是字符串 s 的长度。这是因为在最坏情况下，每个子串都需要进行一次检查，且每个子串的检查最多需要 O(n)时间。
空间复杂度：O(n^2)，用于存储记忆化搜索的二维数组 f，以及 O(n)用于存储当前分割方案的数组 ans。

```javascript
var partition = function (s) {
  const dfs = (i) => {
    if (i === n) {
      ret.push(ans.slice());
      return;
    }
    for (let j = i; j < n; ++j) {
      if (isPalindrome(i, j) === 1) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  };
  // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
  const isPalindrome = (i, j) => {
    if (f[i][j] !== 0) {
      return f[i][j];
    }
    if (i >= j) {
      f[i][j] = 1;
    } else if (s[i] === s[j]) {
      f[i][j] = isPalindrome(i + 1, j - 1);
    } else {
      f[i][j] = -1;
    }
    return f[i][j];
  };
  const n = s.length;
  const ret = [],
    ans = [];
  const f = new Array(n).fill(0).map(() => new Array(n).fill(0));
  dfs(0);
  return ret;
};
```
