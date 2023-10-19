# 和为 S 的两个数字

输入一个数组和一个数字 s，在数组中查找两个数，使得它们的和正好是 s。

如果有多对数字的和等于 s，输出任意一对即可。

你可以认为每组输入中都至少含有一组满足条件的输出。

数据范围

- 数组长度 [1,1002]。

样例

```js
输入：[1,2,3,4] , sum=7

输出：[3,4]
```

```ts
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  let temp = 0;
  while (i < j) {
    temp = nums[i] + nums[j];
    if (temp > target) {
      j--;
    } else if (temp < target) {
      i++;
    } else {
      break;
    }
  }
  return [nums[i], nums[j]];
};
```
