# 最大交换

给你一个字符串 s，最多 可以从中删除一个字符。

请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

示例 1：

```js
输入：s = "aba"
输出：true
```

示例 2：

```js
输入：s = "abca"
输出：true
解释：你可以删除字符 'c' 。
```

示例 3：

```js
输入：s = "abc"
输出：false
```

提示：

- 1 <= s.length <= 10^5
- s 由小写英文字母组成

```js
var maximumSwap = function (num) {
  const charArray = [...('' + num)];
  const n = charArray.length;
  let maxIdx = n - 1;
  let idx1 = -1,
    idx2 = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (charArray[i] > charArray[maxIdx]) {
      maxIdx = i;
    } else if (charArray[i] < charArray[maxIdx]) {
      idx1 = i;
      idx2 = maxIdx;
    }
  }
  if (idx1 >= 0) {
    [charArray[idx1], charArray[idx2]] = [charArray[idx2], charArray[idx1]];
    return parseInt(charArray.join(''));
  } else {
    return num;
  }
};
```
