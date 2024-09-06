# 分数到小数

给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。

如果小数部分为循环小数，则将循环的部分括在括号内。

如果存在多个答案，只需返回 任意一个 。

对于所有给定的输入，保证 答案字符串的长度小于 104 。

示例 1：

```js
输入：numerator = 1, denominator = 2
输出："0.5"
```

示例 2：

```js
输入：numerator = 2, denominator = 1
输出："2"
```

示例 3：

```js
输入：numerator = 4, denominator = 333
输出："0.(012)"
```

提示：

- -2^31 <= numerator, denominator <= 2^31 - 1
- denominator != 0

思路：

1. 处理正负号：首先确定结果的正负号。
2. 处理整数部分：计算分子除以分母的商的整数部分。
3. 处理小数部分：对分子取余，然后不断将余数乘以 10，继续除以分母，得到小数部分。
4. 检测循环：使用一个字典（Map）来记录每个余数出现的位置。如果某个余数再次出现，说明小数部分开始循环。
5. 构建结果：将整数部分和小数部分组合起来。如果存在循环，将循环部分用括号括起来。

时间复杂度：在最坏的情况下，分子不能被分母整除，且余数不会重复，直到所有可能的余数都出现过一遍，时间复杂度为 O(N)，其中 N 是分母的值。
空间复杂度：O(M)，其中 M 是小数部分的长度。在最坏的情况下，可能需要存储所有小数部分的数字，这取决于分母的因数。

```js
var fractionToDecimal = function (numerator, denominator) {
  if (numerator % denominator == 0) {
    return '' + Math.floor(numerator / denominator);
  }
  const sb = [];
  if ((numerator < 0) ^ (denominator < 0)) {
    sb.push('-');
  }
  // 整数部分
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const integerPart = Math.floor(numerator / denominator);
  sb.push(integerPart);
  sb.push('.');
  // 小数部分
  const fractionPart = [];
  const remainderIndexDic = new Map();
  let remainder = numerator % denominator;
  let index = 0;
  while (remainder !== 0 && !remainderIndexDic.has(remainder)) {
    remainderIndexDic.set(remainder, index);
    remainder *= 10;
    fractionPart.push(Math.floor(remainder / denominator));
    remainder %= denominator;
    index++;
  }
  if (remainder !== 0) {
    // 有循环节
    let insertIndex = remainderIndexDic.get(remainder);
    fractionPart.splice(insertIndex, 0, '(');
    fractionPart.push(')');
  }
  sb.push(fractionPart.join(''));
  return sb.join('');
};
```
