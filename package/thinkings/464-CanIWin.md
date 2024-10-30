# 我能赢吗

在 "100 game" 这个游戏中，两名玩家轮流选择从 1 到 10 的任意整数，累计整数和，先使得累计整数和 达到或超过 100 的玩家，即为胜者。

如果我们将游戏规则改为 “玩家 不能 重复使用整数” 呢？

例如，两个玩家可以轮流从公共整数池中抽取从 1 到 15 的整数（不放回），直到累计整数和 >= 100。

给定两个整数 maxChoosableInteger （整数池中可选择的最大数）和 desiredTotal（累计和），若先出手的玩家能稳赢则返回 true ，否则返回 false 。假设两位玩家游戏时都表现 最佳 。

示例 1：

```javascript
输入：maxChoosableInteger = 10, desiredTotal = 11
输出：false
解释：
无论第一个玩家选择哪个整数，他都会失败。
第一个玩家可以选择从 1 到 10 的整数。
如果第一个玩家选择 1，那么第二个玩家只能选择从 2 到 10 的整数。
第二个玩家可以通过选择整数 10（那么累积和为 11 >= desiredTotal），从而取得胜利.
同样地，第一个玩家选择任意其他整数，第二个玩家都会赢。
```

示例 2:

```javascript
输入：maxChoosableInteger = 10, desiredTotal = 0
输出：true
```

示例 3:

```javascript
输入：maxChoosableInteger = 10, desiredTotal = 1
输出：true
```

提示:

- 1 <= maxChoosableInteger <= 20
- 0 <= desiredTotal <= 300

思路：

对于这个问题，我们需要判断先出手的玩家是否能稳赢。

- 由于玩家不能重复使用整数，我们可以考虑使用状态记录来帮助判断。这里使用了一个递归的深度优先搜索（DFS）方法，并结合记忆化（memoization）来优化计算。
- 选择这种方法的原因是：通过记录已经使用过的数字状态（用二进制表示 usedNumbers），可以避免重复计算相同状态下的结果。每次递归地尝试选择一个未使用过的数字，并判断选择该数字后是否能获胜，或者对手在这种选择下是否会输。

1. 首先，在`canIWin`函数中，有一个初始判断：如果所有可选数字之和（即`((1 + maxChoosableInteger) * maxChoosableInteger) / 2`）小于`desiredTotal`，那么先出手的玩家不可能赢，直接返回`false`。
2. 然后调用`dfs`函数进行深度优先搜索。
   - 在`dfs`函数中，首先检查当前`usedNumbers`状态是否已经在`memo`（Map）中记录。如果没有记录：
     - 初始化结果`res`为`false`。
     - 循环遍历从 0 到`maxChoosableInteger`的数字`i`。
       - 检查数字`i`是否未被使用（通过检查`usedNumbers`的二进制表示中对应的位）。
       - 如果选择`i + 1`后累计和`i + 1+ currentTotal`达到或超过`desiredTotal`，则先出手的玩家赢，设置`res`为`true`并跳出循环。
       - 否则，递归调用`dfs`函数，假设对手在选择`i`后的状态下进行游戏（更新`usedNumbers`为`usedNumbers | (1 << i)`，`currentTotal`为`currentTotal + i + 1`），如果对手不能赢（即递归调用返回`false`），那么先出手的玩家赢，设置`res`为`true`并跳出循环。
     - 最后将当前`usedNumbers`状态和对应的结果`res`存入`memo`中。
   - 返回`memo.get(usedNumbers)`，即当前状态下的结果。

时间复杂度：

- 最坏情况下，需要考虑所有可能的数字选择组合。对于每个数字，有选或不选两种情况，总共`2^maxChoosableInteger`种状态。在每个状态下，可能需要遍历最多`maxChoosableInteger`个数字来进行选择判断。所以时间复杂度为O(maxChoosableInteger * 2^{maxChoosableInteger})$。
- 由于使用了记忆化（`memo`），实际运行时间会因为避免重复计算而减少，但在最坏情况下复杂度不变。
  空间复杂度：主要的空间消耗在`memo`（Map）和函数调用栈。`memo`中最多可能存储`2^maxChoosableInteger`个状态，函数调用栈的深度最多为`maxChoosableInteger`。所以空间复杂度为O(2^{maxChoosableInteger})$。

```javascript
var canIWin = function (maxChoosableInteger, desiredTotal) {
  const memo = new Map();
  const dfs = (maxChoosableInteger, usedNumbers, desiredTotal, currentTotal) => {
    if (!memo.has(usedNumbers)) {
      let res = false;
      for (let i = 0; i < maxChoosableInteger; i++) {
        if (((usedNumbers >> i) & 1) === 0) {
          if (i + 1 + currentTotal >= desiredTotal) {
            res = true;
            break;
          }
          if (
            !dfs(maxChoosableInteger, usedNumbers | (1 << i), desiredTotal, currentTotal + i + 1)
          ) {
            res = true;
            break;
          }
        }
      }
      memo.set(usedNumbers, res);
    }
    return memo.get(usedNumbers);
  };
  if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal) {
    return false;
  }
  return dfs(maxChoosableInteger, 0, desiredTotal, 0);
};
```
