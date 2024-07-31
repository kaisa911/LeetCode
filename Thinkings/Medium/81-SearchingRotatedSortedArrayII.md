# 搜索旋转排序数组 II

已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

你必须尽可能减少整个操作步骤。

示例 1：

输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true
示例 2：

输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false

提示：

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
题目数据保证 nums 在预先未知的某个下标上进行了旋转
-104 <= target <= 104

思路：
这个问题可以通过修改二分搜索算法来解决。以下是算法的基本步骤：

1. 初始化：设置两个指针 i 和 len，分别指向数组的开始和结束。
2. 二分搜索循环：使用 while 循环进行二分搜索，直到 i 和 len 相遇。
3. 避免无限循环：如果中间元素 nums[m] 与 nums[i] 相同，将 i 向右移动一位，以避免无限循环。
4. 判断搜索区间：比较 nums[i]、nums[m] 和 target 的值，根据以下条件确定下一步搜索的区间：
  - 如果 target 大于 nums[m]，并且 nums[i] 也大于 nums[m]，则 target 只能在 m + 1 到 len 之间。
  - 如果 target 小于 nums[m]，并且 nums[i] 小于 nums[m]，则 target 只能在 i 到 m - 1 之间。
5. 更新指针：根据上述判断，更新 i 或 len 的值。
6. 检查中间元素：如果中间元素 nums[m] 等于 target，则直接返回 true。
7. 循环结束检查：当循环结束时，检查 i 和 len 是否相遇，并且 nums[i] 是否等于 target。
8. 返回结果：如果找到 target，则返回 true；否则，返回 false。

时间复杂度：O(logn)，其中 n 是数组 nums 的长度。这是因为算法使用二分搜索，每轮迭代将搜索空间减半。
空间复杂度：O(1)，算法只使用了几个额外的变量。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let i = 0;
  let len = nums.length - 1;
  while (i < len) {
    const m = parseInt((i + len) / 2);
    const n = nums[m];
    if (target === n) {
      return true;
    }
    if (nums[i] === n) {
      i++;
      continue;
    }
    if ((nums[i] <= n) ^ (target > n) ^ (target < nums[i])) {
      len = m;
    } else {
      i = m + 1;
    }
  }
  return len === i && nums[i] === target;
};
```
