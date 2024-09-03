# 倍数求和

给你一个正整数 n ，请你计算在 [1，n] 范围内能被 3、5、7 整除的所有整数之和。

返回一个整数，用于表示给定范围内所有满足约束条件的数字之和。

示例 1：

```js
输入：n = 7
输出：21
解释：在 [1, 7] 范围内能被 3、5、7 整除的所有整数分别是 3、5、6、7 。数字之和为 21 。
```

示例 2：

```js
输入：n = 10
输出：40
解释：在 [1, 10] 范围内能被 3、5、7 整除的所有整数分别是 3、5、6、7、9、10 。数字之和为 40 。
```

示例 3：

```js
输入：n = 9
输出：30
解释：在 [1, 9] 范围内能被 3、5、7 整除的所有整数分别是 3、5、6、7、9 。数字之和为 30 。
```

提示：

- 1 <= n <= 103

思路：
1. 分别计算能被3、5、7整除的数的和：首先，我们可以分别计算能被3、5、7整除的数的和。对于任意正整数k，能被k整除的数的和可以用等差数列求和公式计算。
2. 处理重复计算的部分：由于一些数可能同时被3、5、7中的两个或三个整除，我们在第一步中重复计算了这些数。因此，我们需要减去这些重复计算的部分。
3. 使用等差数列求和公式：对于能被k整除的数，我们可以找到不超过n的最大数，然后使用等差数列求和公式计算和。

时间复杂度：O(1)，因为我们不再遍历所有整数，而是直接计算和。
空间复杂度：O(1)，我们只使用了常量级别的额外空间。

```js
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  const mod = 10 ** 9 + 7;
  function sumOfMultiple(k) {
    const maxMultiple = Math.floor(n / k) * k;
    const count = Math.floor(n / k);
    return ((count * (k + maxMultiple)) / 2) * k;
  }

  const sum3 = sumOfMultiple(3);
  const sum5 = sumOfMultiple(5);
  const sum7 = sumOfMultiple(7);
  const sum15 = sumOfMultiple(15);
  const sum21 = sumOfMultiple(21);
  const sum35 = sumOfMultiple(35);

  return (sum3 + sum5 + sum7 - sum15 - sum21 + sum35) % mod;
};
```
