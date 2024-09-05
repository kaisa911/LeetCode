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
