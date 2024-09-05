# 雇佣 K 位工人的总代价

给你一个下标从 0 开始的整数数组 costs ，其中 costs[i] 是雇佣第 i 位工人的代价。

同时给你两个整数 k 和 candidates 。我们想根据以下规则恰好雇佣 k 位工人：

总共进行 k 轮雇佣，且每一轮恰好雇佣一位工人。
在每一轮雇佣中，从最前面 candidates 和最后面 candidates 人中选出代价最小的一位工人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。
比方说，costs = [3,2,7,7,1,2] 且 candidates = 2 ，第一轮雇佣中，我们选择第 4 位工人，因为他的代价最小 [3,2,7,7,1,2] 。
第二轮雇佣，我们选择第 1 位工人，因为他们的代价与第 4 位工人一样都是最小代价，而且下标更小，[3,2,7,7,2] 。注意每一轮雇佣后，剩余工人的下标可能会发生变化。
如果剩余员工数目不足 candidates 人，那么下一轮雇佣他们中代价最小的一人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。
一位工人只能被选择一次。
返回雇佣恰好 k 位工人的总代价。

示例 1：

```js
输入：costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
输出：11
解释：我们总共雇佣 3 位工人。总代价一开始为 0 。

- 第一轮雇佣，我们从 [17,12,10,2,7,2,11,20,8] 中选择。最小代价是 2 ，有两位工人，我们选择下标更小的一位工人，即第 3 位工人。总代价是 0 + 2 = 2 。
- 第二轮雇佣，我们从 [17,12,10,7,2,11,20,8] 中选择。最小代价是 2 ，下标为 4 ，总代价是 2 + 2 = 4 。
- 第三轮雇佣，我们从 [17,12,10,7,11,20,8] 中选择，最小代价是 7 ，下标为 3 ，总代价是 4 + 7 = 11 。注意下标为 3 的工人同时在最前面和最后面 4 位工人中。
总雇佣代价是 11 。
```

示例 2：

```js
输入：costs = [1,2,4,1], k = 3, candidates = 3
输出：4
解释：我们总共雇佣 3 位工人。总代价一开始为 0 。

- 第一轮雇佣，我们从 [1,2,4,1] 中选择。最小代价为 1 ，有两位工人，我们选择下标更小的一位工人，即第 0 位工人，总代价是 0 + 1 = 1 。注意，下标为 1 和 2 的工人同时在最前面和最后面 3 位工人中。
- 第二轮雇佣，我们从 [2,4,1] 中选择。最小代价为 1 ，下标为 2 ，总代价是 1 + 1 = 2 。
- 第三轮雇佣，少于 3 位工人，我们从剩余工人 [2,4] 中选择。最小代价是 2 ，下标为 0 。总代价为 2 + 2 = 4 。
总雇佣代价是 4 。
```

提示：

- 1 <= costs.length <= 10^5
- 1 <= costs[i] <= 10^5
- 1 <= k, candidates <= costs.length

思路：

1. 初始化两个最小堆：使用两个最小堆 left 和 right 分别存储数组 costs 前面的 candidates 位工人和后面的 candidates 位工人的最小代价。
2. 填充堆：从数组 costs 的两端开始，分别向两个堆中添加工人的代价，直到每个堆中都有 candidates 个工人的代价。
3. 选择工人：进行 k 轮选择，每轮选择时，比较两个堆中的最小代价工人，选择代价最小的工人，并将其代价累加到总代价 ans 中。同时，从对应的堆中移除被选择的工人。
4. 处理堆大小不足：如果在某一轮选择中，某个堆的大小小于 candidates，则继续从另一端添加工人直到堆中有 candidates 个工人的代价。
5. 返回总代价：完成 k 轮选择后，返回计算得到的总代价。

时间复杂度：O(n \* log(c))，其中 n 是数组 costs 的长度，c 是 candidates 的值。这是因为每次从数组 costs 中添加元素到堆中的时间复杂度为 O(log(c))。
空间复杂度：O(c)，用于存储两个最小堆中的元素。

```javascript
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
```
