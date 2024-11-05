# 如果相邻两个颜色均相同则删除当前颜色

总共有 n  个颜色片段排成一列，每个颜色片段要么是  'A'  要么是  'B' 。给你一个长度为  n  的字符串  colors ，其中
 colors[i]  表示第  i  个颜色片段的颜色。

Alice 和 Bob 在玩一个游戏，他们 轮流   从这个字符串中删除颜色。Alice 先手  。

- 如果一个颜色片段为 'A'  且 相邻两个颜色   都是颜色 'A' ，那么 Alice 可以删除该颜色片段。Alice  不可以   删除任何颜色
   'B'  片段。
- 如果一个颜色片段为 'B'  且 相邻两个颜色   都是颜色 'B' ，那么 Bob 可以删除该颜色片段。Bob 不可以   删除任何颜色 'A' 
  片段。
- Alice 和 Bob 不能   从字符串两端删除颜色片段。
- 如果其中一人无法继续操作，则该玩家 输   掉游戏且另一玩家 获胜  。

假设 Alice 和 Bob 都采用最优策略，如果 Alice 获胜，请返回  true，否则 Bob 获胜，返回  false。

**示例 1：**

```
输入：colors = "AAABABB"
输出：true
解释：
AAABABB -> AABABB
Alice 先操作。
她删除从左数第二个 'A' ，这也是唯一一个相邻颜色片段都是 'A' 的 'A' 。

现在轮到 Bob 操作。
Bob 无法执行任何操作，因为没有相邻位置都是 'B' 的颜色片段 'B' 。
因此，Alice 获胜，返回 true 。
```

**示例 2：**

```
输入：colors = "AA"
输出：false
解释：
Alice 先操作。
只有 2 个 'A' 且它们都在字符串的两端，所以她无法执行任何操作。
因此，Bob 获胜，返回 false 。
```

**示例 3：**

````
输入：colors = "ABBBBBBBAAA"
输出：false
解释：
ABBBBBBBAAA -> ABBBBBBBAA
Alice 先操作。
她唯一的选择是删除从右数起第二个 'A' 。

ABBBBBBBAA -> ABBBBBBAA
接下来轮到 Bob 操作。
他有许多选择，他可以选择任何一个 'B' 删除。

然后轮到 Alice 操作，她无法删除任何片段。
所以 Bob 获胜，返回 false 。
 ```

**提示：**

- 1 <= colors.length <= 105
- colors 只包含字母 'A' 和 'B'

````

思路：

拿到这个题目，首先要明确这是一个两人轮流操作的游戏，需要根据给定的规则计算出 Alice 和 Bob 各自能够删除的颜色片段数量。解题思路可以是通过遍历字符串，逐个检查每个字符及其相邻的两个字符，来统计符合删除条件的颜色片段数量。选择这种方法是因为它直接且易于理解，通过一次遍历就能完成统计。

1. 首先分别设置两个变量 `countA` 和 `countB` 来统计 Alice 和 Bob 可删除的颜色片段数量。
2. 通过遍历字符串，从第二个字符到倒数第二个字符。
3. 对于每个字符，判断其前一个、自身和后一个字符是否相同。
   - 如果是 'A'，则增加 `countA` 的值。
   - 如果是 'B'，则增加 `countB` 的值。
4. 最后比较 `countA` 和 `countB` 的大小，返回 `countA` 大于 `countB` 的结果。

时间和空间复杂度分析
时间复杂度：O(n)，其中 n 是字符串 `colors` 的长度，需要遍历字符串一次。
空间复杂度：O(1)，使用了固定的额外空间来存储 `countA` 和 `countB` 两个变量，不随输入规模变化。

```js
function winnerOfGame(colors) {
  let countA = 0;
  let countB = 0;
  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i - 1] === 'A' && colors[i] === 'A' && colors[i + 1] === 'A') {
      countA++;
    }
    if (colors[i - 1] === 'B' && colors[i] === 'B' && colors[i + 1] === 'B') {
      countB++;
    }
  }
  return countA > countB;
}
```
