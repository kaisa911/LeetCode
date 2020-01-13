# 颜色分类

给定一个包含红色、白色和蓝色，一共  n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

**注意:**
不能使用代码库中的排序函数来解决这道题。

**示例:**

```js
输入: [2, 0, 2, 1, 1, 0];
输出: [0, 0, 1, 1, 2, 2];
```

**进阶：**

一个直观的解决方案是使用计数排序的两趟扫描算法。
首先，迭代计算出 0、1 和 2 元素的个数，然后按照 0、1、2 的排序，重写当前数组。
你能想出一个仅使用常数空间的一趟扫描算法吗？

**思路：**
思路就是三路快排，遍历一次，0 就往前换，2 就往后换，1 就不动了

**代码：**

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  const len = nums.length;
  let left = 0,
    right = len - 1,
    i = 0;
  while (i <= right) {
    if (nums[i] === 0) {
      //move to left
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
      i++;
    } else if (nums[i] === 2) {
      // move to right
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
    } else {
      i++;
    }
  }
  return nums;
};
```
