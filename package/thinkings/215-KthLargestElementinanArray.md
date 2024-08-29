# 数组中的第 K 个最大元素

给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

示例 1:

```js
输入: [3, 2, 1, 5, 6, 4], (k = 2);
输出: 5;
```

示例 2:

```js
输入: [3, 2, 3, 1, 2, 4, 5, 5, 6], (k = 4);
输出: 4;
```

提示：

- 1 <= k <= nums.length <= 105
- -104 <= nums[i] <= 104

思路

1. 分区操作：partition 函数通过枢纽元（pivot）将数组分为两部分，左边放置大于枢纽元的元素，右边放置小于枢纽元的元素。
2. 随机选择枢纽元：quickSelect 函数中，随机选择一个枢纽元，并通过 partition 函数进行分区。
3. 递归选择：根据枢纽元的位置与第 k 个最大元素的索引进行比较：
   - 如果枢纽元的位置正好是第 k−1 个索引，返回枢纽元的值。
   - 如果第 k−1 个索引在枢纽元的左边，递归地在左侧子数组中进行快速选择。
   - 如果第 k−1 个索引在枢纽元的右边，递归地在右侧子数组中进行快速选择。
4. 返回结果：最终返回找到的第 k 个最大元素。

时间复杂度：平均情况下为 O(n)，最坏情况下为 O(n^2)。最坏情况发生在每次分区操作都不能很好地将数组分成两部分时。
空间复杂度：O(logn)，这是递归栈的深度，在最坏情况下可以达到 O(n)，但平均情况下是 O(logn)。

```javascript
/**
 *  @param {number[]} nums
 *  @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function partition(left, right, pivotIndex) {
    const pivotValue = nums[pivotIndex];
    swap(nums, pivotIndex, right); // 将枢纽元放到右侧
    let storeIndex = left;
    for (let i = left; i < right; i++) {
      if (nums[i] > pivotValue) {
        swap(nums, storeIndex, i);
        storeIndex++;
      }
    }
    swap(nums, storeIndex, right); // 将枢纽元放到其最终位置
    return storeIndex;
  }

  function quickSelect(left, right) {
    if (left === right) return nums[left];
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivotNewIndex = partition(left, right, pivotIndex);
    if (k - 1 === pivotNewIndex) return nums[pivotNewIndex];
    else if (k - 1 < pivotNewIndex) return quickSelect(left, pivotNewIndex - 1);
    else return quickSelect(pivotNewIndex + 1, right);
  }

  return quickSelect(0, nums.length - 1);
};

function swap(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
```
