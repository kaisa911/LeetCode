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

思路：

对于这个问题，我们可以使用双指针的方法来思考。从字符串的两端开始向中间移动指针进行比较。如果遇到不相等的字符，因为最多可以删除一个字符，所以我们有两种选择：要么删除左边指针所指的字符，要么删除右边指针所指的字符，然后再检查剩余字符串是否是回文串。这种方法利用了回文串的特性，从两端进行比较是比较自然的思路。

1. 在函数 validPalindrome 中，首先初始化 left 为 0，right 为字符串 s 的长度 - 1。
2. 然后通过 while 循环，只要 left 小于 right，就进行比较。
3. 当 s[left]不等于 s[right]时，调用 checkPalindrome 函数分别尝试删除 left + 1 位置的字符和 right - 1 位置的字符后检查剩余字符串是否为回文串，如果其中一种情况是回文串，则返回 true。
4. 当 s[left]等于 s[right]时，left 指针右移，right 指针左移，继续下一轮比较。
5. 如果整个循环都没有发现不相等的情况，说明原始字符串本身就是回文串，返回 true。
6. 在函数 checkPalindrome 中，同样使用双指针，从给定的 left 和 right 位置开始向中间移动指针进行比较，如果遇到不相等的字符，直接返回 false，否则返回 true。

- 时间复杂度：在最坏的情况下，可能需要对字符串的大部分子串进行检查。每次不匹配时，可能需要检查长度为 n - 1 的子串，总共可能有 n 次不匹配（虽然这种情况很少），所以时间复杂度是 O(n)，n 是字符串 s 的长度。
- 空间复杂度：只使用了几个额外的指针变量，空间复杂度为 O(1)。

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
