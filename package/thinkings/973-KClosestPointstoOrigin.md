# 最接近原点的 K 个点

给定一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点，并且是一个整数 k ，返回离原点 (0,0) 最近的 k 个点。

这里，平面上两点之间的距离是 欧几里德距离（ √(x1 - x2)2 + (y1 - y2)2 ）。

你可以按 任何顺序 返回答案。除了点坐标的顺序之外，答案 确保 是 唯一 的。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg)

```js
输入：points = [[1,3],[-2,2]], k = 1
输出：[[-2,2]]
解释：
(1, 3) 和原点之间的距离为 sqrt(10)，
(-2, 2) 和原点之间的距离为 sqrt(8)，
由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。
```

示例 2：

```js
输入：points = [[3,3],[5,-1],[-2,4]], k = 2
输出：[[3,3],[-2,4]]
（答案 [[-2,4],[3,3]] 也会被接受。）
```

提示：

- 1 <= k <= points.length <= 104
- -104 < xi, yi < 104

思路
1. 快速选择：kClosest函数中，使用quickSelect函数对整个数组进行快速选择操作，选择第K近的点。
2. 距离计算：distance函数用于计算点到原点的欧几里得距离。
3. 分区操作：quickSelect函数中，选择一个轴点（pivot），然后对数组进行分区，使得距离小于等于轴点的点位于数组的左侧，大于轴点的点位于数组的右侧。
4. 递归选择：根据分区后的位置r与K的比较结果，递归地对需要的部分进行快速选择。
5. 返回结果：快速选择完成后，数组的前K个点即为距离最近的点，使用slice方法返回这些点。

时间复杂度：平均情况下为O(n)，最坏情况下为O(n^2)，其中 n 是点的数量。这是因为快速选择算法在平均情况下具有线性时间复杂度，但在最坏情况下（例如，当数组已经排序或所有点等距时）时间复杂度退化为平方级别。
空间复杂度：O(logn)，这是因为递归栈的深度。在最坏情况下，递归深度可以达到O(logn)。

```js
var kClosest = function (points, K) {
  if (points.length <= K) {
    return points;
  }
  quickSelect(points, 0, points.length - 1, K); // 范围是整个数组
  return points.slice(0, K); // 排完后，取前K个
};

function quickSelect(points, start, end, K) {
  const pivot = distance(points[start]);
  let l = start,
    r = end;
  while (l <= r) {
    // 左右两个指针
    if (distance(points[l]) <= pivot) {
      // 左指针指向的元素比pivot小，没毛病，看下一个，指针右移
      l++;
      continue;
    }
    if (distance(points[r]) > pivot) {
      // 右指针指向的元素比pivot大，没毛病，看下一个，指针左移
      r--;
      continue;
    }
    // 左指针指向的元素比pivot大，右指针指向的元素比pivot小，交换左右指针指向的元素
    [points[l], points[r]] = [points[r], points[l]];
    l++;
    r--; // 指针同时收缩1
  }
  [points[start], points[r]] = [points[r], points[start]]; // 交换pivot元素和右指针指向的元素
  if (r == K) {
    // 排好了
    return;
  } else if (r < K) {
    // 左边还不够K个，则[r+1:end]要继续排
    quickSelect(points, r + 1, end, K);
  } else {
    // 左边大于K个，则对左边继续排
    quickSelect(points, start, r - 1, K);
  }
}

function distance(point) {
  // 求point到原点的距离
  return point[0] * point[0] + point[1] * point[1];
}
```
