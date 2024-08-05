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
