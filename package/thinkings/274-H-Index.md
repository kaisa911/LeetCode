# H 指数

给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。

根据维基百科上 h 指数的定义：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且 至少 有 h 篇论文被引用次数大于等于 h 。如果 h 有多种可能的值，h 指数 是其中最大的那个。

示例 1：

```javascript
输入：citations = [3,0,6,1,5]
输出：3
解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
     由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
```

示例 2：

```javascript
输入：citations = [1,3,1]
输出：1
```

提示：

- n == citations.length
- 1 <= n <= 5000
- 0 <= citations[i] <= 1000

思路

1. 首先，创建一个长度为 n+1 的数组 counter 来统计每个引用次数的论文数量，初始值都为 0。
2. 遍历 citations 数组，如果引用次数大于等于论文数量 n，则在 counter[n]上加 1；否则，在 counter[citations[i]]上加 1。
3. 初始化 tot 为 0，用于累加论文数量。
4. 从 n 到 0 遍历 counter 数组，每次累加 counter[i]到 tot 上。
5. 如果 tot 大于等于当前的引用次数 i，则返回 i 作为 h 指数；否则，继续遍历直到找到满足条件的 i 或遍历结束。
6. 如果遍历结束都没有找到满足条件的 i，则返回 0。

时间复杂度：O(n)，因为我们需要遍历两次数组，一次是统计引用次数，另一次是计算 h 指数。
空间复杂度：O(n)，我们使用了一个大小为 n+1 的数组来存储每个引用次数的论文数量。

```javascript
var hIndex = function (citations) {
  let n = citations.length,
    tot = 0;
  const counter = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    if (citations[i] >= n) {
      counter[n]++;
    } else {
      counter[citations[i]]++;
    }
  }
  for (let i = n; i >= 0; i--) {
    tot += counter[i];
    if (tot >= i) {
      return i;
    }
  }
  return 0;
};
```
