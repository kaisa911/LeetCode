# 旋转数组的最小数字

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在   重复   元素值的数组  numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次
旋转。请返回旋转数组的最小元素。例如，数组  [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为
1。

注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2],
...,a[n-2]] 。

示例 1：

```js
输入：numbers = [3,4,5,1,2]
输出：1
```

示例 2：

```js
输入：numbers = [2,2,2,0,1]
输出：0
```

提示：

- n == numbers.length
- 1 <= n <= 5000
- -5000 <= numbers[i] <= 5000
- numbers 原来是一个升序排序的数组，并进行了 1 至 n 次旋转

**思路：**

在这个题里，数组中的最后一个元素 x

- 最小值右侧的元素，它们的值一定都小于等于 x；
- 最小值左侧的元素，它们的值一定都大于等于 x。
- 因此，我们可以根据这一条性质，通过二分查找的方法找出最小值。

```ts
var minArray = function (numbers): number {
  let left: number = 0;
  let right: number = numbers.length - 1;
  while (left < right) {
    const pivot: number = left + Math.floor((right - left) / 2);
    if (numbers[pivot] < numbers[right]) {
      right = pivot;
    } else if (numbers[pivot] > numbers[right]) {
      left = pivot + 1;
    } else {
      right -= 1;
    }
  }
  return numbers[left];
};
```
