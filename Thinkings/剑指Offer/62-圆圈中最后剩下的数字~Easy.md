# 圆圈中最后剩下的数字

0,1,…,n−1 这 n 个数字 (n>0) 排成一个圆圈，从数字 0 开始每次从这个圆圈里删除第 m 个数字。

求出这个圆圈里剩下的最后一个数字。

数据范围

- 1≤n,m≤4000

样例

```js
输入：n=5 , m=3

输出：3
```

```ts
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let res = 0;
  // 最后一轮剩下2个人，所以从2开始反推
  for (let i = 2; i <= n; i++) {
    res = (res + m) % i;
  }
  return res;
};
```
