# 数组中的最长山脉

把符合下列属性的数组 arr 称为 山脉数组 ：

arr.length >= 3
存在下标 i（0 < i < arr.length - 1），满足
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
给出一个整数数组 arr，返回最长山脉子数组的长度。如果不存在山脉子数组，返回 0 。

示例 1：

```javascript
输入：arr = [2,1,4,7,3,2,5]
输出：5
解释：最长的山脉子数组是 [1,4,7,3,2]，长度为 5。
```

示例 2：

```javascript
输入：arr = [2,2,2]
输出：0
解释：不存在山脉子数组。
```

提示：

- 1 <= arr.length <= 10^4
- 0 <= arr[i] <= 10^4

进阶：

你可以仅用一趟扫描解决此问题吗？
你可以用 O(1) 空间解决此问题吗？

思路：

拿到这个题目，首先需要明确要找到山脉数组，即先递增再递减的子数组。可以通过遍历数组，对于每个可能是山顶的元素（即满足其后一个元素小于它），分别向左右扩展，找到山脉的左右边界，计算长度并更新最长山脉的长度。选择这种方法是因为它直观地从每个可能的山顶元素开始扩展，逐步探索整个数组，能够准确找到所有可能的山脉子数组。

答案思路分析

1. 首先初始化指针 `left` 指向数组的起始位置。
2. 进入循环，只要 `left` 后面至少还有两个元素，就进行处理。
3. 令 `right = left + 1` ，如果 `arr[left] < arr[left + 1]` ，说明可能是山脉的上升部分。
4. 然后通过一个内层循环找到上升部分的终点 `right` 。
5. 如果 `right` 后面还有元素且 `arr[right] > arr[right + 1]` ，说明进入了下降部分。
6. 再通过一个内层循环找到下降部分的终点 `right` ，计算山脉长度并更新最大值。
7. 如果不满足形成山脉的条件，就将 `left` 移动到 `right` 位置，继续寻找下一个可能的山脉。

时间复杂度：O(n)，只需要对数组进行一次遍历。
空间复杂度：O(1)，只使用了固定的几个变量，空间复杂度为常数级别。

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let n = arr.length;
  let left = 0;
  let res = 0;

  while (left + 2 < n) {
    let right = left + 1;
    if (arr[left] < arr[left + 1]) {
      while (right + 1 < n && arr[right] < arr[right + 1]) {
        right++;
      }
      if (right + 1 < n && arr[right] > arr[right + 1]) {
        while (right + 1 < n && arr[right] > arr[right + 1]) {
          right++;
        }
        res = Math.max(res, right - left + 1);
      } else {
        right++;
      }
    }
    left = right;
  }
  return res;
};
```
