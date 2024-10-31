# 回文子串

给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

示例 1：

```js
输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
```

示例 2：

```js
输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
```

提示：

- 1 <= s.length <= 1000
- s 由小写英文字母组成

```js
var countSubstrings = function (s) {
  let n = s.length;
  let t = ['$', '#'];
  for (let i = 0; i < n; ++i) {
    t.push(s.charAt(i));
    t.push('#');
  }
  n = t.length;
  t.push('!');
  t = t.join('');
  const f = new Array(n);
  let iMax = 0,
    rMax = 0,
    res = 0;
  for (let i = 1; i < n; ++i) {
    // 初始化  f[i]
    f[i] = i <= rMax ? Math.min(rMax - i + 1, f[2 * iMax - i]) : 1;
    // 中心拓展
    while (t.charAt(i + f[i]) == t.charAt(i - f[i])) {
      ++f[i];
    }
    // 动态维护 iMax 和 rMax
    if (i + f[i] - 1 > rMax) {
      iMax = i;
      rMax = i + f[i] - 1;
    }
    // 统计答案, 当前贡献为 (f[i] - 1) / 2 上取整
    res += Math.floor(f[i] / 2);
  }
  return res;
};
```
