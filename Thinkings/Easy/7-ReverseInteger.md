# 整数反转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

**示例  1:**

```js
输入: 123;
输出: 321;
```

**示例 2:**

```js
输入: -123;
输出: -321;
```

**示例 3:**

```
输入: 120
输出: 21
```

**注意:**

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为  [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

**思路：**
发现之前的想法和现在的想法一点都不一样，哈哈
之前就回想着，直接用数学的方法搞了，除 10 求余，然后乘啊乘。
最近做这个题，就想着，把数字拆成数组，然后折半置换。

好像数学方法更好理解一些，数组的时间复杂度低一点？

```js
/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let res = 0;
  while (x) {
    res = res * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (res > Math.pow(2, 31) || -res > Math.pow(2, 31)) {
    res = 0;
  }
  return res;
};
```

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const str = String(x > 0 ? x : -x);
  const strArr = str.split('');
  let res;
  for (let i = 0, len = str.length; i <= (len - 1) / 2; i++) {
    const temp = strArr[i];
    strArr[i] = strArr[len - i - 1];
    strArr[len - i - 1] = temp;
  }
  res = +strArr.join('');
  res *= x > 0 ? 1 : -1;
  if (res > Math.pow(2, 31) || -res > Math.pow(2, 31)) {
    res = 0;
  }
  return res;
};
```
