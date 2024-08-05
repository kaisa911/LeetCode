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

思路：

把字符串 a 和 b 的末尾开始向前遍历。在每次迭代中，我们首先计算 p 和 q。如果 m（a 的当前索引）大于等于 0，那么 p 就是 a[m] 对应的数字，否则 p 就是 0。同样，如果 n（b 的当前索引）大于等于 0，那么 q 就是 b[n] 对应的数字，否则 q 就是 0。

然后，我们计算 sum，即 p、q 和 carry（进位）的和。我们将 sum 对 2 取余的结果转换为字符串，并添加到 res 的开头。然后，我们将 sum 除以 2 的结果转换为整数，并赋值给 carry。

当 m 和 n 都小于 0 时，循环结束。此时，如果 carry 等于 1，那么我们就在 res 的开头添加一个 '1'。最后，我们返回 res。

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
