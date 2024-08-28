# 最短无序连续子数组

给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

请你找出符合题意的 最短 子数组，并输出它的长度。

示例 1：

```js
输入：nums = [2,6,4,8,10,9,15]
输出：5
解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```

示例 2：

```js
输入：nums = [1,2,3,4]
输出：0
```

示例 3：

```js
输入：nums = [1]
输出：0
```

提示：

- 1 <= nums.length <= 104
- -105 <= nums[i] <= 105

进阶：你可以设计一个时间复杂度为 O(n) 的解决方案吗？

思路
1. 初始化：定义两个变量maxn和minn，分别用于存储遍历过程中遇到的最大的元素和最小的元素，以及两个指针left和right，用于标记子数组的左右边界。
2. 从左到右遍历：遍历数组nums，使用maxn记录到当前位置为止的最大值，如果当前元素小于maxn，则更新right指针为当前位置。否则，更新maxn为当前元素的值。
3. 从右到左遍历：逆序遍历数组nums，使用minn记录到当前位置为止的最小值，如果当前元素大于minn，则更新left指针为当前位置。否则，更新minn为当前元素的值。
4. 确定子数组边界：通过right和left指针确定子数组的边界，如果right等于-1，表示数组已经是有序的，返回0。
5. 计算长度：计算子数组的长度，即right - left + 1。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。只需遍历数组两次。
空间复杂度：O(1)，只需要常数级别的额外空间。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const n = nums.length;
  let maxn = -Number.MAX_VALUE,
    right = -1;
  let minn = Number.MAX_VALUE,
    left = -1;
  for (let i = 0; i < n; i++) {
    if (maxn > nums[i]) {
      right = i;
    } else {
      maxn = nums[i];
    }
    if (minn < nums[n - i - 1]) {
      left = n - i - 1;
    } else {
      minn = nums[n - i - 1];
    }
  }
  return right === -1 ? 0 : right - left + 1;
};
```
