# 丑数

编写一个程序判断给定的数是否为丑数。

丑数就是只包含质因数  2, 3, 5  的正整数。

**示例 1:**

```
输入: 6
输出: true
解释: 6 = 2 × 3
```

**示例 2:**

```
输入: 8
输出: true
解释: 8 = 2 × 2 × 2
```

**示例  3:**

```
输入: 14
输出: false
解释: 14 不是丑数，因为它包含了另外一个质因数 7。
```

**说明：**

- 1  是丑数。
- 输入不会超过 32 位有符号整数的范围: [−231,  231 − 1]。

**思路：**

对能被 2,3,5 整除的数不断除 2,3,5，最后剩 1 就是，剩 0 就不是，

```js
/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = num => {
  if (num % 1 !== 0) return false;
  if (num === 0) return false;
  let ugly,
    n = num;
  while (!ugly) {
    if ((n / 2) % 1 === 0) {
      n = n / 2;
    } else if ((n / 5) % 1 === 0) {
      n = n / 5;
    } else if ((n / 3) % 1 === 0) {
      n = n / 3;
    } else {
      ugly = n;
    }
  }
  return ugly === 1;
};
```
