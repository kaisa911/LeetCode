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

思路：回文串，就是从左往右和从右往左都是一样的。

```js
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let Maxlen = 0,
    len = 0,
    left,
    start,
    end,
    offset;

  for (let i = 0; i < s.length; i++) {
    start = i;
    //判断重复的字符长度
    while (i < s.length - 1 && s.charAt(i) === s.charAt(i + 1)) {
      i++;
    }
    end = i;
    len = end - start + 1;
    //重复的两侧的字符是否回文
    let offstart = start;
    let offend = end;
    for (
      offset = 1;
      offset <= Math.min(offstart, s.length - offend - 1);
      offset++
    ) {
      if (s[offstart - offset] === s[offend + offset]) {
        len += 2;
        start = start - 1;
        end = end + 1;
      } else {
        break;
      }
    }
    if (len > Maxlen) {
      Maxlen = len;
      left = start;
    }
  }
  return s.substring(left, left + Maxlen);
};
```
