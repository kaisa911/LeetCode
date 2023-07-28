# 数据流中的中位数

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

- void addNum(int num) - 从数据流中添加一个整数到数据结构中。
- double findMedian() - 返回目前所有元素的中位数。

示例 1：

```js
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
```

示例 2：

```js
输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]
```

限制：

- 最多会对 addNum、findMedian 进行 50000 次调用。

**思路：**

用一个栈来存放数据流，MedianFinder 类里有一个私有变量stack，用来存放addNum的数据，并在findMedian的时候取出数据

addNum的时候，就根据二分法把数据插到对应的位置

findMedian的时候，就奇数返回mid值，偶数返回中间值的平均值

```ts
var MedianFinder = function () {
  this.stack = [];
};
MedianFinder.prototype.addNum = function (num) {
  let { stack } = this;
  if (stack.length === 0) return stack.push(num);
  let left = 0,
    right = stack.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (stack[mid] > num) {
      // 中间值大于插入值，插入值应该在中间值的左侧
      right = mid - 1;
    } else if (stack[mid] < num) {
      // 中间值小于插入值，插入值应该在中间值的右侧
      left = mid + 1;
    } else {
      // 中间值等于插入值，直接插入，跳出循环
      return stack.splice(mid, 0, num);
    }
  }
  stack.splice(right + 1, 0, num);
};
MedianFinder.prototype.findMedian = function () {
  let { stack } = this,
    len = stack.length;
  if (len === 0) return 0;
  if (len & 1) return stack[len >> 1];
  else return (stack[(len >> 1) - 1] + stack[len >> 1]) / 2;
};
```
