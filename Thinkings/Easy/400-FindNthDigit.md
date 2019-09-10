# 第 N 个数字

在无限的整数序列  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第  n  个数字。

**注意:**
n  是正数且在 32 为整形范围内  ( n < 231)。

**示例 1:**

```js
输入: 3;

输出: 3;
```

**示例 2:**

```js
输入: 11;

输出: 0;
```

**说明:**
第 11 个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0，它是 10 的一部分。

思路：  
拿到这道题，我是懵\*的，这特么写的是啥？出题的人语文 0 分么？
后来研究了一下，原来是当字符串来看！
就是按照位数来计算呗

主要分为两部分，首先计算前缀部分，再计算尾部。

- 小于 10，直接返回。(step 1)
- 否则，计算前缀部分，全部被占用部分总共有多少位即 length。(step 2)
- 计算尾部，
  - 其一、计算第一个数字即 pow(10, i-1)。
  - 其二、推理出最后一个出现的多位数字即 num，并计算出位于第几位即 index。(step 3)

> //1234567891011121314151617181920
> //1 - [1,9] 9
> //2 - [10,99] 90
> //3 - [100,999] 900
> //4 - [1000,9999] 9000
> //.........2^31-1 = 2147483647

```js
/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = n => {
  // step1
  if (n < 10) return n;
  let length = 0,
    cnt = 9,
    i = 1;
  for (i; length + cnt * i < n; ++i) {
    // step2
    length += cnt * i;
    cnt *= 10;
  }
  let num = Math.pow(10, i - 1) + (n - length - 1) / i;
  let index = (n - length - 1) % i;
  // step3
  return String(num)[index] - '0';
};
```