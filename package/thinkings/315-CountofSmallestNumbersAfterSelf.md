# 计算右侧小于当前元素的个数

给你一个整数数组 nums ，按要求返回一个新数组 counts 。数组 counts 有该性质： counts[i] 的值是 nums[i] 右侧小于 nums[i] 的元素的数量。

示例 1：

```javascript
输入：nums = [5,2,6,1]
输出：[2,1,1,0]
解释：
5 的右侧有 2 个更小的元素 (2 和 1)
2 的右侧仅有 1 个更小的元素 (1)
6 的右侧有 1 个更小的元素 (1)
1 的右侧有 0 个更小的元素
```

示例 2：

```javascript
输入：nums = [-1]
输出：[0]
```

示例 3：

```javascript
输入：nums = [-1,-1]
输出：[0,0]
```

提示：

- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4

思路:

1. 初始化数组：创建一个 counts 数组来存储每个元素右侧小于它的元素的数量，以及一个 sortedNums 数组来存储排序后的元素。
2. 使用树状数组：创建一个大小为 n + 1 的数组 bit，用于树状数组的实现。
3. 排序：将 nums 数组中的元素复制到 sortedNums 数组中，并对其进行降序排序。
4. 计算右侧小于当前元素的个数：从后向前遍历 sortedNums 数组，对于每个元素，使用树状数组来计算它右侧小于它的元素的数量，并更新 counts 数组。
5. 更新树状数组：在计算完每个元素右侧小于它的元素的数量后，更新树状数组，以便为下一个元素的计算提供正确的信息。

时间复杂度：O(n log n)，其中 n 是数组 nums 的长度。这是因为我们对数组进行了排序，排序的时间复杂度为 O(n log n)。
空间复杂度：O(n)，我们需要额外的空间来存储 counts 数组和树状数组 bit。

```javascript
const countSmaller = (nums) => {
  const n = nums.length;
  const counts = new Array(n).fill(0);
  const sortedNums = new Array(n);
  const bit = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    sortedNums[i] = nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    const num = sortedNums[i];
    counts[i] = bit[0];
    let j = num;
    while (j > 0) {
      counts[i] += bit[j];
      j -= j & -j;
    }
    let j = num;
    while (j <= n) {
      bit[j]++;
      j += j & -j;
    }
  }

  return counts;
};
```
