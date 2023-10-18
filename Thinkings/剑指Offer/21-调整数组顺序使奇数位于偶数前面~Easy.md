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

就双指针，就左右两边同时往中间走，找到 left 是偶数切 right 是奇数的时候，交换一下位置就可以

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
