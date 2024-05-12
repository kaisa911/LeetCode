# 排列序列

给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

示例 1：

```js
输入：n = 3, k = 3
输出："213"
```

示例 2：

```js
输入：n = 4, k = 9
输出："2314"
```

示例 3：

```js
输入：n = 3, k = 1
输出："123"
```

提示：

- 1 <= n <= 9
- 1 <= k <= n!

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
  let arr = [];
  let res = [];
  let len = 1;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    len *= i;
  }
  len = len / n;
  let mod = k;
  let num, index;
  while (arr.length > 1) {
    num =
      arr[
        Math.ceil(mod / len) - 1 >= 0
          ? Math.ceil(mod / len) - 1
          : arr.length - 1
      ];
    mod = mod % len;
    res.push(num);
    index = arr.indexOf(num);
    arr.splice(index, 1);
    len = 1;
    for (let i = arr.length - 1; i >= 1; i--) {
      len *= i;
    }
  }
  res.push(arr[0]);
  return res.join("");
};

```
