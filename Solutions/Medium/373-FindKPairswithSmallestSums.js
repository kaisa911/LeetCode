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
