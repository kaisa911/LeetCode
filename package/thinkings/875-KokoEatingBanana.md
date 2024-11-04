# 爱吃香蕉的珂珂

珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

示例 1：

```js
输入：piles = [3,6,7,11], h = 8
输出：4
```

示例 2：

```js
输入：piles = [30,11,23,4,20], h = 5
输出：30
```

示例 3：

```js
输入：piles = [30,11,23,4,20], h = 6
输出：23
```

提示：

- 1 <= piles.length <= 10^4
- piles.length <= h <= 10^9
- 1 <= piles[i] <= 10^9

思路：

拿到这个题目，首先要明确目标是找到能在 h 小时内吃完所有香蕉的最小吃香蕉速度 k。由于速度 k 是整数，且有取值范围，所以考虑使用二分查找来逐步缩小速度的可能范围。选择二分查找是因为它能在有序的搜索空间中快速找到目标值，在这种有明确上下界且需要查找最优值的情况下效率较高。

1. 首先确定速度的下限 low 为 1，上限 high 为数组 piles 中的最大值，这样确保了速度的取值范围涵盖了所有可能。
2. 在二分查找的循环中，计算中间速度 speed，并通过 getTime 函数计算以该速度吃完所有香蕉所需的时间 time。
3. 如果 time 小于等于给定的 h，说明当前速度有可能是最优解，更新 k 和 high 以缩小搜索范围。
4. 如果 time 大于 h，说明速度太慢，更新 low 以增大速度继续查找。

时间复杂度为 O(nlogm)，其中 n 是 piles 数组的长度，m 是香蕉堆中香蕉数量的最大值。因为二分查找的时间复杂度为 logm，对于每个速度都需要遍历 piles 数组计算时间，所以总的时间复杂度为 O(nlogm)。
空间复杂度为 O(1)，只使用了固定的几个变量，没有额外的空间随输入规模而增长。

```js
var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = 0;
  for (const pile of piles) {
    high = Math.max(high, pile);
  }
  let k = high;
  while (low < high) {
    const speed = Math.floor((high - low) / 2) + low;
    const time = getTime(piles, speed);
    if (time <= h) {
      k = speed;
      high = speed;
    } else {
      low = speed + 1;
    }
  }
  return k;
};

const getTime = (piles, speed) => {
  let time = 0;
  for (const pile of piles) {
    const curTime = Math.floor((pile + speed - 1) / speed);
    time += curTime;
  }
  return time;
};
```
