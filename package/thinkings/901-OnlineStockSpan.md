# 股票价格跨度

设计一个算法收集某些股票的每日报价，并返回该股票当日价格的 跨度 。

当日股票价格的 跨度 被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

例如，如果未来 7 天股票的价格是 [100,80,60,70,60,75,85]，那么股票跨度将是 [1,1,1,2,1,4,6] 。

实现 StockSpanner 类：

StockSpanner() 初始化类对象。
int next(int price) 给出今天的股价 price ，返回该股票当日价格的 跨度 。

示例：

```js
输入：
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
输出：
[null, 1, 1, 1, 2, 1, 4, 6]

解释：
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // 返回 1
stockSpanner.next(80);  // 返回 1
stockSpanner.next(60);  // 返回 1
stockSpanner.next(70);  // 返回 2
stockSpanner.next(60);  // 返回 1
stockSpanner.next(75);  // 返回 4 ，因为截至今天的最后 4 个股价 (包括今天的股价 75) 都小于或等于今天的股价。
stockSpanner.next(85);  // 返回 6
```

提示：

- 1 <= price <= 10^5
- 最多调用 next 方法 10^4 次

思路：

拿到这个题目，我们首先需要考虑如何有效地记录和比较股票的历史价格，以确定当前价格的跨度。使用一个栈来存储之前的价格和对应的索引是一个不错的选择。当新的价格进来时，通过弹出栈顶不符合条件（即价格小于当前价格）的元素，来找到小于或等于当前价格的最大连续日数。选择栈这种数据结构，是因为其先进后出的特性能够方便地处理这种回溯和比较的操作。

1. 初始化时，在栈中先放入一个初始元素 [-1, Number.MAX_VALUE]，以便后续处理第一个价格时有基准。
2. 每次调用 next 方法时，先增加索引。
3. 然后通过一个循环，不断弹出栈顶价格小于当前价格的元素，直到栈顶价格大于等于当前价格，或者栈为空。
4. 计算当前价格的跨度为当前索引减去栈顶元素的索引。
5. 将当前价格和索引压入栈中，最后返回跨度。

时间复杂度：平均情况下为 O(1)，在最坏情况下（例如价格严格单调递增），可能会达到 O(n)，其中 n 是调用 next 方法的次数。
空间复杂度：O(n)，用于存储栈中的元素。

```js
var StockSpanner = function () {
  this.stack = [];
  this.stack.push([-1, Number.MAX_VALUE]);
  this.idx = -1;
};

StockSpanner.prototype.next = function (price) {
  this.idx++;
  while (price >= this.stack[this.stack.length - 1][1]) {
    this.stack.pop();
  }
  let ret = this.idx - this.stack[this.stack.length - 1][0];
  this.stack.push([this.idx, price]);
  return ret;
};
```
