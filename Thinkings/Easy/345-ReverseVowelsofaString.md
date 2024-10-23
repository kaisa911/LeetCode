# 反转字符串中的元音字母

给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

示例 1：

```javascript
输入：s = "IceCreAm"
输出："AceCreIm"
解释：
s 中的元音是 ['I', 'e', 'e', 'A']。反转这些元音，s 变为 "AceCreIm".
```

示例 2：

```javascript
输入：s = "leetcode"
输出："leotcede"
```

提示：

- 1 <= s.length <= 3 \* 10^5
- s 由 可打印的 ASCII 字符组成

```javascript
var reverseVowels = function (s) {
  const n = s.length;
  const arr = Array.from(s);
  let i = 0,
    j = n - 1;
  while (i < j) {
    while (i < n && !isVowel(arr[i])) {
      ++i;
    }
    while (j > 0 && !isVowel(s[j])) {
      --j;
    }
    if (i < j) {
      swap(arr, i, j);
      ++i;
      --j;
    }
  }
  return arr.join('');
};

const isVowel = (ch) => {
  return 'aeiouAEIOU'.indexOf(ch) >= 0;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
```
