# 最短回文串

给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为
回文串
。找到并返回可以用这种方式转换的最短回文串。

示例 1：

```javascript
输入：s = "aacecaaa"
输出："aaacecaaa"
```

示例 2：

```javascript
输入：s = "abcd"
输出："dcbabcd"
```

提示：

- 0 <= s.length <= 5 \* 10^4
- s 仅由小写英文字母组成

思路：

1. 字符串反转：首先，将输入字符串 s 反转，并在中间加上一个特殊字符（如 '#'）作为分隔符，形成新字符串 str。
2. KMP 算法：使用 KMP 算法的 next 数组来找到 str 中的最长回文前缀。next 数组存储了字符串中每个位置之前的子串中最长的相等前后缀的长度。
3. 寻找最长回文前缀：通过 next 数组找到 str（即原字符串 s 加上反转的 s）的最长回文前缀的长度。
4. 添加字符：将原字符串 s 中不在最长回文前缀中的字符取反，然后添加到 s 的前面，形成最短的回文串。

时间复杂度：O(n)，其中 n 是字符串 s 的长度。KMP 算法在构建 next 数组时的时间复杂度为 O(n)。
空间复杂度：O(n)，用于存储 next 数组和中间结果。

```javascript
const shortestPalindrome = (s) => {
  const rev_s = s.split('').reverse().join('');
  const str = s + '#' + rev_s;
  const next = new Array(str.length).fill(0);
  const kmp = (next, str) => {
    next[0] = 0;
    let len = 0;
    let i = 1;
    while (i < str.length) {
      if (str[i] == str[len]) {
        len++;
        next[i] = len;
        i++;
      } else {
        if (len == 0) {
          next[i] = 0;
          i++;
        } else {
          len = next[len - 1];
        }
      }
    }
  };
  kmp(next, str);
  const maxLen = next[str.length - 1]; // 最长回文前缀的长度
  const add = s.substring(maxLen).split('').reverse().join('');
  return add + s;
};
```
