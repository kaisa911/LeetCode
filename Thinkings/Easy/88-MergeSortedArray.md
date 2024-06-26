# 合并两个有序数组

给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

示例 1：

```js
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
```

示例 2：

```js
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
```

示例 3：

```js
输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
```

提示：

- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -109 <= nums1[i], nums2[j] <= 109

进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？

思路：
函数的目标是将nums2合并到nums1的末尾，同时保持合并后的数组有序。它使用了反向双指针的方法来实现这一目标。下面是这个函数的逻辑分析：

1. 首先，初始化一个count变量，其值为m + n - 1，这是nums1数组中最后一个元素的索引，因为合并后的数组将包含m + n个元素。
2. 然后，通过--m和--n操作，将m和n分别指向nums1和nums2的最后一个有序元素的索引。
3. 使用while循环，条件是m >= 0 && n >= 0，这意味着只要两个数组中都还有元素可以比较，循环就会继续。在循环体内部：

  - 使用三元运算符nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]来决定应该将哪个元素放到nums1的末尾。如果nums1的当前元素大于nums2的当前元素，那么m指针向前移动（m--），并将nums1的元素赋值给nums1[count]；否则，n指针向前移动（n--），并将nums2的元素赋值给nums1[count]。
  - 无论哪种情况，count指针都会向前移动（count--），因为数组的末尾已经放置了一个元素。
4. 第一个while循环结束后，可能会有两种情况：
  - 如果nums1的所有元素都已经被合并，那么m将会小于0，而nums2可能还有剩余的元素。
  - 如果nums2的所有元素都已经被合并，那么n将会小于0，而nums1可能还有剩余的元素。
5. 为了处理剩余的元素，使用第二个while循环，条件是n >= 0。这个循环会将nums2中剩余的所有元素依次放到nums1的前面，直到nums2的所有元素都被合并。
6. 循环结束后，nums1将包含两个数组合并后的有序元素。

使用反向双指针的好处是，它允许我们在不改变原始数组的情况下，从后向前合并两个数组，这样可以避免在合并过程中对原始数组的前面部分造成干扰。这种方法的时间复杂度是O(m+n)，因为每个元素最多被访问一次。空间复杂度是O(1)，因为除了输入数组之外，我们不需要额外的存储空间。

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let count = m + n - 1;
  --m;
  --n;
  while (m >= 0 && n >= 0) nums1[count--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  while (n >= 0) nums1[count--] = nums2[n--];
};
```
