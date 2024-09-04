# 数组中的 k-diff 数对

给你一个整数数组 nums 和一个整数 k，请你在数组中找出 不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。

k-diff 数对定义为一个整数对 (nums[i], nums[j]) ，并满足下述全部条件：

0 <= i, j < nums.length
i != j
|nums[i] - nums[j]| == k
注意，|val| 表示 val 的绝对值。

示例 1：

```javascript
输入：nums = [3, 1, 4, 1, 5], k = 2
输出：2
解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个 1 ，但我们只应返回不同的数对的数量。
```

示例 2：

```javascript
输入：nums = [1, 2, 3, 4, 5], k = 1
输出：4
解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5) 。
```

示例 3：

```javascript
输入：nums = [1, 3, 1, 5, 4], k = 0
输出：1
解释：数组中只有一个 0-diff 数对，(1, 1) 。
```

提示：

- 1 <= nums.length <= 10^4
- -10^7 <= nums[i] <= 10^7
- 0 <= k <= 10^7

思路：
1. 初始化结构：创建两个集合 visited 用于存储已经遍历过的数字，以及 res 用于存储满足条件的数对。
2. 遍历数组：遍历数组 nums 中的每个数字，尝试找出与当前数字相差 k 的另一个数字。
3. 检查差值：如果当前数字与 k 的差值（无论是正差还是负差）已经在 visited 集合中，则说明找到了一个符合条件的数对，将其添加到 res 集合中。
4. 防止重复：为了保证数对的唯一性，每找到一个数字就将其加入 visited 集合，这样就不会重复计数。
5. 返回结果：最后返回 res 集合的大小，即满足条件的不重复数对的数量。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。每个元素最多被访问两次（一次在遍历时，一次在查找差值为 k 时）。
空间复杂度：O(n)，在最坏的情况下，所有元素都可能被加入 visited 和 res 集合中。

```javascript
var findPairs = function (nums, k) {
  const visited = new Set();
  const res = new Set();
  for (const num of nums) {
    if (visited.has(num - k)) {
      res.add(num - k);
    }
    if (visited.has(num + k)) {
      res.add(num);
    }
    visited.add(num);
  }
  return res.size;
};
```