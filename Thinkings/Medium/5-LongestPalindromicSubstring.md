# 最长回文子串

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

```js
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

示例 2：

```js
输入: 'cbbd';
输出: 'bb';
```

思路：回文串，就是从左往右和从右往左都是一样的。要定义两个变量 start 和 maxLen，分别表示最长回文子串的起点跟长度，在遍历 s 中的字符的时候，我们首先判断剩余的字符数是否小于等于 maxLen 的一半，是的话表明就算从当前到末尾到子串是半个回文串，那么整个回文串长度最多也就是 maxLen，既然 maxLen 无法再变长了，计算这些就没有意义，直接在当前位置 break 掉就行了。否则就要继续判断，我们用两个变量 left 和 right 分别指向当前位置，然后我们先要做的是向右遍历跳过重复项，这个操作很必要，比如对于 noon，i 在第一个 o 的位置，如果我们以 o 为最中心往两边扩散，是无法得到长度为 4 的回文串的，只有先跳过重复，此时 left 指向第一个 o，right 指向第二个 o，然后再向两边扩散。而对于 bob，i 在第一个 o 的位置时，无法向右跳过重复，此时 left 和 right 同时指向 o，再向两边扩散也是正确的，所以可以同时处理奇数和偶数的回文串，之后的操作就是更新 maxLen 和 start 了，参见代码如下：

```js
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
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
