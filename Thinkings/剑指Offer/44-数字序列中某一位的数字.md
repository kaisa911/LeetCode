# 数字序列中某一位的数字

数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。

示例 1：

```js
输入：n = 3
输出：3
```

示例 2：

```js
输入：n = 11
输出：0
```

限制：

- 0 <= n < 2^31

```ts
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n < 10) return n;
  let length = 0,
    cnt = 9,
    i = 1;
  for (i; length + cnt * i < n; ++i) {
    length += cnt * i;
    cnt *= 10;
  }
  let num = Math.pow(10, i - 1) + (n - length - 1) / i;
  let index = (n - length - 1) % i;
  return String(num)[index] - '0';
};

```
