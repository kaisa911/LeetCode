# 求 1+2+…+n

求 1+2+…+n，要求不能使用乘除法、for、while、if、else、switch、case 等关键字及条件判断语句 (A?B:C)。

数据范围

- 1≤n≤50000。

样例

```js
输入：10

输出：55
```

```ts
var sumNums = function (n: number): number {
  return n && n + sumNums(--n);
};
```
