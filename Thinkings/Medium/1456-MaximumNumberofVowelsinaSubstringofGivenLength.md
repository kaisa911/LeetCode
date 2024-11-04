# 定长子串中元音的最大数目

给你字符串 s 和整数 k 。

请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。

英文中的 元音字母 为（a, e, i, o, u）。

示例 1：

```javascript
输入：s = "abciiidef", k = 3
输出：3
解释：子字符串 "iii" 包含 3 个元音字母。
```

示例 2：

```javascript
输入：s = "aeiou", k = 2
输出：2
解释：任意长度为 2 的子字符串都包含 2 个元音字母。
```

示例 3：

```javascript
输入：s = "leetcode", k = 3
输出：2
解释："lee"、"eet" 和 "ode" 都包含 2 个元音字母。
```

示例 4：

```javascript
输入：s = "rhythms", k = 4
输出：0
解释：字符串 s 中不含任何元音字母。
```

示例 5：

```javascript
输入：s = "tryhard", k = 4
输出：1
```

提示：

- 1 <= s.length <= 10^5
- s 由小写英文字母组成
- 1 <= k <= s.length

```javascript
var maxVowels = function (s, k) {
  let vowel = 'aeiou',
    len = s.length,
    count = 0,
    max = 0,
    i = 0;

  for (; i < k; i++) {
    let curr = s.charAt(i);
    if (vowel.indexOf(curr) !== -1) count++;
  }
  max = Math.max(max, count);

  for (; i < len; i++) {
    let curr = s.charAt(i),
      last = s.charAt(i - k);
    if (vowel.indexOf(curr) !== -1) count++;
    if (vowel.indexOf(last) !== -1) count--;
    max = Math.max(count, max);
  }

  return max;
};
```
