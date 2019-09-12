# 重复的子字符串

给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过 10000。

**示例 1:**

```
输入: "abab"

输出: True
```

解释: 可由子字符串 "ab" 重复两次构成。
**示例 2:**

```
输入: "aba"

输出: False
```

**示例 3:**

```
输入: "abcabcabcabc"

输出: True
```

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

思路：
第一个想法就是可以用正则来判断啊，如果这个是多个相同的字符串构成的，那就返回 true
第二个是看到大佬的题解，两个 s 和在一起，然后掐头去尾，判断是否有 s，厉害！

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let reg = /^(\w+)\1+$/;
  return reg.test(s);
};
```

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return (s + s).substring(1, s.length * 2 - 1).indexOf(s) != -1;
};
```
