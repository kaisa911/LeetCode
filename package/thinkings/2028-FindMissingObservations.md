# 找出缺失的观测数据

现有一份 n + m 次投掷单个 六面 骰子的观测数据，骰子的每个面从 1 到 6 编号。观测数据中缺失了 n 份，你手上只拿到剩余 m 次投掷的数据。幸好你有之前计算过的这 n + m 次投掷数据的 平均值 。

给你一个长度为 m 的整数数组 rolls ，其中 rolls[i] 是第 i 次观测的值。同时给你两个整数 mean 和 n 。

返回一个长度为 n 的数组，包含所有缺失的观测数据，且满足这 n + m 次投掷的 平均值 是 mean 。如果存在多组符合要求的答案，只需要返回其中任意一组即可。如果不存在答案，返回一个空数组。

k 个数字的 平均值 为这些数字求和后再除以 k 。

注意 mean 是一个整数，所以 n + m 次投掷的总和需要被 n + m 整除。

示例 1：

```js
输入：rolls = [3,2,4,3], mean = 4, n = 2
输出：[6,6]
解释：所有 n + m 次投掷的平均值是 (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4 。
```

示例 2：

```js
输入：rolls = [1,5,6], mean = 3, n = 4
输出：[2,3,2,2]
解释：所有 n + m 次投掷的平均值是 (1 + 5 + 6 + 2 + 3 + 2 + 2) / 7 = 3 。
```

示例 3：

```js
输入：rolls = [1,2,3,4], mean = 6, n = 4
输出：[]
解释：无论丢失的 4 次数据是什么，平均值都不可能是 6 。
```

示例 4：

```js
输入：rolls = [1], mean = 3, n = 1
输出：[5]
解释：所有 n + m 次投掷的平均值是 (1 + 5) / 2 = 3 。
```

提示：

- m == rolls.length
- 1 <= n, m <= 10^5
- 1 <= rolls[i], mean <= 6

思路：

拿到这个题目，首先需要明确已知条件，即已有的投掷数据 rolls、平均值 mean 和缺失的投掷次数 n。解题的关键在于通过已知的信息计算出缺失投掷的总和，然后根据总和和缺失次数来生成缺失的投掷数据。选择这种逐步计算的方法是因为题目逻辑清晰，按照步骤依次计算可以清晰地得到结果，并且易于理解和实现。

1. 首先计算出 `n + m` 次投掷的总和 `total`。
2. 计算已有的投掷结果之和 `existingSum`，从而得到缺失投掷的总和 `missingSum`。
3. 检查 `missingSum` 是否在合理范围内，如果不在则直接返回空数组。
4. 计算出缺失投掷的平均整数部分 `quotient` 和余数 `remainder`。
5. 根据 `quotient` 和 `remainder` 生成缺失的投掷结果数组。

时间复杂度：O(m + n)，其中计算已有投掷的和是 O(m)，生成缺失投掷结果是 O(n)。
空间复杂度：O(n)，用于存储缺失的投掷结果数组。

```javascript
var missingRolls = function (rolls, mean, n) {
  const total = (rolls.length + n) * mean;
  const existingSum = rolls.reduce((acc, cur) => acc + cur, 0);
  const missingSum = total - existingSum;

  if (missingSum < n || missingSum > 6 * n) {
    return [];
  }

  const quotient = Math.floor(missingSum / n);
  const remainder = missingSum % n;

  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    if (i < remainder) {
      result[i] = quotient + 1;
    } else {
      result[i] = quotient;
    }
  }

  return result;
};
```
