var totalCost = function (costs, k, candidates) {
  let left = new MinPriorityQueue();
  let right = new MinPriorityQueue();
  let i = 0;
  let j = costs.length - 1;
  let ans = 0;
  while (k--) {
    while (i <= j && left.size() < candidates) {
      left.enqueue(costs[i++]);
    }
    while (i <= j && right.size() < candidates) {
      right.enqueue(costs[j--]);
    }
    let min1 = left.size() > 0 ? left.front().element : Infinity;
    let min2 = right.size() > 0 ? right.front().element : Infinity;
    if (min1 <= min2) {
      ans += left.dequeue().element;
    } else {
      ans += right.dequeue().element;
    }
  }
  return ans;
};
