# 数组中重复的数字

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0 ～ n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3
```

限制：

- 2 <= n <= 100000

**思路：**

给出来了一个长度为n的数组，元素都是 0～n-1的值，要判断重复的，我们可以使用 hash 表的方式来处理它，

创建一个 hash 表，用它来记录每个元素的值和索引。key是每个元素的值，value是该元素的索引。
遍历整个数组，判断，如果hash[nums[i]] 不存在，就给赋值，如果hash[nums[i]] 存在，那就返回当前的这个元素就可以了

时间复杂度：O(n)
空间复杂度：O(n)

```ts
type Hash = {
  [num: string]: number;
};
function findRepeatNumber(nums: number[]): number {
  const hash: Hash = {};
  let res: number = 0;
  for (let i: number = 0, len = nums.length; i < len; ++i) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = i;
    } else {
      res = nums[i];
      break;
    }
  }
  return res;
}
```
