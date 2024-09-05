# 咒语和药水的成功对数

给你两个正整数数组 spells 和 potions ，长度分别为 n 和 m ，其中 spells[i] 表示第 i 个咒语的能量强度，potions[j] 表示第 j 瓶药水的能量强度。

同时给你一个整数 success 。一个咒语和药水的能量强度 相乘 如果 大于等于 success ，那么它们视为一对 成功 的组合。

请你返回一个长度为 n 的整数数组 pairs，其中 pairs[i] 是能跟第 i 个咒语成功组合的 药水 数目。

示例 1：

```js
输入：spells = [5,1,3], potions = [1,2,3,4,5], success = 7
输出：[4,0,3]
解释：

- 第 0 个咒语：5 * [1,2,3,4,5] = [5,10,15,20,25] 。总共 4 个成功组合。
- 第 1 个咒语：1 * [1,2,3,4,5] = [1,2,3,4,5] 。总共 0 个成功组合。
- 第 2 个咒语：3 * [1,2,3,4,5] = [3,6,9,12,15] 。总共 3 个成功组合。
所以返回 [4,0,3] 。
```

示例 2：

```js
输入：spells = [3,1,2], potions = [8,5,8], success = 16
输出：[2,0,2]
解释：

- 第 0 个咒语：3 * [8,5,8] = [24,15,24] 。总共 2 个成功组合。
- 第 1 个咒语：1 * [8,5,8] = [8,5,8] 。总共 0 个成功组合。
- 第 2 个咒语：2 * [8,5,8] = [16,10,16] 。总共 2 个成功组合。
所以返回 [2,0,2] 。
```

提示：

- n == spells.length
- m == potions.length
- 1 <= n, m <= 10^5
- 1 <= spells[i], potions[i] <= 10^5
- 1 <= success <= 10^10

思路：

1. 排序：首先，对药水数组 potions 进行排序，以便进行二分查找。
2. 二分查找：对于每个咒语 spells[i]，使用二分查找在 potions 中找到大于等于 success / spells[i] 的最小元素的位置。这个位置就是能与当前咒语成功组合的药水数目的起点。
3. 计算成功组合：对于每个咒语，计算从二分查找得到的位置到 potions 数组末尾的药水数目，这就是能与该咒语成功组合的药水数目。
4. 返回结果：返回一个数组，其中每个元素表示对应咒语能成功组合的药水数目。

时间复杂度：O(n \* log m)，其中 n 是 spells 数组的长度，m 是 potions 数组的长度。这是因为需要对 potions 数组进行排序，并且对于 spells 数组中的每个元素，都需要执行一次二分查找。
空间复杂度：O(1)，算法只使用了常量级别的额外空间。

```javascript
var successfulPairs = function (spells, potions, success) {
  function binarySearch(nums, lo, hi, target) {
    let res = hi + 1;
    while (lo <= hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (nums[mid] > target) {
        res = mid;
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return res;
  }

  potions.sort((a, b) => a - b);
  return spells.map((item) => {
    return potions.length - binarySearch(potions, 0, potions.length - 1, (success - 1) / item);
  });
};
```
