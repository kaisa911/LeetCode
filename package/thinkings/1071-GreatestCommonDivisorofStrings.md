# 字符串的最大公因子

对于字符串 s 和 t，只有在 s = t + t + t + ... + t + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。

给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。

示例 1：

```javascript
输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
```

示例 2：

```javascript
输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
```

示例 3：

```javascript
输入：str1 = "LEET", str2 = "CODE"
输出：""
```

提示：

- 1 <= str1.length, str2.length <= 1000
- str1 和 str2 由大写英文字母组成

思路：

拿到这个题目，首先需要理解“能除尽”的定义，即一个字符串能由另一个字符串重复连接多次得到。然后通过观察示例，可以发现需要找到一个公共的字符串，它既能整除 str1 又能整除 str2 。解题的初步思路是通过判断 str1 + str2 是否等于 str2 + str1 来确定是否存在这样的公共字符串，如果存在，再通过计算两个字符串长度的最大公约数来确定公共字符串的长度，从而得到最终结果。选择这种方法的理由是，通过判断相加后的字符串是否相等，可以快速确定是否存在公共部分，而利用最大公约数来确定公共字符串的长度是一种比较有效的数学方法。

1. 首先通过判断 str1 + str2 是否等于 str2 + str1 ，来确定两个字符串是否存在公共的重复模式。如果不相等，直接返回空字符串，因为不存在公共的可重复部分。
2. 定义了一个计算最大公约数的函数 gcd，使用了欧几里得算法来计算两个数的最大公约数。
3. 通过最大公约数确定公共字符串的长度，并使用 substring 方法获取公共字符串。

时间复杂度：主要的时间消耗在于计算最大公约数和字符串的拼接、比较操作。计算最大公约数的时间复杂度为 O(log(min(len(str1), len(str2))))，字符串的拼接和比较操作的时间复杂度为 O(len(str1) + len(str2))。整体时间复杂度为 O(len(str1) + len(str2))。
空间复杂度：额外的空间主要用于存储函数调用的栈空间，空间复杂度为 O(log(min(len(str1), len(str2))))。

```javascript
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};
```
