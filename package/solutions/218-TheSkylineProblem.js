/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const arr = [],
    ans = [],
    n = buildings.length;
  // 记录点，用负数标记右点
  for (let [l, r, h] of buildings) arr.push([l, h], [r, -h]);
  // 在x轴排序，x相同按y大的排
  arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  const m = arr.length,
    heights = [0];
  // 记录前一个最高高度
  // 用于过滤出在x点最高的点
  // 和过滤两点在x处有相同高度的情况
  let preH = 0;
  for (let [l, h] of arr) {
    // 通过二分插入该左点高度
    if (h > 0) heights.splice(search(heights, h), 0, h);
    // 通过二分移除右点高度
    else heights.splice(search(heights, -h), 1);
    // 前高度和当前最高高度不相等，说明出现了关键点
    if (preH !== heights[0]) {
      ans.push([l, heights[0]]);
      preH = heights[0];
    }
  }
  return ans;
};

// 二分
function search(arr, tar) {
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    const mid = l + ((r - l) >> 1);
    if (arr[mid] === tar) return mid;
    else if (arr[mid] < tar) r = mid;
    else l = mid + 1;
  }
  return l;
}
