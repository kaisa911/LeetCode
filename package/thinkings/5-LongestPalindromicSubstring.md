# 最长回文子串

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

**示例 1：**

```js
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例 2：**

```js
输入: 'cbbd';
输出: 'bb';
```

**思路：**

题目的整理分析
拿到这个“最长回文子串”的题目，首先要明确回文串的定义，即从左往右和从右往左读都一样。解题的初步思路通常是通过遍历字符串，以每个字符为中心，向两边扩展去判断是否构成回文串，并记录最长回文子串的长度和起始位置。选择这种方法是因为它比较直观，能够涵盖所有可能的情况来找到最长回文子串。

1. 首先定义两个变量`maxLength`和`start`来记录最长回文子串的长度和起始位置。
2. 通过两层循环，分别以单个字符和相邻两个字符为中心，调用`expandAroundCenter`函数进行扩展。
3. 在`expandAroundCenter`函数中，通过两个指针从中心向两边移动，只要字符相等就继续扩展。
4. 计算当前扩展得到的回文子串的长度，并与已记录的最长长度进行比较，如果更长则更新`maxLength`和`start`。

时间复杂度：O(n^2)，因为对于每个字符，都可能进行向两边扩展的操作，所以总体时间复杂度为 O(n^2)。
空间复杂度：O(1)，只使用了固定数量的几个变量，空间复杂度为常数级别。

```javascript
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(s, i, i);
    expandAroundCenter(s, i, i + 1);
  }

  return s.substring(start, start + maxLength);

  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const currentLength = right - left - 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      start = left + 1;
    }
  }
};
```

另一个比较合适的解题方式，是使用动态规划的方法。构建一个二维数组`dp`，其中`dp[i][j]`表示从索引`i`到索引`j`的子串是否为回文串。通过动态规划的方式，我们可以在遍历字符串的过程中，判断当前子串是否为回文串，并记录最长回文子串的长度和起始位置。

状态：dp[i][j]表示 s[i:j]是否是回文串。
转移方程：dp[i][j] = (s[i] == s[j]) && dp[i+1][j-1]。

1. 首先初始化`dp`数组，将所有的`dp[i][i]`设置为`true`，因为单个字符本身就是回文串。
2. 然后通过两层循环，分别以不同的子串长度和起始位置进行遍历。
3. 在每次循环中，判断当前子串是否为回文串。如果是回文串，则更新`maxLength`和`start`。
4. 最后返回最长回文子串。

时间复杂度：O(n^2)，两层循环，分别以不同的子串长度和起始位置进行遍历。
空间复杂度：O(n^2)，dp 数组的空间复杂度。

```js
const longestPalindrome = (s) => {
  // 处理空字符串的边界情况，直接返回空字符串
  if (s === '') {
    return '';
  }
  const n = s.length;
  const dp = Array.from(Array(n), () => Array(n).fill(false));
  let start = 0;
  let maxLen = 1;

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;

      if (s[j] === s[i] && (len === 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        if (len > maxLen) {
          start = i;
          maxLen = len;
        }
      }
    }
  }
  return s.slice(start, start + maxLen);
};
```
