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

思路：
这个问题可以通过数学方法解决，具体是使用康托展开（Cantor pairing function）。算法的基本思路如下：

1. 初始化：首先，创建一个数组 arr 包含从 1 到 n 的所有数字。
2. 计算阶乘：计算 n 的阶乘，用于后续的计算。
3. 循环：在循环中，根据 k 值和当前的阶乘数 len 来确定下一个数字的位置。
4. 计算位置：使用 Math.ceil 来计算 k 除以 len 的上取整结果，这将决定下一个数字的索引。
5. 更新 k 值：将 k 更新为 k 除以 len 的余数。
6. 选择数字：从数组 arr 中选择索引对应的数字，并将其添加到结果数组 res 中。
7. 删除已选择的数字：从 arr 中删除已选择的数字，以避免重复。
8. 更新阶乘：重新计算当前剩余数字的阶乘。
9. 循环结束：当 arr 中只剩下一个数字时，将这个数字添加到结果数组 res 中。
10. 返回结果：将结果数组 res 转换为字符串并返回。


时间复杂度：O(nlogn!)。每次循环中，我们需要对 k 进行除法和取模操作，这些操作的复杂度与 n 的阶乘有关，而 n 的阶乘是 n 的一个多项式函数。
空间复杂度：O(n)。我们需要存储从 1 到 n 的所有数字，以及结果数组。

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
