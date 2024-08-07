# 搜索旋转排序数组

整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

```js
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```

示例 2：

```js
输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
```

示例 3：

```js
输入：nums = [1], target = 0
输出：-1
```

提示：

- 1 <= nums.length <= 5000
- -104 <= nums[i] <= 104
- nums 中的每个值都 独一无二
- 题目数据保证 nums 在预先未知的某个下标上进行了旋转
- -104 <= target <= 104

思路：

1. 初始化：设置两个指针 left 和 right，分别指向数组的开始和结束。
2. 二分查找：在循环中，计算中间索引 mid。
3. 判断中间值：如果 nums[mid] 等于 target，则返回 mid。
4. 确定搜索区间：通过比较 nums[mid]、nums[left] 和 nums[right] 的值来确定 target 可能在数组的哪一部分。如果 nums[mid] 比 nums[right] 小，说明 nums[mid] 到 nums[right] 是有序的；否则，nums[left] 到 nums[mid] 是有序的。
5. 更新搜索区间：根据 target 与 nums[left]、nums[mid] 和 nums[right] 的关系，更新 left 或 right 指针，缩小搜索范围。
6. 循环结束：如果 left 大于 right，则表示 target 不在数组中，返回 -1。

算法的时间复杂度为 O(log n)，因为每次迭代都会将搜索区间减半。算法的空间复杂度为 O(1)，因为除了输入数组外，我们只使用了常数级别的额外空间。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  if (nums.length == 0) return -1;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && nums[right] >= target) left = mid + 1;
      else right = mid - 1;
    } else {
      if (nums[left] <= target && nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
  }
  return -1;
};
```
