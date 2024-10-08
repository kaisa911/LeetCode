# 存在重复元素 III

给你一个整数数组 nums 和两个整数 indexDiff 和 valueDiff 。

找出满足下述条件的下标对 (i, j)：

- i != j,
- abs(i - j) <= indexDiff
- abs(nums[i] - nums[j]) <= valueDiff
- 如果存在，返回 true ；否则，返回 false 。

示例 1：

```javascript
输入：nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
输出：true
解释：可以找出 (i, j) = (0, 3) 。
满足下述 3 个条件：
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
```

示例 2：

```javascript
输入：nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
输出：false
解释：尝试所有可能的下标对 (i, j) ，均无法满足这 3 个条件，因此返回 false 。
```

提示：

- 2 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- 1 <= indexDiff <= nums.length
- 0 <= valueDiff <= 10^9

思路：

1. 初始化哈希表：创建一个 Map 对象来存储特定范围内的元素。
2. 遍历数组：遍历数组 nums 中的每个元素。
3. 计算 ID：对于每个元素，计算其在特定范围内的 ID。这是通过将元素值除以 w（valueDiff + 1）并向下取整来实现的。这样做的目的是将值的范围划分为若干个桶，每个桶的宽度为 w。
4. 检查条件：对于每个元素，检查其 ID 以及相邻的两个 ID 是否已经存在于哈希表中。如果存在，并且差值满足条件，则返回 true。
5. 更新哈希表：将当前元素的 ID 存入哈希表。如果遍历的索引已经超过 k，则从哈希表中删除 k 个索引之前的元素的 ID。
6. 返回结果：如果遍历完成后没有找到满足条件的元素对，则返回 false。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。每个元素最多被访问一次。
空间复杂度：O(k)，在最坏的情况下，哈希表中存储了 k 个元素的 ID。

```javascript
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const n = nums.length;
  const mp = new Map();
  for (let i = 0; i < n; ++i) {
    const x = nums[i];
    const id = getID(x, t + 1);
    if (mp.has(id)) {
      return true;
    }
    if (mp.has(id - 1) && Math.abs(x - mp.get(id - 1)) <= t) {
      return true;
    }
    if (mp.has(id + 1) && Math.abs(x - mp.get(id + 1)) <= t) {
      return true;
    }
    mp.set(id, x);
    if (i >= k) {
      mp.delete(getID(nums[i - k], t + 1));
    }
  }
  return false;
};

const getID = (x, w) => {
  return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
};
```
