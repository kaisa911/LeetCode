# 反转字符串中的单词 III

给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1：

```js
输入：s = "Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"
```

示例 2:

```js
输入： s = "Mr Ding"
输出："rM gniD"
```

提示：

- 1 <= s.length <= 5 * 104
- s 包含可打印的 ASCII 字符。
- s 不包含任何开头或结尾空格。
- s 里 至少 有一个词。
- s 中的所有单词都用一个空格隔开。

```js
var reverseWords = function (s) {
  const ret = [];
  const length = s.length;
  let i = 0;
  while (i < length) {
    let start = i;
    while (i < length && s.charAt(i) != ' ') {
      i++;
    }
    for (let p = start; p < i; p++) {
      ret.push(s.charAt(start + i - 1 - p));
    }
    while (i < length && s.charAt(i) == ' ') {
      i++;
      ret.push(' ');
    }
  }
  return ret.join('');
};
```
