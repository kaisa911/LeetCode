# 调整数组顺序使奇数位于偶数前面

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

示例：

```js
输入：nums = [1,2,3,4]
输出：[1,3,2,4]
注：[3,1,2,4] 也是正确的答案之一。
```

提示：

- 0 <= nums.length <= 50000
- 0 <= nums[i] <= 10000

**思路：**

通过使用两个指针（left 和 right）从数组的两端向中间移动来实现。

1. 初始化两个指针 left 和 right，分别指向数组的开始和结束位置。
2. 当 left 小于 right 时，执行以下操作：
    - 如果 left 指向的数字是奇数（即 nums[left] & 1 的结果为真），则将 left 向右移动一位。
    - 如果 right 指向的数字是偶数（即 nums[right] & 1 的结果为假），则将 right 向左移动一位。
    - 当找到一个偶数在奇数前面时（即 left 指向偶数，right 指向奇数），交换这两个数字的位置。
3. 返回重新排列后的数组。


```ts
function exchange(nums: number[]): number[] {
  let left: number = 0,
    right: number = nums.length - 1;
  while (left < right) {
    while (nums[left] & 1 && left < right) {
      left += 1;
    }
    while (!(nums[right] & 1) && left < right) {
      right -= 1;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
}
```
