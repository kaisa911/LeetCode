# 两整数之和

不使用运算符  + 和  - ​​​​​​​，计算两整数  ​​​​​​​a 、b ​​​​​​​ 之和。

**示例 1:**

```js
输入: (a = 1), (b = 2);
输出: 3;
```

**示例 2:**

```js
输入: (a = -2), (b = 3);
输出: 1;
```

**思路：**
拿到这道题的时候，想了一下，Math 有没有 sum 的方法啊，哈哈哈。  
只能用位运算来搞了
按位异或可以获得该位相加得和，但是不能得到进位。
按位与可以获取到该位相加的进位。进位应该加在前面一位上，所以要左移一位。
所以采用递归，把所有的位数都加一遍。

```js
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  let res, carry;
  res = a ^ b;
  carry = (a & b) << 1;
  if (carry != 0) {
    return getSum(res, carry);
  }
  return res;
};
```
