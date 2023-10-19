# 滑动窗口的最大值

给定一个数组和滑动窗口的大小，请找出所有滑动窗口里的最大值。

例如，如果输入数组 [2,3,4,2,6,2,5,1] 及滑动窗口的大小 3，那么一共存在 6 个滑动窗口，它们的最大值分别为 [4,4,6,6,6,5]。

注意：

- 数据保证 k 大于 0，且 k 小于等于数组长度。

数据范围

- 数组长度 [1,1000]。

样例

```js
输入：[2, 3, 4, 2, 6, 2, 5, 1] , k=3

输出: [4, 4, 6, 6, 6, 5]
```

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const dq: number[] = [];
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (dq.length && dq[0] == i - k) dq.shift(); // 队头不在窗口范围内

    while (dq.length && nums[i] > nums[dq[dq.length - 1]]) {
      //待入队元素比队尾元素大
      dq.pop();
    }

    dq.push(i);
    if (i >= k - 1) res.push(nums[dq[0]]);
  }

  return res;
};
```
