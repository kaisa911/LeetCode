# 两个数组的交集 II

给定两个数组，编写一个函数来计算它们的交集。

**示例 1:**

```js
输入: (nums1 = [1, 2, 2, 1]), (nums2 = [2, 2]);
输出: [2, 2];
```

**示例 2:**

```js
输入: (nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4]);
输出: [4, 9];
```

**说明：**

- 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
- 我们可以不考虑输出结果的顺序。
  **进阶:**

```js
- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
- 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
```

**思路：**

排序两个数组，然后两个数组同时遍历，如果有相等的，就都加 1，否则谁的值小，谁加 1

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let len1 = nums1.length;
  let len2 = nums2.length;
  let i = 0;
  let j = 0;
  let arr = [];
  while (i < len1 && j < len2) {
    if (nums1[i] == nums2[j]) {
      arr.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return arr;
};
```
