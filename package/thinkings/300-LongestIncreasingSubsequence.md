# 最长递增子序列

给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的
子序列
。

示例 1：

```javascript
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
```

示例 2：

```javascript
输入：nums = [0,1,0,3,2,3]
输出：4
```

示例 3：

```javascript
输入：nums = [7,7,7,7,7,7,7]
输出：1
```

提示：

- 1 <= nums.length <= 2500
- -10^4 <= nums[i] <= 10^4

分析：
最长递增子序列（Longest Increasing Subsequence，简称 LIS）问题是一个典型的动态规划问题。在解决这个问题时，我们的目标是找到一个子序列，使得这个子序列中的元素是严格递增的，并且这个子序列的长度是所有可能的递增子序列中最长的。

1. 状态定义：定义 dp[i]表示以 nums[i]结尾的最长递增子序列的长度。
2. 状态转移方程：对于每个 nums[i]，我们遍历所有前面的元素 nums[j]（其中 j < i），如果 nums[j] < nums[i]，则 nums[i]可以接在以 nums[j]结尾的递增子序列后面，因此 dp[i] = max(dp[i], dp[j] + 1)。
3. 初始化：由于每个元素至少可以单独构成一个长度为 1 的递增子序列，所以 dp 数组初始化为 1。
4. 遍历顺序：按照数组的顺序遍历，对于每个元素，都与前面的元素进行比较，更新 dp 数组。
5. 结果：最终，dp 数组中的最大值即为整个数组的最长递增子序列的长度。

思路

1. 维护一个 dp 数组：dp 数组用于存储当前已知的最长递增子序列。
2. 二分查找：对于每个元素 nums[i]，使用二分查找在 dp 数组中找到插入点，即 dp 中最后一个小于等于 nums[i]的元素的位置。
3. 更新 dp 数组：如果 nums[i]大于 dp 中所有元素，则将其追加到 dp 数组的末尾；否则，替换掉 dp 中找到的插入点的元素，因为这样可以保证 dp 数组仍然是一个递增序列，并且长度不会减少。
4. 返回结果：dp 数组的长度即为最长递增子序列的长度。

时间复杂度：O(n log n)，其中 n 是数组的长度。这是因为对于每个元素，我们都进行了一次二分查找，每次查找的时间复杂度是 O(log n)。
空间复杂度：O(n)，这是因为我们使用了一个额外的 dp 数组来存储最长递增子序列。在最坏的情况下，dp 数组的长度将与输入数组的长度相同。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  var dp = [];
  for (var i = 0; i < nums.length; i++) {
    var index = binarySearch(dp, nums[i]);
    if (index === dp.length) {
      dp.push(nums[i]);
    } else {
      dp[index] = nums[i];
    }
  }
  return dp.length;
};

function binarySearch(arr, target) {
  var start = 0,
    end = arr.length;
  while (start < end) {
    var mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}
```
