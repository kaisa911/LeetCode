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

回文串，就是从左往右和从右往左都是一样的。

1. 如果输入的字符串 s 的长度小于 2，那么直接返回 s，因为长度小于 2 的字符串本身就是回文串。

2. 然后，定义三个变量 len、maxLen 和 start。len 是字符串 s 的长度，maxLen 用来存储最长回文子串的长度，初始值为 0，start 用来标记最长回文子串的起始位置，初始值为 0。

3. 接下来，遍历字符串 s。对于每一个字符 s[i]，首先检查是否有必要继续查找。如果 len - i <= maxLen / 2，那么即使后面所有的字符都能构成回文串，其长度也不会超过当前已找到的最长回文子串的长度，所以可以直接跳出循环。

4. 然后，定义两个指针 left 和 right，并将它们都初始化为 i。首先向右移动 right 指针，直到 s[right + 1] != s[right]。然后同时向两边扩展 left 和 right 指针，直到 s[right + 1] != s[left - 1]。

5. 如果当前找到的回文子串的长度大于 maxLen，那么更新 maxLen 和 start 的值。

6. 最后，返回从位置 start 开始、长度为 maxLen 的子串。

参见代码如下：

```js
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s.length < 2) return s;
  let len = s.length,
    maxLen = 0,
    start = 0;
  for (let i = 0; i < len; ) {
    if (len - i <= maxLen / 2) break;
    let left = i,
      right = i;
    while (right < len - 1 && s[right + 1] == s[right]) ++right;
    i = right + 1;
    while (right < len - 1 && left > 0 && s[right + 1] == s[left - 1]) {
      ++right;
      --left;
    }
    if (maxLen < right - left + 1) {
      maxLen = right - left + 1;
      start = left;
    }
  }
  return s.substring(start, start + maxLen);
};
```
