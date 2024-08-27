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
