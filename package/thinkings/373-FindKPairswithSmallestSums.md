# 查找和最小的 K 对数字

给定两个以 非递减顺序排列 的整数数组 nums1 和 nums2 , 以及一个整数 k 。

定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

请找到和最小的 k 个数对 (u1,v1), (u2,v2) ... (uk,vk) 。

示例 1:

```javascript
输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
输出: [1,2],[1,4],[1,6]
解释: 返回序列中的前 3 对数：
     [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
```

示例 2:

```javascript
输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
输出: [1,1],[1,1]
解释: 返回序列中的前 2 对数：
     [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
```

提示:

- 1 <= nums1.length, nums2.length <= 10^5
- -10^9 <= nums1[i], nums2[i] <= 10^9
- nums1 和 nums2 均为 升序排列
- 1 <= k <= 10^4
- k <= nums1.length \* nums2.length

思路：

对于这个问题，我们的目标是从两个有序数组中找出和最小的 k 个数对。一种可行的思路是利用优先队列（这里使用最小优先队列）来辅助解决问题。因为我们需要不断地找到当前和最小的数对，优先队列可以很好地帮助我们维护这种状态。通过将 nums1 中的每个元素与 nums2 中的第一个元素组成的数对放入优先队列，然后每次取出和最小的数对，再尝试将对应 nums1 元素与 nums2 中的下一个元素组成的数对放入队列（如果满足条件），这样可以逐步找到和最小的 k 个数对。这种方法能够避免对所有可能的数对进行完全排序，减少不必要的计算。

1. 首先创建一个最小优先队列，定义比较函数为两个数对元素之和的差值。这样可以保证每次从队列中取出的数对是当前队列中和最小的。
2. 将 nums1 中的每个元素与 nums2 中的第一个元素组成的数对放入优先队列。
3. 然后在循环中，只要结果数组长度小于 k 且优先队列不为空，就取出队首元素（和最小的数对），并尝试将对应 nums1 元素与 nums2 中的下一个元素组成的数对放入队列（如果满足条件，即判断队首元素和当前要放入的数对元素之和的大小关系）。

时间复杂度：
- 初始化优先队列时，将 nums1.length 个数对放入队列，时间复杂度为 O(num1.length)。
在循环中，每次取出和放入操作在优先队列中的时间复杂度为O(log(num1.length))，最多执行 k 次，所以这部分时间复杂度为O(k*log(num1.length))。
总体时间复杂度为O(log(num1.length)+k*log(num1.length))。
空间复杂度：
优先队列中最多存储 nums1.length 个数对，结果数组最多存储 k 个数对，所以空间复杂度为。

```javascript
var kSmallestPairs = function (nums1, nums2, k) {
  const res = [];
  const pq = new MinPriorityQueue({
    compare: (a, b) => nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]),
  });
  for (let i = 0; i < nums1.length; i++) pq.enqueue([i, 0]);
  while (res.length < k && pq.size()) {
    let [i, j] = pq.dequeue();
    for (; res.length < k && j < nums2.length; j++) {
      // 队头的数对和更小
      const [i1, j1] = pq.front() || [];
      if (pq.size() && nums1[i1] + nums2[j1] < nums1[i] + nums2[j]) {
        pq.enqueue([i, j]);
        break;
      }
      // 队头的数对和相等或更大
      res.push([nums1[i], nums2[j]]);
    }
  }
  return res;
};
```
