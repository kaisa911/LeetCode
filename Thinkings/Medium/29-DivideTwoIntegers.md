# 两数相除

给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。

整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。

返回被除数 dividend 除以除数 divisor 得到的 商 。

注意：假设我们的环境只能存储 32 位 有符号整数，其数值范围是 [−231, 231 − 1] 。本题中，如果商 严格大于 231 − 1 ，则返回 231 − 1 ；如果商 严格小于 -231 ，则返回 -231 。

示例 1:

```js
输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = 3.33333.. ，向零截断后得到 3 。
```

示例 2:

```js
输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = -2.33333.. ，向零截断后得到 -2 。
```

提示：

- -2^31 <= dividend, divisor <= 2^31 - 1
- divisor != 0

**思路：**

1. 定义最大最小值：使用位移操作定义了 32 位整数的最大值 MAX_VALUE 和最小值 MIN_VALUE。
2. 计算正负号：通过异或操作 ^ 计算 dividend 和 divisor 的正负号，如果一个是正数，另一个是负数，则结果为负，sign 为 -1；否则为正，sign 为 1。
3. 取绝对值：使用 Math.abs 函数取得 dividend 和 divisor 的绝对值。
4. 初始化商：初始化 quotient 为 0，用于存储计算结果。
5. 贪心算法：使用 for 循环从最高位（31 位）到最低位（0 位）进行贪心算法尝试减去除数。位移操作 divisor << i 表示将 divisor 左移 i 位，相当于乘以 2^i。
  - 如果 dividend 大于等于左移后的 divisor，则从 dividend 中减去这个值，并将 quotient 对应位加上 1 << i。
6. 处理结果的正负号：根据 sign 的值，如果结果应该是负数，则将 quotient 取负。
7. 处理极值：使用 Math.min 和 Math.max 确保结果不会超出 32 位整数的范围。
8. 返回结果：返回最终的商 quotient。

这个算法利用位移操作来模拟乘法操作，通过贪心算法逐步确定商的每一位。这种方法避免了直接使用乘法、除法和取余操作，符合题目要求。

代码中的关键点：

- 使用位移操作代替乘法操作。
- 使用位运算和逻辑操作来确定结果的正负号。
- 使用贪心算法从最高位开始计算商的每一位。
- 确保结果不会超出 32 位整数的范围。

```js
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  const MAX_VALUE = 2 ** 31 - 1;
  const MIN_VALUE = -2 ** 31;
  let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1; // 计算正负号
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let quotient = 0;

  // 贪心算法，从最大程度上尝试减去除数
  for (let i = 31; i >= 0; i--) {
    if (dividend >= divisor << i) {
      dividend -= divisor << i;
      quotient += 1 << i;
    }
  }

  // 处理正负号和极值
  quotient = sign === -1 ? -quotient : quotient;
  return Math.max(Math.min(quotient, MAX_VALUE), MIN_VALUE);
};
```
