# 数字转换为十六进制数

给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 补码运算 方法。

答案字符串中的所有字母都应该是小写字符，并且除了 0 本身之外，答案中不应该有任何前置零。

注意: 不允许使用任何由库提供的将数字直接转换或格式化为十六进制的方法来解决这个问题。

示例 1：

```javascript
输入：num = 26
输出："1a"
```

示例 2：

```javascript
输入：num = -1
输出："ffffffff"
```

提示：

- -2^31 <= num <= 2^31 - 1

思路：

对于这个题目，首先要考虑整数转换为十六进制的基本方法。由于不能使用库函数直接转换，我们可以通过不断地对整数进行除法运算（除以 16）来获取每一位十六进制的数字。对于正整数，可以直接进行这种操作；对于负整数，因为计算机中是以补码形式存储的，所以需要将其转换为补码对应的无符号整数来处理。

1. 首先判断如果输入的 num 为 0，直接返回 '0'，因为 0 转换为十六进制就是 '0'。
2. 定义一个空字符串 result 用于存储转换后的十六进制结果，以及一个包含十六进制数字和字母的字符串 hexDigits。
3. 进入循环，当 num 不为 0 且 result 的长度小于 8（因为题目中整数范围对应的十六进制最多 8 位）时：
   - 通过 num & 15 获取 num 的低 4 位对应的十六进制数字（在十六进制中，每 4 位二进制对应一位十六进制），从 hexDigits 中取出对应的字符添加到 result 的开头。
   - 使用无符号右移操作 num >>>= 4 将 num 向右移动 4 位，准备获取下一位十六进制数字。
4. 最后返回 result。

时间复杂度：在最坏情况下，需要对 32 位整数进行处理，每次处理 4 位，所以时间复杂度为 O (1)，因为操作次数是固定的。
空间复杂度：只使用了常数级别的额外空间，如 result 和 hexDigits 字符串，空间复杂度为 O (1)。

```javascript
/**
 * @param {number} num
 * @return {string}
 */
const toHex = function (num) {
  if (num === 0) return '0';
  let result = '';
  let hexDigits = '0123456789abcdef';
  while (num !== 0 && result.length < 8) {
    result = hexDigits[num & 15] + result;
    num >>>= 4;
  }
  return result;
};
```