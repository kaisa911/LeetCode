# 丑数

我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

示例:

```js
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
```

说明:  

- 1 是丑数。
- n 不超过1690。

```ts
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let p2 = 0,
    p3 = 0,
    p5 = 0;
  let dp = [1];
  let i = 1;
  //分别让dp[i-1]和235相乘，得到最小的一个
  while (dp.length < n) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    //判断是几的倍数，对应的指针+1
    if (dp[i] % 2 === 0) p2++;
    if (dp[i] % 3 === 0) p3++;
    if (dp[i] % 5 === 0) p5++;
    i++;
  }
  return dp[n - 1];
};

```
