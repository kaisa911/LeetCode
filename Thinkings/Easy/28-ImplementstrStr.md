# 找出字符串中第一个匹配项的下标

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

示例 1：

```js
输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
```

示例 2：

```js
输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
```

提示：

- 1 <= haystack.length, needle.length <= 104
- haystack 和 needle 仅由小写英文字符组成

思路：

在 haystack 这个字符串中寻找 needle 这个字符串首次出现的位置，思路如下

1. 如果 needle 是空字符串，那么函数直接返回 0。
2. 函数获取 haystack 和 needle 的长度，分别存储在 m 和 n 中。如果 haystack 的长度小于 needle，那么函数直接返回 -1
3. 函数通过一个外层循环遍历 haystack 中的每一个字符，直到 haystack 的倒数第 n 个字符（因为 needle 的长度是 n，所以不需要检查 haystack 的最后 n-1 个字符）。
4. 对于 haystack 中的每一个字符，函数都会通过一个内层循环来检查从这个字符开始的 n 个字符是否和 needle 完全匹配。如果在某一位置发现字符不匹配，那么内层循环就会提前结束。
5. 如果内层循环正常结束（也就是 j 的值等于 n），那么说明在 haystack 中找到了一个和 needle 完全匹配的子串，函数就返回当前的位置 i。
6. 如果外层循环正常结束，那么说明 needle 在 haystack 中不存在，函数就返回 -1。

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;
  let m = haystack.length,
    n = needle.length;
  if (m < n) return -1;
  for (let i = 0; i <= m - n; ++i) {
    let j = 0;
    for (j = 0; j < n; ++j) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === n) return i;
  }
  return -1;
};
```

KMP 版本

```js
const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;
  let m = haystack.length,
    n = needle.length;
  if (m < n) return -1;

  // 构建next数组
  let next = new Array(n).fill(0);
  for (let i = 1, j = 0; i < n; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (needle[i] === needle[j]) {
      j++;
    }
    next[i] = j;
  }

  // KMP匹配过程
  for (let i = 0, j = 0; i < m; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === n) {
      return i - n + 1;
    }
  }
  return -1;
};
```