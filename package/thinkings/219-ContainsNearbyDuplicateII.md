# 存在重复元素 II

给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

示例 1：

```javascript
输入：nums = [1,2,3,1], k = 3
输出：true
```

示例 2：

```javascript
输入：nums = [1,0,1,1], k = 1
输出：true
```

示例 3：

```javascript
输入：nums = [1,2,3,1,2,3], k = 2
输出：false
```

提示：

- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- 0 <= k <= 10^5

思路：

1. 初始化哈希表：创建一个 Map 对象来存储每个元素最近一次出现的位置。
2. 遍历数组：遍历数组 nums 中的每个元素。
3. 检查重复元素：对于每个元素，检查它是否已经在 Map 中出现过。如果出现过，并且当前位置与之前位置的差值小于等于 k，则返回 true。
4. 更新位置：如果当前元素在 Map 中出现过，但是差值大于 k 或者之前没有出现过，就更新该元素在 Map 中的位置为当前位置。
5. 返回结果：如果遍历完成后没有找到满足条件的重复元素，则返回 false。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。每个元素最多被访问一次。
空间复杂度：O(n)，在最坏的情况下，每个元素都可能被存储在 Map 中。

```javascript
let containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    let pos = map.get(nums[i]);
    if (pos !== undefined && i - pos <= k) {
      return true;
    }
    map.set(nums[i], i);
  }

  return false;
};
```
