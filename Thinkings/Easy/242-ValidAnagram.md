# 有效的字母异位词

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

**示例  1:**

```js
输入: (s = 'anagram'), (t = 'nagaram');
输出: true;
```

**示例 2:**

```js
输入: (s = 'rat'), (t = 'car');
输出: false;
```

**说明:**
你可以假设字符串只包含小写字母。

**思路：**
拿到这道题，我就想了一下，因为题目里只有小写字母，所以就只需要计算这个单词的 ASCII 的和是否相同。
同时还要考虑，某一个字符在不在另一个单词里。在的话就继续加，不在就返回 false

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    if (s.indexOf(t[i]) !== -1) {
      sum1 += s[i].charCodeAt();
      sum2 += t[i].charCodeAt();
    } else {
      return false;
    }
  }
  return sum1 === sum2;
};
```
