# 字符串相乘

给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"

提示：

1 <= num1.length, num2.length <= 200
num1 和 num2 只能由数字组成。
num1 和 num2 都不包含任何前导零，除了数字 0 本身。

思路：

1. 初始化：定义两个数组 arr1 和 arr2，分别存储 num1 和 num2 的每一位数字，并反转数组以便从最低位开始计算。
2. 乘法计算：使用两层循环，外层循环遍历 arr1 的每一位，内层循环遍历 arr2 的每一位。
3. 进位处理：对于每一位的乘积，加上之前的进位 carry，计算出当前位的值和新的进位。
4. 结果存储：将计算出的当前位的值存储在结果数组 res 中，如果存在进位，则在下一位加上进位。
5. 处理最后一个进位：在内层循环结束后，如果还有剩余的进位，将其加到结果数组中。
6. 反转结果：将结果数组反转，因为计算是从最低位开始的。
7. 返回结果：将结果数组转换为字符串并返回。

时间复杂度为 O(n \* m)，其中 n 和 m 分别是 num1 和 num2 的长度。
空间复杂度为 O(n + m)，因为我们需要存储两个数字的每一位，以及计算过程中的中间结果。

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  let arr1,
    arr2,
    carry,
    char1,
    char2,
    sum,
    index,
    product,
    tag,
    res = [];

  if (!num1 || !num2 || !num1.length || !num2.length || num1 === '0' || num2 === '0') {
    return '0';
  }

  arr1 = num1.split('').reverse();
  arr2 = num2.split('').reverse();

  for (let i = 0; i < arr1.length; i++) {
    carry = 0;
    char1 = parseInt(arr1[i]);

    for (let j = 0; j < arr2.length; j++) {
      char2 = parseInt(arr2[j]);
      product = char1 * char2 + carry;
      tag = res[i + j] || 0;
      sum = product + tag;
      index = sum % 10;
      carry = Math.floor(sum / 10);
      res[i + j] = index;
    }
    if (carry > 0) {
      res[i + j] = carry;
    }
  }

  res.reverse();
  res = res.join('');

  return res;
};
```
