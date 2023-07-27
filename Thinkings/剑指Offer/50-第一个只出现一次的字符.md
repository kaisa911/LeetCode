# 第一个只出现一次的字符

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:

```js
输入：s = "abaccdeff"
输出：'b'
```

示例 2:

```js
输入：s = ""
输出：' '
```

限制：

- 0 <= s 的长度 <= 50000

```ts
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let res = {};
  for (let i = 0; i < s.length; i++) {
    if (res[s[i]]) {
      res[s[i]] += 1;
    } else {
      res[s[i]] = 1;
    }
  }
  const list = Object.keys(res);
  for (let i = 0; i < list.length; i++) {
    if (res[list[i]] === 1) {
      return list[i];
      break;
    }
  }
  return ' ';
};

```
