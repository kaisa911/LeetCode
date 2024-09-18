# 天际线问题

城市的 天际线 是从远处观看该城市中所有建筑物形成的轮廓的外部轮廓。给你所有建筑物的位置和高度，请返回 由这些建筑物形成的 天际线 。

每个建筑物的几何信息由数组 buildings 表示，其中三元组 buildings[i] = [lefti, righti, heighti] 表示：

lefti 是第 i 座建筑物左边缘的 x 坐标。
righti 是第 i 座建筑物右边缘的 x 坐标。
heighti 是第 i 座建筑物的高度。
你可以假设所有的建筑都是完美的长方形，在高度为 0 的绝对平坦的表面上。

天际线 应该表示为由 “关键点” 组成的列表，格式 [[x1,y1],[x2,y2],...] ，并按 x 坐标 进行 排序 。关键点是水平线段的左端点。列表中最后一个点是最右侧建筑物的终点，y 坐标始终为 0 ，仅用于标记天际线的终点。此外，任何两个相邻建筑物之间的地面都应被视为天际线轮廓的一部分。

注意：输出天际线中不得有连续的相同高度的水平线。例如 [...[2 3], [4 5], [7 5], [11 5], [12 7]...] 是不正确的答案；三条高度为 5 的线应该在最终输出中合并为一个：[...[2 3], [4 5], [12 7], ...]

示例 1：
![](https://assets.leetcode.com/uploads/2020/12/01/merged.jpg)

```javascript
输入：buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
输出：[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
解释：
图 A 显示输入的所有建筑物的位置和高度，
图 B 显示由这些建筑物形成的天际线。图 B 中的红点表示输出列表中的关键点。
```

示例 2：

```javascript
输入：buildings = [[0,2,3],[2,5,3]]
输出：[[0,3],[5,0]]
```

提示：

- 1 <= buildings.length <= 10^4
- 0 <= lefti < righti <= 2^31 - 1
- 1 <= heighti <= 2^31 - 1
- buildings 按 lefti 非递减排序

思路：

1. 创建事件点数组：将所有建筑物的左边界和右边界作为事件点，左边界用正高度表示，右边界用负高度表示，存入数组 arr。
2. 排序事件点：按照事件点的 x 坐标进行排序，如果 x 坐标相同，则高度大的排在前面。
3. 维护高度数组：使用一个数组 heights 来维护当前所有建筑物的最高高度。数组中的每个元素代表一个高度值，以及该高度值在 heights 中的位置。
4. 遍历事件点：遍历所有事件点，对于每个事件点：
   - 如果是左边界，将对应的高度值插入到 heights 数组中。
   - 如果是右边界，从 heights 数组中移除对应的高度值。
5. 记录关键点：在遍历过程中，如果当前的最高高度与前一个事件点的最高高度不同，则记录当前位置和高度作为天际线的关键点。
6. 返回结果：遍历完成后，返回包含所有关键点的数组 ans。

时间复杂度：O(n log n)，其中 n 是建筑物的数量。需要对所有事件点进行排序，并且可能需要在 heights 数组中进行二分查找来插入或移除高度值。
空间复杂度：O(n)，用于存储事件点数组和高度数组。

```javascript
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
```
