# 颠倒二进制位

颠倒给定的 32 位无符号整数的二进制位。

提示：

请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。

示例 1：

```javascript
输入：n = 00000010100101000001111010011100
输出：964176192 (00111001011110000010100101000000)
解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
     因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
```

示例 2：

```javascript
输入：n = 11111111111111111111111111111101
输出：3221225471 (10111111111111111111111111111111)
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
     因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。
```

提示：

- 输入是一个长度为 32 的二进制字符串

进阶: 如果多次调用这个函数，你将如何优化你的算法？

思路：

1. 初始化结果变量：res 初始化为 0，用于存储颠倒后的二进制位。
2. 遍历所有位：通过一个循环，从最低位到最高位遍历整数 n 的每一位。
3. 构建结果：在每次迭代中，将 res 左移一位，然后加上 n 的当前最低位。接着，将 n 右移一位，以在下一次迭代中处理下一个最低位。
4. 处理符号位：在 JavaScript 中，最高位（第 32 位）是符号位。由于题目要求返回一个无符号整数，因此在最后使用 >>> 0 来确保结果是一个正整数，忽略符号位。

时间复杂度：O(1)，因为算法中有一个固定次数（32 次）的迭代，与输入大小无关。
空间复杂度：O(1)，算法只使用了常量级别的额外空间。

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var res = 0;
  for (var i = 0; i < 32; i++) {
    res = res << 1;
    res = res + (n & 1);
    n = n >> 1;
  }
  return res >>> 0;
};
```
