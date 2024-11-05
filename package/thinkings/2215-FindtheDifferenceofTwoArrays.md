# 找出两数组的不同

给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，请你返回一个长度为 2 的列表 answer ，其中：

answer[0] 是 nums1 中所有 不 存在于 nums2 中的 不同 整数组成的列表。
answer[1] 是 nums2 中所有 不 存在于 nums1 中的 不同 整数组成的列表。
注意：列表中的整数可以按 任意 顺序返回。

示例 1：

```js
输入：nums1 = [1,2,3], nums2 = [2,4,6]
输出：[[1,3],[4,6]]
解释：
对于 nums1 ，nums1[1] = 2 出现在 nums2 中下标 0 处，然而 nums1[0] = 1 和 nums1[2] = 3 没有出现在 nums2 中。因此，answer[0] = [1,3]。
对于 nums2 ，nums2[0] = 2 出现在 nums1 中下标 1 处，然而 nums2[1] = 4 和 nums2[2] = 6 没有出现在 nums2 中。因此，answer[1] = [4,6]。
```

示例 2：

```js
输入：nums1 = [1,2,3,3], nums2 = [1,1,2,2]
输出：[[3],[]]
解释：
对于 nums1 ，nums1[2] 和 nums1[3] 没有出现在 nums2 中。由于 nums1[2] == nums1[3] ，二者的值只需要在 answer[0] 中出现一次，故 answer[0] = [3]。
nums2 中的每个整数都在 nums1 中出现，因此，answer[1] = [] 。
```

提示：

- 1 <= nums1.length, nums2.length <= 1000
- -1000 <= nums1[i], nums2[i] <= 1000

思路：

过滤出不同的元素，在两个数组中可能有重复元素，我们需要对结果进行去重。使用 Set 可以轻松去除重复元素。
题目没有要求返回的结果必须保持顺序，因此我们可以按任意顺序返回结果。

1. 将 nums2 转换为 Set，以便快速查找。
2. 遍历 nums1，将不存在于 nums2 中的元素添加到结果列表。
3. 同样地，遍历 nums2，将不存在于 nums1 中的元素添加到结果列表。
4. 使用 Set 去重，返回最终结果。

时间复杂度： O(n + m)
空间复杂度： O(n + m)。

```javascript
function findDifference(nums1, nums2) {
  const set2 = new Set(nums2); // 将 nums2 转换为 Set，便于快速查找
  const set1 = new Set(nums1); // 将 nums1 转换为 Set

  // 筛选出 nums1 中不在 nums2 中的元素
  const diff1 = [...new Set(nums1.filter((item) => !set2.has(item)))];

  // 筛选出 nums2 中不在 nums1 中的元素
  const diff2 = [...new Set(nums2.filter((item) => !set1.has(item)))];

  return [diff1, diff2];
}
```
