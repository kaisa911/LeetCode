# 计数质数

统计所有小于非负整数 n 的质数的数量。

**示例:**

```js
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

**思路：**
好像是一个高档的算法，叫做厄拉多塞筛法. 比如说求 20 以内质数的个数,

1. 列出所有数字：从2开始列出所有数字直到n。
2. 筛选质数：从列表中的第一个数字（2）开始，它是一个质数，然后将所有2的倍数标记为非质数。
3. 继续筛选：移动到下一个未标记的数字（3），将3视为质数，然后将所有3的倍数标记为非质数。
4. 重复过程：继续这个过程，每次跳到下一个未标记的数字，并将其所有倍数标记为非质数。
5. 得到质数列表：当完成这个过程后，所有未被标记的数字都是质数。

这种方法的时间复杂度是O(n log log n)，这是基于厄拉多塞筛法的平均性能。空间复杂度是O(n)，因为我们需要一个大小为n + 1的数组来存储标记信息。
```js
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
  signs = new Array(n + 1);
  for (let i = 2; i < n; i++) {
    if (!signs[i]) {
      count++;
      for (let j = 2 * i; j < n; j += i) {
        signs[j] = true;
      }
    }
  }
  return count;
};
```
