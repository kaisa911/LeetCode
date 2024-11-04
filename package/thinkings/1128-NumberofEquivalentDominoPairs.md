# 等价多米诺骨牌对的数量

给你一组多米诺骨牌 dominoes 。

形式上，dominoes[i] = [a, b] 与 dominoes[j] = [c, d] 等价 当且仅当 (a == c 且 b == d) 或者 (a == d 且 b == c) 。即一张骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌。

在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。

示例 1：

```javascript
输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1
```

示例 2：

```javascript
输入：dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
输出：3
```

提示：

- 1 <= dominoes.length <= 4 \* 10^4
- dominoes[i].length == 2
- 1 <= dominoes[i][j] <= 9

思路：

题目的整理分析
拿到这个题目，首先需要明确判断两个多米诺骨牌是否等价的条件。可以通过将每个骨牌的数字组合成一个特定的值，使得等价的骨牌对应相同的值，从而方便统计数量。选择这种方法的理由是能够将复杂的骨牌比较转化为对数值的比较和统计，简化了问题的处理。

1. 首先创建一个长度为 100 的数组 `num` 来存储每个骨牌组合值出现的次数。
2. 遍历 `dominoes` 数组中的每个骨牌。
3. 对于每个骨牌，通过判断两个数字的大小，将较小数字乘以 10 加上较大数字，得到一个唯一的值 `val` 。
4. 将 `num[val]` 的值累加到结果 `ret` 中，因为 `num[val]` 表示之前已经出现过的与当前骨牌等价的骨牌数量。
5. 然后将 `num[val]` 的值加 1，表示当前骨牌又出现了一次。

时间复杂度：O(n)，其中 n 是 `dominoes` 数组的长度。遍历 `dominoes` 数组是主要的操作，其他操作的时间复杂度都是常数级。
空间复杂度： O(1)，创建了一个固定长度为 100 的数组，属于常量级空间。

```javascript
var numEquivDominoPairs = function (dominoes) {
  const num = new Array(100).fill(0);
  let ret = 0;
  for (const domino of dominoes) {
    const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
    ret += num[val];
    num[val]++;
  }
  return ret;
};
```
