# 最大间距

给定一个无序的数组 nums，返回 数组在排序之后，相邻元素之间最大的差值 。如果数组元素个数小于 2，则返回 0 。

您必须编写一个在「线性时间」内运行并使用「线性额外空间」的算法。

示例 1:

```js
输入: nums = [3,6,9,1]
输出: 3
解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
```

示例 2:

```js
输入: nums = [10]
输出: 0
解释: 数组元素个数小于 2，因此返回 0。
```

提示:

- 1 <= nums.length <= 105
- 0 <= nums[i] <= 109

思路

1. 基本情况：如果数组长度小于 2，直接返回 0。
2. 计算最小值和最大值：找到数组中的最小值和最大值。
3. 确定桶的大小：计算每个桶应该覆盖的数值范围 d，以及总共需要的桶的数量。
4. 初始化桶：创建一个二维数组 bucket，每个桶有两个元素，分别存储该桶的最小值和最大值。
5. 分配数值到桶：遍历数组，将每个数值分配到对应的桶中。
6. 计算最大间距：使用一个变量 prev 记录上一个非空桶的最大值，然后遍历桶，计算当前桶的最小值与 prev 的差值，更新最大间距。
7. 返回结果：返回计算得到的最大间距。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。这是因为每个元素只被访问一次，并且每个桶的操作也是常数时间的。
空间复杂度：O((maxVal−minVal)/d+n)，其中 d 是桶的宽度。在最坏的情况下，如果数值分布非常均匀，桶的数量将接近于
(maxVal−minVal)/d
​
，加上存储原数组的空间。

```js
var maximumGap = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return 0;
  }
  const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);
  const d = Math.max(1, Math.floor(maxVal - minVal) / (n - 1));
  const bucketSize = Math.floor((maxVal - minVal) / d) + 1;

  const bucket = new Array(bucketSize).fill(0).map((x) => new Array(2).fill(0));
  for (let i = 0; i < bucketSize; ++i) {
    bucket[i].fill(-1);
  }
  for (let i = 0; i < n; i++) {
    const idx = Math.floor((nums[i] - minVal) / d);
    if (bucket[idx][0] === -1) {
      bucket[idx][0] = bucket[idx][1] = nums[i];
    } else {
      bucket[idx][0] = Math.min(bucket[idx][0], nums[i]);
      bucket[idx][1] = Math.max(bucket[idx][1], nums[i]);
    }
  }

  let ret = 0;
  let prev = -1;
  for (let i = 0; i < bucketSize; i++) {
    if (bucket[i][0] == -1) {
      continue;
    }
    if (prev != -1) {
      ret = Math.max(ret, bucket[i][0] - bucket[prev][1]);
    }
    prev = i;
  }
  return ret;
};
```
