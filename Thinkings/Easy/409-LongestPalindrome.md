# 最长回文串

给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。

在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

```js
示例 1:

输入:s = "abccccdd"
输出:7
解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
示例 2:

输入:s = "a"
输入:1
示例 3:

输入:s = "bb"
输入: 2
```

**提示:**

- 1 <= s.length <= 2000
- s 只能由小写和/或大写英文字母组成

**思路：**

这道题可以运用贪心算法，先来确定一下回文串的概念，除了最中间的字符可以有奇数个以外，其他的字符都是偶数个，所以问题就转换成，偶数个的字符都用上，奇数的字符的用 n/2*2个，然后再任意加一个奇数字符，就是最大的回文串了。

- 拿到每个字符的数量
- 遍历每个字符，根据字符数量求和

```js
/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const hash = {};
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
  }
  Object.keys(hash).forEach((item) => {
    res += Math.floor(hash[item] / 2) * 2;
    if (hash[item] % 2 === 1 && res % 2 === 0) {
      res++;
    }
  });

  return res;
};
```
