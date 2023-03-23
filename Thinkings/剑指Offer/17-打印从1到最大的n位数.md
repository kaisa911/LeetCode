# 打印从 1 到最大的 n 位数

输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数999。

示例 1:

```ts
输入: n = 1;
输出: [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

说明：

- 用返回一个整数列表来代替打印
- n 为正整数

**思路：**

给出 n 是位数，最大的值就是 Math.pow(10,n) -1;

```ts
function printNumbers(n: number): number[] {
  let res: number[] = [];
  res.length = Math.pow(10, n) - 1;
  for (let i: number = 0; i < res.length; i++) {
    res[i] = i + 1;
  }
  return res;
}
```
