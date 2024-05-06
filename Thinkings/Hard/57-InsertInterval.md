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

```js
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let len = intervals.length;
  // 假设没有合并,最终的长度为 len + 1
  let newLen = intervals.length + 1;
  let i = 0;
  for (; i < len; i++) {
    // 如果新区间小于当前区间
    if (newInterval[0] < intervals[i][0]) {
      // 区间不重叠,则新区间放在当前位置
      if (newInterval[1] < intervals[i][0]) {
        break;
      }
      //否则合并为新区间,将当前区间丢弃,新数组长度 - 1
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      intervals[i] = null;
      newLen--;
    } else {
      // 新区间大于当前区间,且存在重叠
      // 合并为新区间,将当前区间丢弃,新数组长度 - 1
      if (newInterval[0] <= intervals[i][1]) {
        newInterval[0] = intervals[i][0];
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        newLen--;
        intervals[i] = null;
      }
    }
  }
  let res = [];
  let j = 0;
  let k = 0;
  // 将新区间取代位置前的所有区间(不包括舍弃的,null)放入新数组
  for (; k < i; k++) {
    if (intervals[k] != null) {
      res[j++] = intervals[k];
    }
  }
  // 放入新区间
  res[j++] = newInterval;
  // 将新区间取代位置后的所有区间(不包括舍弃的,null)放入新数组
  for (; k < len; k++) {
    if (intervals[k] != null) {
      res[j++] = intervals[k];
    }
  }
  return res;
};

```
