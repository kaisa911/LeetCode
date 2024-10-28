# 两个数组的交集

给定两个数组 nums1 和 nums2 ，返回 它们的交集。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

示例 1：

```javascript
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

示例 2：

```javascript
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

提示：

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

思路：
这道题的解题思路是利用集合（Set）的特性来求解。因为集合中的元素是唯一的，通过将两个数组分别转换为集合，可以去除重复元素，然后遍历其中一个集合，判断其元素是否在另一个集合中，将共同的元素添加到结果数组中。这种方法简单直接，充分利用了集合数据结构的优势。

1. 首先创建两个集合 s1 和 s2，分别由数组 nums1 和 nums2 转换而来，这一步去除了各自数组中的重复元素。
2. 然后初始化一个空数组 result 用于存储交集结果。
3. 遍历集合 s1 中的元素：
   - 对于每个元素 num，检查它是否在集合 s2 中。
   - 如果在，就将其添加到 result 数组中。
4. 最后返回 result 数组，即为两个数组的交集。

时间复杂度：将数组转换为集合的操作时间复杂度为 O (n) 和 O (m)，其中 n 是 nums1 的长度，m 是 nums2 的长度。遍历集合 s1 的操作时间复杂度为 O (n)（n 为 s1 集合大小，这里 n <= nums1.length），检查元素是否在 s2 中的操作时间复杂度为 O (1)（集合的查找操作时间复杂度为常数）。总的时间复杂度为 O (n + m)。
空间复杂度：创建了两个集合和一个结果数组，空间复杂度为 O (n + m)，其中 n 是 nums1 的长度，m 是 nums2 的长度。

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const result = [];
  for (let num of s1.values()) {
    if (s2.has(num)) {
      result.push(num);
    }
  }
  return result;
};
```
