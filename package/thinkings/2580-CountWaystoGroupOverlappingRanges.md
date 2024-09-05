# 统计将重叠区间合并成组的方案数

给你一个二维整数数组 ranges ，其中 ranges[i] = [starti, endi] 表示 starti 到 endi 之间（包括二者）的所有整数都包含在第 i 个区间中。

你需要将 ranges 分成 两个 组（可以为空），满足：

每个区间只属于一个组。
两个有 交集 的区间必须在 同一个 组内。
如果两个区间有至少 一个 公共整数，那么这两个区间是 有交集 的。

比方说，区间 [1, 3] 和 [2, 5] 有交集，因为 2 和 3 在两个区间中都被包含。
请你返回将 ranges 划分成两个组的 总方案数 。由于答案可能很大，将它对 109 + 7 取余 后返回。

示例 1：

```js
输入：ranges = [[6,10],[5,15]]
输出：2
解释：
两个区间有交集，所以它们必须在同一个组内。
所以有两种方案：

- 将两个区间都放在第 1 个组中。
- 将两个区间都放在第 2 个组中。
```

示例 2：

```js
输入：ranges = [[1,3],[10,20],[2,5],[4,8]]
输出：4
解释：
区间 [1,3] 和 [2,5] 有交集，所以它们必须在同一个组中。
同理，区间 [2,5] 和 [4,8] 也有交集，所以它们也必须在同一个组中。
所以总共有 4 种分组方案：

- 所有区间都在第 1 组。
- 所有区间都在第 2 组。
- 区间 [1,3] ，[2,5] 和 [4,8] 在第 1 个组中，[10,20] 在第 2 个组中。
- 区间 [1,3] ，[2,5] 和 [4,8] 在第 2 个组中，[10,20] 在第 1 个组中。
```

提示：

- 1 <= ranges.length <= 10^5
- ranges[i].length == 2
- 0 <= starti <= endi <= 10^9

思路：

1. 排序：首先，将区间数组 ranges 按照每个区间的起始位置进行排序。这样做的目的是为了能够按照顺序处理区间，从而简化重叠区间的检测。
2. 合并区间：遍历排序后的区间数组，对于每个区间，检查后续的区间是否与其有重叠。如果有重叠，即后续区间的起始位置小于等于当前区间的结束位置，则将这些区间视为一个组，因为它们必须被分到同一组中。
3. 计算方案数：对于每个组，有两种分配方案：将整个组分配到组 1，或者将整个组分配到组 2。因此，对于每个组，方案数翻倍。
4. 取模操作：由于最终的方案数可能非常大，需要在每次翻倍后对结果进行取模操作，以避免整数溢出。

时间复杂度：O(n log n)，其中 n 是区间数组 ranges 的长度。这是因为需要对区间进行排序，而排序的时间复杂度为 O(n log n)。
空间复杂度：O(1)，算法只使用了常量级别的额外空间。

```javascript
/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function (ranges) {
  const mod = 1e9 + 7;
  ranges.sort((a, b) => a[0] - b[0]);

  let n = ranges.length;
  let res = 1;
  for (let i = 0; i < n; ) {
    let r = ranges[i][1];
    let j = i + 1;
    while (j < n && ranges[j][0] <= r) {
      r = Math.max(r, ranges[j][1]);
      j++;
    }
    res = (res * 2) % mod;
    i = j;
  }
  return res;
};
```