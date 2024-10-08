# 多数元素

给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：

```js
输入：nums = [3,2,3]
输出：3
```

示例 2：

```js
输入：nums = [2,2,1,1,1,2,2]
输出：2
```

提示：

- n == nums.length
- 1 <= n <= 5 \* 104
- -109 <= nums[i] <= 109

进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

思路：
使用了 Boyer-Moore 投票算法。

1. 初始化计数器和候选多数元素：设置计数器 count 为 0，候选多数元素 ret 为数组的第一个元素。
2. 遍历数组：从第二个元素开始遍历数组 nums。
3. 更新计数器：
   - 如果当前元素与候选多数元素不同，count 减 1。
   - 如果当前元素与候选多数元素相同，count 加 1。
   - 更新候选多数元素：当 count 为 0 时，将当前元素设置为新的候选多数元素。
4. 返回结果：遍历完成后，ret 即为多数元素。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。算法只遍历数组一次。
空间复杂度：O(1)，只需要常数级别的额外空间。

```js
const majorityElement = (nums) => {
  let count = 0,
    ret = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      ret = nums[i];
    }
    if (nums[i] != ret) {
      count--;
    } else {
      count++;
    }
  }
  return ret;
};
```
