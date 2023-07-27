# 把数字翻译成字符串

给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

示例 1:

```js
输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
```

提示：

- 0 <= num < 231

```ts
/**
 * @param {number} num
 * @return {number}
 */
const translateNum = (num) => {
  const str = num.toString();

  function trans(str, index) {
    if (index >= str.length - 1) return 1;
    let temp = Number(str[index] + str[index + 1]);
    if (temp >= 10 && temp <= 25) {
      return trans(str, index + 1) + trans(str, index + 2);
    } else {
      return trans(str, index + 1);
    }
  }
  return trans(str, 0);
};

```
