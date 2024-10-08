# 执行 K 次操作后的最大分数

给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。你的 起始分数 为 0 。

在一步 操作 中：

选出一个满足 0 <= i < nums.length 的下标 i ，
将你的 分数 增加 nums[i] ，并且
将 nums[i] 替换为 ceil(nums[i] / 3) 。
返回在 恰好 执行 k 次操作后，你可能获得的最大分数。

向上取整函数 ceil(val) 的结果是大于或等于 val 的最小整数。

示例 1：

```js
输入：nums = [10,10,10,10,10], k = 5
输出：50
解释：对数组中每个元素执行一次操作。最后分数是 10 + 10 + 10 + 10 + 10 = 50 。
```

示例 2：

```js
输入：nums = [1,10,3,3,3], k = 3
输出：17
解释：可以执行下述操作：
第 1 步操作：选中 i = 1 ，nums 变为 [1,4,3,3,3] 。分数增加 10 。
第 2 步操作：选中 i = 1 ，nums 变为 [1,2,3,3,3] 。分数增加 4 。
第 3 步操作：选中 i = 2 ，nums 变为 [1,2,1,3,3] 。分数增加 3 。
最后分数是 10 + 4 + 3 = 17 。
```

提示：

- 1 <= nums.length, k <= 10^5
- 1 <= nums[i] <= 10^9

思路：

1. 初始化：使用一个最大堆（优先队列）来存储数组 nums 中的所有元素。
2. 执行操作：进行 k 次操作，每次操作都从堆中取出当前最大的数，将其加到得分 res 中，然后将该数替换为 ceil(nums[i] / 3) 后再次加入堆中。
3. 返回结果：在执行完 k 次操作后，返回得到的得分 res。

时间复杂度：每次执行操作的时间复杂度为 O(log n)，其中 n 是堆中的元素数量。总共执行 k 次操作，因此总时间复杂度为 O(k log n)。
空间复杂度：O(n)，用于存储堆中的所有元素。

```javascript
var maxKelements = function (nums, k) {
  // leetcode 内置的优先队列
  q = new MaxPriorityQueue();
  let res = 0;
  for (const num of nums) {
    q.enqueue(num);
  }
  for (let i = 0; i < k; i++) {
    const x = q.dequeue().element;
    res += x;
    q.enqueue(Math.ceil(x / 3));
  }
  return res;
};
```
