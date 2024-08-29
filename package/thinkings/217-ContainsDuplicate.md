# 存在重复元素

给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

示例 1：

```js
输入：nums = [1,2,3,1]
输出：true
```

示例 2：

```js
输入：nums = [1,2,3,4]
输出：false
```

示例 3：

```js
输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true
```

提示：

- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9

思路

1. 初始化哈希表：创建一个空的哈希表 map，用于存储遍历过程中遇到的数字。
2. 遍历数组：遍历输入数组 nums 中的每个元素。
3. 检查和记录：
   - 对于当前遍历到的元素 nums[i]，检查它是否已经在哈希表 map 中。
   - 如果不在哈希表中，将其添加到哈希表中，map[nums[i]]设为 true。
   - 如果已经在哈希表中，则表示找到了一个重复的元素，返回 true。
4. 返回结果：如果遍历完整个数组都没有找到重复元素，则返回 false。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。算法需要遍历数组中的每个元素一次。
空间复杂度：O(n)，在最坏的情况下，如果所有元素都不同，则哈希表将存储所有元素。

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};
```
