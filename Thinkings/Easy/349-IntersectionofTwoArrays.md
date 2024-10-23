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
