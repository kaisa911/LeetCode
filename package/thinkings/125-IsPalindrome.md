# 验证回文串

如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

字母和数字都属于字母数字字符。

给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

示例 1：

```javascript
输入: s = "A man, a plan, a canal: Panama"
输出：true
解释："amanaplanacanalpanama" 是回文串。
```

示例 2：

```javascript
输入：s = "race a car"
输出：false
解释："raceacar" 不是回文串。
```

示例 3：

```javascript
输入：s = " "
输出：true
解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
由于空字符串正着反着读都一样，所以是回文串。
```

提示：

- 1 <= s.length <= 2 \* 10^5
- s 仅由可打印的 ASCII 字符组成

思路

1. 预处理字符串：首先对输入的字符串 s 进行预处理，移除非字母数字字符，并将所有大写字符转换为小写字符。
2. 构建新的字符串：使用 replace 方法和正则表达式/[^0-9a-zA-Z]/g 移除非字母数字字符，然后使用 toLowerCase 方法将字符串转换为小写。
3. 检查回文：使用两个指针 i 和 len - 1 - i 从字符串两端向中间遍历：
   - 如果在任意位置字符不相等（str[i] !== str[len - 1 - i]），则字符串不是回文串，返回 false。
   - 如果所有检查的字符都相等，则字符串是回文串，返回 true。
4. 返回结果：在完成所有检查后，返回结果。

时间复杂度：O(n)，其中 n 是字符串 s 的长度。需要遍历字符串一次进行预处理，然后再遍历一半长度进行回文检查。
空间复杂度：O(n)，用于存储预处理后的字符串。

```javascript
/**
 * 大佬的写法
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  var i = 0;
  var len = str.length;
  while (i < len / 2) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
};
```
