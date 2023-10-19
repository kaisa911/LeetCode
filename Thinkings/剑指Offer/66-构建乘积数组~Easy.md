# 构建乘积数组

给定一个数组 A[0, 1, …, n-1]，请构建一个数组 B[0, 1, …, n-1]，其中 B 中的元素 B[i]=A[0]×A[1]×… ×A[i-1]×A[i+1]×…×A[n-1]。

不能使用除法。

数据范围

- 输入数组长度 [0,20]。

样例

```js
输入：[1, 2, 3, 4, 5]

输出：[120, 60, 40, 30, 24]
```

思考题：

- 能不能只使用常数空间？（除了输出的数组之外）

```ts
/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  const n = a.length;
  if (n === 0) return [];
  const res = [1];
  let temp = 1;
  for (let i = 1; i < n; i++) {
    temp *= a[i - 1];
    res[i] = temp;
  }
  temp = 1;
  for (let i = n - 1 - 1; i >= 0; i--) {
    temp *= a[i + 1];
    res[i] *= temp;
  }
  return res;
};
```
