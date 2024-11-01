# 字典序的第 K 小数字

给定整数 n 和 k，返回 [1, n] 中字典序第 k 小的数字。

示例 1:

```javascript
输入: n = 13, k = 2
输出: 10
解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
```

示例 2:

```javascript
输入: (n = 1), (k = 1);
输出: 1;
```

提示:

- 1 <= k <= n <= 10^9

思路：

拿到这个题目，首先要理解字典序的概念。字典序是指在数字按照从左到右的顺序依次比较大小。对于给定的 n 和 k ，我们需要通过某种方式计算出第 k 小的数字。初步思路是从 1 开始逐步计算每个数字及其后续数字所占据的字典序位置，直到找到第 k 小的数字。选择这种逐步计算的方法是因为我们可以通过控制当前数字的变化（增加 1 或者乘以 10 ）来逐步探索整个数字范围。

1. 首先定义 `prefix` 表示当前的前缀数字，从 1 开始。
2. 在循环中，通过 `getCount` 函数计算以当前前缀开头的数字数量。
3. 如果 `k` 小于等于这个数量，说明第 `k` 小的数字就在以当前前缀开头的数字中，将前缀乘以 10 ，并将 `k` 减 1 。
4. 如果 `k` 大于这个数量，说明第 `k` 小的数字不在以当前前缀开头的数字中，将前缀增加 1 ，并将 `k` 减去以当前前缀开头的数字数量。

时间复杂度：O(log⁡n×log⁡n) ，主要在于计算以每个前缀开头的数字数量的循环。
空间复杂度：O(1) ，使用了固定的几个变量，不随输入规模变化。

```javascript
var findKthNumber = function (n, k) {
  let prefix = 1;
  while (k > 1) {
    let count = getCount(prefix, n);
    if (k <= count) {
      prefix *= 10;
      k--;
    } else {
      prefix++;
      k -= count;
    }
  }
  return prefix;
};

function getCount(prefix, n) {
  let count = 0;
  let currPrefix = prefix;
  let nextPrefix = prefix + 1;
  while (currPrefix <= n) {
    count += Math.min(n + 1, nextPrefix) - currPrefix;
    currPrefix *= 10;
    nextPrefix *= 10;
  }
  return count;
}
```
