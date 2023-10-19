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
