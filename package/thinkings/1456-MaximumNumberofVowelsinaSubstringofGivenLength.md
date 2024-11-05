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

思路：

首先，明确题目要求是在给定的字符串 `s` 中，找出长度为 `k` 的子字符串中元音字母的最大数目。解题的初步思路是通过滑动窗口的方法，先计算初始窗口（长度为 `k` ）内的元音字母个数，然后随着窗口向右滑动，不断更新元音字母的计数，并记录最大的元音字母数。选择这种方法的理由是，它能够在一次遍历中有效地计算每个窗口内的元音字母数量，避免了重复计算，时间复杂度相对较低。

1. 首先初始化变量，包括元音字母字符串 `vowel` ，字符串长度 `len` ，当前窗口内元音字母计数 `count` ，最大元音字母计数 `max` 以及指针 `i` 。
2. 通过第一个循环，计算初始窗口（长度为 `k` ）内的元音字母个数，并更新 `max` 。
3. 然后通过第二个循环，随着窗口向右滑动，新进入窗口的字符如果是元音字母，`count` 增加；离开窗口的字符如果是元音字母，`count` 减少。同时更新 `max` 。

时间复杂度：O(n)，其中 `n` 是字符串 `s` 的长度。只需要对字符串进行一次遍历。
空间复杂度：O(1)，使用了固定大小的额外空间来存储几个变量，不随输入规模变化。

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
