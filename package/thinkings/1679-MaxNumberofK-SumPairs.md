# K 和数对的最大数目

给你一个整数数组 nums 和一个整数 k 。

每一步操作中，你需要从数组中选出和为 k 的两个整数，并将它们移出数组。

返回你可以对数组执行的最大操作数。

示例 1：

```javascript
输入：nums = [1,2,3,4], k = 5
输出：2
解释：开始时 nums = [1,2,3,4]：

- 移出 1 和 4 ，之后 nums = [2,3]
- 移出 2 和 3 ，之后 nums = []
不再有和为 5 的数对，因此最多执行 2 次操作。
```

示例 2：

```javascript
输入：nums = [3,1,3,4,3], k = 6
输出：1
解释：开始时 nums = [3,1,3,4,3]：

- 移出前两个 3 ，之后nums = [1,4,3]
不再有和为 6 的数对，因此最多执行 1 次操作。
```

提示：

- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^9
- 1 <= k <= 10^9

思路：

拿到这个题目，首先考虑如何找到和为 k 的数对。因为需要统计操作次数，所以需要一种数据结构来快速查找和记录数字的出现情况。选择使用 Map 数据结构，是因为它可以在平均 O (1) 的时间复杂度内进行查找、插入和更新操作，能够高效地处理数字出现次数的记录和查找互补数字的存在情况。

1. 首先创建一个 Map 数据结构来存储数组中每个数字出现的次数。
2. 遍历数组中的每个数字 num。
3. 计算其与 k 的差值 complement，检查 Map 中是否存在 complement 且其数量大于 0。如果是，说明找到了一个和为 k 的数对，操作数加 1，并将 complement 的数量减 1。
4. 如果没有找到 complement，将当前 num 存入 Map 中，如果已经存在则数量加 1。

时间复杂度：遍历数组的时间复杂度为 O(n)，Map 的操作平均时间复杂度为 O(1)，总的时间复杂度为 O(n)。
空间复杂度：O(n)，因为使用了 Map 来存储数字及其出现的次数。

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = new Map();
  let count = 0;
  for (const num of nums) {
    const complement = k - num;
    if (map.has(complement) && map.get(complement) > 0) {
      count++;
      map.set(complement, map.get(complement) - 1);
    } else {
      if (!map.has(num)) {
        map.set(num, 0);
      }
      map.set(num, map.get(num) + 1);
    }
  }
  return count;
};
```
