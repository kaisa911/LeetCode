# 数组中出现次数超过一半的数字

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例  1:

```js
输入: [1, 2, 3, 2, 2, 2, 5, 4, 2];
输出: 2;
```

限制：

- 1 <= 数组长度 <= 50000

**思路：**

第一个想法：排序，把中间元素返回就行

第二个想法：投票
*算法流程:*
- 初始化： 票数统计 count = 0 ， 众数 res；
- 循环： 遍历数组 nums 中的每个数字 num ；
  - 当 票数 count 等于 0 ，则假设当前数字 num 是众数；
  - 当 num = res 时，票数 votes 自增 1 ；当 num != res 时，票数 votes 自减 1 ；
- 返回值： 返回 res 即可；
 
```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort();
  return nums[nums.length / 2];
};
```

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0,
    res = 0;
  for (let i = 0, len = nums.length; i < len; ++i) {
    if (count == 0) {
      res = nums[i];
    }
    if (nums[i] != res) {
      count--;
    } else {
      count++;
    }
  }
  return res;
};
```
