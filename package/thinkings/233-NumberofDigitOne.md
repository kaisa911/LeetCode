# 数字 1 的个数

给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。

示例 1：

```javascript
输入：n = 13
输出：6
```

示例 2：

```javascript
输入：n = 0
输出：0
```

提示：

- 0 <= n <= 10^9

思路：
这个问题要求我们计算从 0 到 n（包括 n）之间所有非负整数中数字 1 出现的总次数。这个问题可以通过逐位分析的方法来解决。

- 逐位分析：我们可以将 n 的每一位数字分别考虑，计算在每一位上数字 1 出现的次数。
- 不同位数的处理：对于每一位，我们需要考虑当前位上的数字小于 1、等于 1 和大于 1 三种情况。
- 进位的影响：当某一位上的数字大于 1 时，会对下一位产生进位，这会影响下一位数字 1 出现的次数。

1. 初始化基数 base 为 1，结果 res 为 0，用于计算当前位上数字 1 出现的次数。
2. 使用 temp 变量来存储原始的 n 值，以便在计算过程中使用。
3. 使用循环遍历 n 的每一位，直到 n / base 小于等于 0。
4. 在每次循环中，计算当前位上的数字 b。
   - 如果 b 小于 1，说明当前位上的数字不是 1，那么在当前位上数字 1 出现的次数就是前一位上数字 1 出现的次数乘以 base。
   - 如果 b 等于 1，说明当前位上的数字是 1，那么除了前一位上数字 1 出现的次数乘以 base 之外，还需要加上当前位上小于 n 的数字中 1 出现的次数，即 n % base + 1。
   - 如果 b 大于 1，说明当前位上的数字大于 1，那么在当前位上数字 1 出现的次数就是前一位上数字 1 出现的次数乘以 base 再加上 b - 1 个 base（因为每个大于 1 的数字都会产生进位，使得下一位的 1 多出现 b - 1 次）。
5. 更新 base 为原来的 10 倍，准备计算下一位。
6. 返回最终的结果 res。

时间复杂度：O(log n)，因为我们需要遍历 n 的所有位数。
空间复杂度：O(1)，除了输入参数之外，我们只需要常数级别的额外空间来存储中间结果。

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let base = 1;
  let res = 0;
  let temp = n;

  while (n / base > 0) {
    let b = Math.floor(n / base) % 10;
    if (b < 1) {
      res += Math.floor(n / (base * 10)) * base;
    } else if (b == 1) {
      res += Math.floor(n / (base * 10)) * base + (n % base) + 1;
    } else {
      res += Math.floor(n / (base * 10) + 1) * base;
    }

    base *= 10;
  }

  return res;
};
```