# 最近的请求次数

写一个  RecentCounter  类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

- RecentCounter() 初始化计数器，请求数为 0 。
- int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。

保证 每次对 ping 的调用都使用比之前更大的 t 值。

**示例 1：**

````js
输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
```

**提示：**

- 1 <= t <= 109
- 保证每次对 ping 调用所使用的 t 值都 严格递增
- 至多调用 ping 方法 104 次
````

**思路：**

拿到这个题目，首先明确要实现一个类`RecentCounter`，其核心功能是记录不同时间的请求，并能根据给定的时间`t`计算过去 3000 毫秒内的请求数。选择使用队列来存储请求时间是因为队列先进先出的特性适合维护这种有序的时间序列，且由于输入的时间值是严格递增的，从队首到队尾时间值单调递增，方便通过不断弹出队首早于特定时间的元素来计算特定时间范围内的请求数。

1. 首先，在`RecentCounter`的构造函数中初始化一个空队列`this.val`用于存储请求时间。
2. 当调用`ping`方法时，将当前时间`t`入队。
3. 然后通过一个`while`循环，不断检查队首元素是否早于`t - 3000`，如果是则弹出队首元素，这样保证队列中剩下的元素对应的时间都在`[t - 3000, t]`范围内。
4. 最后返回队列的长度，即为过去 3000 毫秒内的请求数。

时间复杂度：每次`ping`操作，入队和出队操作的次数最多与队列长度相等。在最坏情况下，可能需要遍历整个队列来删除早于`t - 3000`的元素，所以时间复杂度为 O(n)，其中 n 是队列中的元素个数。但由于每次输入的`t`严格递增，平均情况下时间复杂度会低于 O(n)。
空间复杂度：使用的额外空间就是存储请求时间的队列，空间复杂度为 O(n)，n 为请求的次数。

```js
var RecentCounter = function () {
  this.val = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.val.push(t);
  while (this.val[0] < t - 3000) {
    this.val.shift();
  }
  return this.val.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```
