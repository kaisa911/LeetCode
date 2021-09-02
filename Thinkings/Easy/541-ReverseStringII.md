# 反转字符串 II

给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。

如果剩余字符少于 k 个，则将剩余字符全部反转。如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

**示例 1：**

```js
输入：s = "abcdefg", k = 2
输出："bacdfeg"
```

**示例 2：**

```js
输入：s = "abcd", k = 2
输出："bacd"
```

**提示：**

- 1 <= s.length <= 104
- s 仅由小写英文组成
- 1 <= k <= 104

**思路：**
因为要每2k个字符反转前k个字符，

- 就先看有多少（num）个k个字符
- 遍历这num个数，把字符放到list里。
- i是单数就反转，是双数就正常加

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let res = [];
  const temp = s.split('');
  const length = temp.length;
  let num = Math.ceil(length / k);

  for (let i = 0; i < num; i++) {
    let list = [];
    for (let j = i * k; j < i * k + k; j++) {
      list.push(s[j]);
    }
    if (i % 2 === 0) {
      res = [...res, ...list.reverse()];
    } else {
      res = [...res, ...list];
    }
  }
  return res.join('');
};
```
