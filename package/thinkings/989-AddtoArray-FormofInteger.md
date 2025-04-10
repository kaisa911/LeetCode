# 数组形式的整数加法

整数的 数组形式 num 是按照从左到右的顺序表示其数字的数组。

例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。

示例 1：

```js
输入：num = [1,2,0,0], k = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
```

示例 2：

```js
输入：num = [2,7,4], k = 181
输出：[4,5,5]
解释：274 + 181 = 455
```

示例 3：

```js
输入：num = [2,1,5], k = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021
```

提示：

1 <= num.length <= 10^4
0 <= num[i] <= 9
num 不包含任何前导零，除了零本身
1 <= k <= 10^4

思路：

拿到这个题目，首先需要明确要实现的是将一个整数以数组形式表示与另一个整数进行加法运算，并得到结果的数组形式。初步思路是从数组的末尾开始逐位相加，同时处理进位。选择这种方法的理由是符合整数加法的运算规则，从低位到高位逐位处理，便于计算和处理进位。

1. 首先定义一个进位变量 `carry` 并初始化为 0，从数组 `A` 的末尾开始处理。
2. 进入循环，只要 `K` 还有值或者进位不为 0，就继续处理。
3. 如果当前位置 `i` 还在数组 `A` 范围内，计算当前位的和，包括数组中的数字、`K` 的当前位和进位。
4. 更新当前位的值为计算结果的个位，计算新的进位。
5. 向前移动一位，并更新 `K` 。
6. 如果当前位置超出了数组 `A` 的范围，计算当前位的和，包括 `K` 的当前位和进位。
7. 将计算结果的个位添加到数组头部，更新进位。

时间复杂度：O(max(n, log K))，其中 n 是数组 `A` 的长度。因为需要遍历数组 `A` 以及对 `K` 进行逐位处理。
空间复杂度：O(1)，如果不考虑输出结果数组，只使用了固定的额外空间来存储变量。如果考虑输出结果数组，则空间复杂度为 O(n)，n 为结果数组的长度。

```js
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let carry = 0;
  let i = A.length - 1;

  while (K > 0 || carry > 0) {
    if (i >= 0) {
      let digit = A[i] + (K % 10) + carry;
      A[i] = digit % 10;
      carry = Math.floor(digit / 10);
      i--;
      K = Math.floor(K / 10);
    } else {
      let digit = (K % 10) + carry;
      A.unshift(digit % 10);
      carry = Math.floor(digit / 10);
      K = Math.floor(K / 10);
    }
  }

  return A;
};
```
