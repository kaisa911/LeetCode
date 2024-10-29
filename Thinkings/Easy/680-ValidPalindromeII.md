# 验证回文串 II

给你一个字符串 s，最多 可以从中删除一个字符。

请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

示例 1：

```javascript
输入：s = "aba"
输出：true
```

示例 2：

```javascript
输入：s = "abca"
输出：true
解释：你可以删除字符 'c' 。
```

示例 3：

```javascript
输入：s = "abc"
输出：false
```

提示：

- 1 <= s.length <= 10^5
- s 由小写英文字母组成

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      return checkPalindrome(s, left + 1, right) || checkPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};

var checkPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
```
