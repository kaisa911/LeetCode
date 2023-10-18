# 旋转数组的最小数字

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在**重复**元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组  [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。

注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2],...,a[n-2]] 。

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

具体实现思路如下：

1. 首先，定义两个指针left和right，分别指向数组的开始和结束。
2. 然后，进入一个while循环，在循环中：
  - 计算中间位置pivot。
  - 如果中间位置的元素小于右侧位置的元素，那么最小元素一定在左半部分，所以将right移动到pivot。
  - 如果中间位置的元素大于右侧位置的元素，那么最小元素一定在右半部分，所以将left移动到pivot + 1。
  - 如果中间位置的元素等于右侧位置的元素，那么无法确定最小元素在哪一侧，但可以缩小搜索范围，所以将right减1。
  - 最后，当left和right相遇时，返回该位置的元素，这就是数组中的最小元素。

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
