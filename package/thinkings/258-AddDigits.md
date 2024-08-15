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

- 函数首先检查 num 是否小于 10，如果是，则直接返回 num，因为个位数的各位数字之和就是它自己。
- 如果 num 大于等于 10，函数通过 num % 9 计算 num 除以 9 的余数。这是因为一个数字和它各位数字之和的差是 9 的倍数，所以余数实际上就是各位数字的和。
- 如果余数为 0，说明 num 是 9 的倍数，因此函数返回 9。
- 如果余数不为 0，函数返回这个余数，它表示 num 的各位数字之和。

这种方法的时间复杂度是 O(1)，因为无论 num 的大小如何，操作的步骤都是固定的。空间复杂度也是 O(1)，因为只使用了常数级别的额外空间。

```js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
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
var addDigits = function (num) {
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
