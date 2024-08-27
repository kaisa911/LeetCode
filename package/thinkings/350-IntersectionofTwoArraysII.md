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

使用哈希表（在 JavaScript 中，可以使用对象或者 Map 来实现哈希表的功能）来找出两个数组 nums1 和 nums2 中的共同元素。这种方法的时间复杂度可以降低到 O(n + m)，其中 n 和 m 分别是两个数组的长度。以下是使用哈希表的算法步骤：

1. 创建哈希表：遍历数组 nums1，将每个元素作为键，出现次数作为值，存储到一个哈希表中。
2. 查找共同元素：遍历数组 nums2，对于 nums2 中的每个元素，检查它是否在哈希表中，以及哈希表中对应的值是否大于 0（即在 nums1 中出现过）。
3. 存储结果：如果 nums2 中的元素在哈希表中，并且哈希表中的值大于 0，那么这个元素是共同元素，将其添加到结果数组中，并将哈希表中该元素的值减 1。
4. 返回结果：遍历结束后，返回存储共同元素的数组。

算法的优点是不需要对数组进行排序，因此在最坏情况下避免了排序的 O(n log n) 时间复杂度。同时，由于使用了哈希表，查找和插入操作的平均时间复杂度是 O(1)，使得整个算法更加高效。空间复杂度也是 O(n + m)，因为需要存储两个数组的元素到哈希表和结果数组中。

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let result = [];

  // 填充哈希表
  for (let num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  // 查找共同元素
  for (let num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
};
```