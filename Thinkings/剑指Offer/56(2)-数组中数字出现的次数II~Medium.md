# 数组中数字出现的次数 II

在一个数组中除了一个数字只出现一次之外，其他数字都出现了三次。

请找出那个只出现一次的数字。

你可以假设满足条件的数字一定存在。

思考题：

- 如果要求只使用 O(n)的时间和额外 O(1)的空间，该怎么做呢？

数据范围

- 数组长度 [1,1500]。
- 数组内元素取值范围 [0,1000]。

示例

```js
输入：[1,1,1,2,2,2,3,4,4,4]

输出：3
```

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let a = 0,
    b = 0;
  let i;
  for (i = 0; i < nums.length; ++i) {
    a = (a ^ nums[i]) & ~b;
    b = (b ^ nums[i]) & ~a;
  }
  return a;
};
```
