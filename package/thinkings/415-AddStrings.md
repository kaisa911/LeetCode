# 字符串相加

给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

示例 1：

```javascript
输入：num1 = "11", num2 = "123"
输出："134"
```

示例 2：

```javascript
输入：num1 = "456", num2 = "77"
输出："533"
```

示例 3：

```javascript
输入：num1 = "0", num2 = "0"
输出："0"
```

提示：

- 1 <= num1.length, num2.length <= 10^4
- num1 和 num2 都只包含数字 0-9
- num1 和 num2 都不包含任何前导零

思路：

这道题要求计算两个字符串形式的非负整数的和。直接的思路是模拟手工加法运算过程，从两个字符串的末尾开始逐位相加，考虑进位情况。这种方法不需要将字符串转换为整数，符合题目要求。

1. 首先初始化两个指针 i 和 j 分别指向 num1 和 num2 的末尾，以及一个变量 add 用于存储进位，初始值为 0。同时创建一个空数组 res 用于存储计算结果。
2. 进入循环，只要 i、j 未遍历完或者进位 add 不为 0，就继续循环：
   - 如果 i >= 0，获取 num1 中当前位置的数字（通过字符编码相减转换为数字），否则赋值为 0。
   - 如果 j >= 0，获取 num2 中当前位置的数字，否则赋值为 0。
   - 计算当前位相加的结果（包括进位）。
   - 将当前位相加结果对 10 取余，得到当前位的数字并添加到 res 数组中。
   - 计算新的进位，即当前位相加结果除以 10 取整。
   - i 和 j 分别向前移动一位。
3. 最后将 res 数组反转并连接成字符串返回。

时间复杂度：循环次数取决于 num1 和 num2 中较长的字符串长度，时间复杂度为 O(max(m, n))，其中 m 是 num1 的长度，n 是 num2 的长度。
空间复杂度：创建了一个长度最多为 max(m, n)+1 的数组 ans，空间复杂度为 O(max(m, n))。

```javascript
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  const res = [];
  while (i >= 0 || j >= 0 || add != 0) {
    const x = i >= 0 ? num1.charAt(i) - '0' : 0;
    const y = j >= 0 ? num2.charAt(j) - '0' : 0;
    const result = x + y + add;
    res.push(result % 10);
    add = Math.floor(result / 10);
    i -= 1;
    j -= 1;
  }
  return res.reverse().join('');
};
```
