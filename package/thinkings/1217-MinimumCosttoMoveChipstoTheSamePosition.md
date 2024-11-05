# 玩筹码

有 n 个筹码。第 i 个筹码的位置是 position[i] 。

我们需要把所有筹码移到同一个位置。在一步中，我们可以将第 i 个筹码的位置从 position[i] 改变为:

position[i] + 2 或 position[i] - 2 ，此时 cost = 0
position[i] + 1 或 position[i] - 1 ，此时 cost = 1
返回将所有筹码移动到同一位置上所需要的 最小代价 。

示例 1：
![](https://assets.leetcode.com/uploads/2020/08/15/chips_e1.jpg)

```javascript
输入：position = [1,2,3]
输出：1
解释：第一步:将位置3的筹码移动到位置1，成本为0。
第二步:将位置2的筹码移动到位置1，成本= 1。
总成本是1。
```

示例 2：
![](https://assets.leetcode.com/uploads/2020/08/15/chip_e2.jpg)

```javascript
输入：position = [2,2,2,3,3]
输出：2
解释：我们可以把位置3的两个筹码移到位置2。每一步的成本为1。总成本= 2。
```

示例 3:

```javascript
输入：position = [1,1000000000]
输出：1
```

提示：

- 1 <= position.length <= 100
- 1 <= position[i] <= 10^9

思路：

首先，题目要求将所有筹码移动到同一位置，并且规定了不同移动方式的代价。对于每个筹码的位置，我们需要统计其奇偶性，因为移动代价为 0 的操作是位置加减 2，这不会改变奇偶性。所以可以通过统计筹码位置的奇偶个数，选择个数较少的那一类进行移动，因为移动这类筹码的总代价最小。

1. 首先定义两个变量 `even` 和 `odd` 分别用于统计位置为偶数和奇数的筹码个数。
2. 通过遍历 `position` 数组中的每个位置 `pos` ，使用位运算 `(pos & 1)` 来快速判断奇偶性。如果结果不为 0 ，则 `odd` 加 1 ，表示该位置为奇数；否则 `even` 加 1 ，表示该位置为偶数。
3. 最后返回 `odd` 和 `even` 中的较小值，因为移动个数较少的那一类筹码总代价最小。

时间复杂度：O(n)，其中 n 是 `position` 数组的长度，需要遍历整个数组进行奇偶性统计。
空间复杂度：O(1)，只使用了固定的几个额外变量，不随输入规模变化。

```javascript
var minCostToMoveChips = function (position) {
  let even = 0,
    odd = 0;
  for (const pos of position) {
    if ((pos & 1) !== 0) {
      odd++;
    } else {
      even++;
    }
  }
  return Math.min(odd, even);
};
```
