# 1～n 整数中 1 出现的次数

输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

示例 1：

```js
输入：n = 12
输出：5
```

示例 2：

```js
输入：n = 13
输出：6
```

限制：

- 1 <= n < 2^31

```ts
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let count = 0;

  for (let i = 1; i <= n; i *= 10) {
    let divide = i * 10;
    let p = Math.floor(n / divide),
      k = n % divide,
      rest = 0;

    count += p * i;
    rest = k > 2 * i - 1 ? i : k < i ? 0 : k - i + 1;
    count += rest;
  }
  return count;
};
```
