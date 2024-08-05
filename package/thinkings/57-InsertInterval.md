# 插入区间

给你一个 无重叠的 ，按照区间起始端点排序的区间列表 intervals，其中 intervals[i] = [starti, endi] 表示第 i 个区间的开始和结束，并且 intervals 按照 starti 升序排列。同样给定一个区间 newInterval = [start, end] 表示另一个区间的开始和结束。

在 intervals 中插入区间 newInterval，使得 intervals 依然按照 starti 升序排列，且区间之间不重叠（如果有必要的话，可以合并区间）。

返回插入之后的 intervals。

注意 你不需要原地修改 intervals。你可以创建一个新数组然后返回它。

示例 1：

```js
输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
```

示例 2：

```js
输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
```

提示：

- 0 <= intervals.length <= 104
- intervals[i].length == 2
- 0 <= starti <= endi <= 105
- intervals 根据 starti 按 升序 排列
- newInterval.length == 2
- 0 <= start <= end <= 105

思路：

1. 遍历原始区间列表
2. 比较新区间与当前区间的位置关系
3. 处理重叠情况，合并重叠的区间
4. 构建新的结果数组

时间复杂度： O(n)，其中 n 是原始区间列表的长度。算法只遍历了一次原始列表。空间复杂度： O(n) 用于存储结果的新数组。

```js
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;
  const n = intervals.length;

  // Add all intervals ending before newInterval starts
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge all overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add the merged interval
  result.push(newInterval);

  // Add remaining intervals
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
```
