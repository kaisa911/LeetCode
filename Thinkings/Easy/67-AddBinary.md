# 二进制求和

给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

示例 1：

```js
输入:a = "11", b = "1"
输出："100"
```

示例 2：

```js
输入：a = "1010", b = "1011"
输出："10101"
```

提示：

- 1 <= a.length, b.length <= 104
- a 和 b 仅由字符 '0' 或 '1' 组成
- 字符串如果不是 "0" ，就不含前导零

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let res = '';
  let m = a.length - 1,
    n = b.length - 1,
    carry = 0;
  while (m >= 0 || n >= 0) {
    let p = m >= 0 ? a[m--] - '0' : 0;
    let q = n >= 0 ? b[n--] - '0' : 0;
    let sum = p + q + carry;
    res = (sum % 2).toString() + res;
    carry = parseInt(sum / 2);
  }
  return carry == 1 ? '1' + res : res;
};
```
