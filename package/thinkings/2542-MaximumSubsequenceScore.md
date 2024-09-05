# 最大子序列的分数

给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，两者长度都是 n ，再给你一个正整数 k 。你必须从 nums1 中选一个长度为 k 的 子序列 对应的下标。

对于选择的下标 i0 ，i1 ，...， ik - 1 ，你的 分数 定义如下：

nums1 中下标对应元素求和，乘以 nums2 中下标对应元素的 最小值 。
用公式表示： (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) \* min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]) 。
请你返回 最大 可能的分数。

一个数组的 子序列 下标是集合 {0, 1, ..., n-1} 中删除若干元素得到的剩余集合，也可以不删除任何元素。

示例 1：

```js
输入：nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
输出：12
解释：
四个可能的子序列分数为：

- 选择下标 0 ，1 和 2 ，得到分数 (1+3+3) * min(2,1,3) = 7 。
- 选择下标 0 ，1 和 3 ，得到分数 (1+3+2) * min(2,1,4) = 6 。
- 选择下标 0 ，2 和 3 ，得到分数 (1+3+2) * min(2,3,4) = 12 。
- 选择下标 1 ，2 和 3 ，得到分数 (3+3+2) * min(1,3,4) = 8 。
所以最大分数为 12 。
```

示例 2：

```js
输入：nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
输出：30
解释：
选择下标 2 最优：nums1[2] *nums2[2] = 3* 10 = 30 是最大可能分数。
```

提示：

- n == nums1.length == nums2.length
- 1 <= n <= 10^5
- 0 <= nums1[i], nums2[j] <= 10^5
- 1 <= k <= n

思路：

1. 排序：首先，我们可以将 nums1 和 nums2 按照 nums2 的值进行排序，这样我们可以保证在遍历时，最小的值总是优先处理。
2. 使用双指针：通过双指针方法，一个指针从左到右，另一个指针从右到左，选择长度为 k 的子序列。
3. 滑动窗口：使用滑动窗口来找到可能的最大分数。窗口内的元素数量始终为 k，我们可以通过移动窗口来尝试所有可能的子序列。
4. 计算分数：对于每个子序列，计算分数，即窗口内 nums1 的元素和乘以窗口内 nums2 的最小元素。
5. 更新最大分数：在遍历过程中，更新找到的最大分数。

时间复杂度：O(n log k)，其中 n 是数组的长度，k 是子序列的长度。这是因为我们需要对每个子序列的 k 个元素进行排序。
空间复杂度：O(k)，用于存储最小堆中的元素。

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  //子序列不必连续，所以先排序,这样最小的数一定是当前遍历的数字
  let n = nums1.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([nums1[i], nums2[i]]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  // 用sum记录数组的和，维护最大的k个数字
  let sum = 0;
  let heap = new MinPriorityQueue();
  for (let i = 0; i < k; i++) {
    heap.enqueue(arr[i][0]);
    sum += arr[i][0];
  }
  let ans = sum * arr[k - 1][1];
  for (let i = k; i < n; i++) {
    if (heap.front().element < arr[i][0]) {
      //可以得到更大值，出堆
      sum = sum - heap.dequeue().element + arr[i][0];
      heap.enqueue(arr[i][0]);
      ans = Math.max(ans, sum * arr[i][1]);
    }
  }
  return ans;
};
```
