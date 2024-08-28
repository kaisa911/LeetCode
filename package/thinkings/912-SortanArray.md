# 排序数组

给你一个整数数组 nums，请你将该数组升序排列。

示例 1：

```js
输入：nums = [5,2,3,1]
输出：[1,2,3,5]
```

示例 2：

```js
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
```

提示：

- 1 <= nums.length <= 5 \*104
- -5* 104 <= nums[i] <= 5 * 104

思路

1. 快速排序：sortArray 函数中，调用 quickSort 函数对整个数组进行快速排序。
2. 分区操作：sort 函数用于对数组的一个子区间进行分区操作，选择一个基准值 base，然后通过两个指针 low 和 high 的移动，将小于基准值的元素移到左边，大于基准值的元素移到右边。
3. 递归排序：quickSort 函数是一个递归函数，对分区后的左右两个子区间分别进行快速排序。
4. 返回结果：排序完成后，直接返回排序好的数组。

时间复杂度：平均情况下为 O(nlogn)，最坏情况下为 O(n^2)，其中 n 是数组的长度。最坏情况发生在每次分区操作都不能很好地将数组分成两部分，例如，当数组已经排序或所有元素相同时。
空间复杂度：O(logn)，这是因为递归栈的深度。在最坏情况下，递归深度可以达到 O(n)，但平均情况下是 O(logn)。

```js
var sortArray = function (nums) {
  // 快速排序
  function quickSort(start, end, arr) {
    if (start < end) {
      let mid = sort(start, end, arr);
      // 注意，一定要是 start mid , mid+1 end 这种组合
      // 否则当首位最大的时候(mid返回0)，将会无限循环
      quickSort(start, mid, arr);
      quickSort(mid + 1, end, arr);
    }
    return arr;
  }

  function sort(start, end, arr) {
    // 取基准值
    let base = arr[start];

    let low = start;
    let high = end;

    while (low !== high) {
      // 从后往前，寻找比基准值小的值，赋给low位置(也就是取base值的位置)
      while (arr[high] >= base && high > low) {
        high--;
      }
      arr[low] = arr[high];
      // 从前往后，寻找比基准值大的值，赋给high位置
      while (arr[low] <= base && high > low) {
        low++;
      }
      arr[high] = arr[low];
    }
    arr[low] = base;
    return low;
  }
  return quickSort(0, nums.length - 1, nums);
};
```
