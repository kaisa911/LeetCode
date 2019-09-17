# 各位相加

给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

**示例:**

```
输入: 38
输出: 2
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于  2 是一位数，所以返回 2。
```

**进阶:**
你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？

**思路：**
不用递归或者循环，那就要用数学方法来做了。
如果是两位数：ab=10a+b;a+b 比原来的 ab 少了 9a，
如果是三位数：abc=100a+10b+c; a+b+c 比原来的 abc 少了 99a+9b
……
所以，这么多位相加，就是求这个数除以 9 取余数。

```js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) {
    return num;
  }
  let res = num % 9;
  if (res === 0) {
    return 9;
  }
  return res;
};
```

**思路 2:**
用递归的方法：
就每一次除以 10，然后加余数，这样就可以从最后一位加到第一位。
如果 temp 大于 10，那就递归调用该方法。

```js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let temp = 0;
  while (num > 0) {
    temp += num % 10;
    num = Math.floor((num /= 10));
  }
  if (temp >= 10) {
    temp = addDigits(temp);
  }
  return temp;
};
```
