# 计数质数

统计所有小于非负整数 n 的质数的数量。

**示例:**

```js
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

**思路：**
好像是一个高档的算法，叫做厄拉多塞筛法. 比如说求 20 以内质数的个数,首先 0,1 不是质数.2 是第一个质数,然后把 20 以内所有 2 的倍数划去.2 后面紧跟的数即为下一个质数 3,然后把 3 所有的倍数划去.3 后面紧跟的数即为下一个质数 5,再把 5 所有的倍数划去.以此类推.

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
