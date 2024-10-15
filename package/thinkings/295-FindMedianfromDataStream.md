# 数据流的中位数

中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

- 例如 arr = [2,3,4] 的中位数是 3 。
- 例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。

实现 MedianFinder 类:

- MedianFinder() 初始化 MedianFinder 对象。
- void addNum(int num) 将数据流中的整数 num 添加到数据结构中。
- double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10-5 以内的答案将被接受。

示例 1：

```javascript
输入
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
输出
[null, null, null, 1.5, null, 2.0]

解释
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
```

提示:

- -10^5 <= num <= 10^5
- 在调用 findMedian 之前，数据结构中至少有一个元素
- 最多 5 \* 10^4 次调用 addNum 和 findMedian

思路：

1. 初始化：创建两个数组，maxHeap 和 minHeap，分别用于存储较小一半和较大一半的数字。
2. 添加数字：将数字添加到最大堆（实际上是最小堆，因为我们存储的是负值），然后将其顶部元素（最小元素）移动到最小堆。
3. 保持平衡：确保两个堆的大小平衡，即较小一半的堆的大小至多比较大一半的堆的大小多一个。
4. 查找中位数：如果两个堆的大小相等，则中位数是两个堆顶元素的平均值；否则，中位数是较大堆的堆顶元素。

时间复杂度：addNum 操作的时间复杂度为 O(log n)，因为堆的插入和调整操作是 O(log n)。findMedian 操作的时间复杂度为 O(1)，因为只需要访问堆顶元素。
空间复杂度：O(n)，因为我们需要存储所有插入的数字。

```javascript
/**
 * initialize your data structure here.
 */
class MedianFinder {
  constructor() {
    this.maxHeap = []; // 用于存储较小一半的数字（实际上是最大堆）
    this.minHeap = []; // 用于存储较大一半的数字（实际上是最小堆）
  }

  addNum(num) {
    // 将数字添加到最大堆（较小一半）
    this.maxHeap.push(num);
    heapq.heapify(this.maxHeap);
    // 将最大堆的顶部（最小元素）移动到最小堆
    this.minHeap.push(heapq.heappop(this.maxHeap));
    heapq.heapify(this.minHeap);

    // 保持两个堆的平衡
    if (this.maxHeap.length > this.minHeap.length) {
      this.minHeap.push(heapq.heappop(this.maxHeap));
      heapq.heapify(this.minHeap);
    }
  }

  findMedian() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap[0] + this.minHeap[0]) / 2.0;
    } else {
      return this.minHeap[0];
    }
  }
}

// JavaScript 实现的简单最小堆和最大堆功能
const heapq = {
  heappush: function (heap, value) {
    heap.push(value);
    this._siftdown(heap, 0, heap.length - 1);
  },
  heappop: function (heap) {
    const last = heap.length - 1;
    const top = heap[0];
    if (last > 0) {
      heap[0] = heap[last];
      this._siftup(heap, 0, last);
    }
    heap.length = last;
    return top;
  },
  _siftdown: function (heap, start, pos) {
    let end = heap.length;
    let newitem = heap[pos];
    while (pos > start) {
      const parent = (pos - 1) >> 1;
      const parentitem = heap[parent];
      if (parentitem < newitem) {
        heap[pos] = parentitem;
        pos = parent;
      } else {
        break;
      }
    }
    heap[pos] = newitem;
  },
  _siftup: function (heap, start, pos) {
    let end = heap.length;
    let newitem = heap[pos];
    const startpos = pos;
    while (pos < end) {
      const leftchild = (pos << 1) + 1;
      const rightchild = (pos << 1) + 2;
      let child;
      let rightitem;
      let leftitem = heap[leftchild];
      if (rightchild < end) {
        rightitem = heap[rightchild];
        if (rightitem < leftitem) {
          child = rightchild;
          childitem = rightitem;
        } else {
          child = leftchild;
          childitem = leftitem;
        }
      } else {
        child = leftchild;
        childitem = leftitem;
      }
      if (newitem < childitem) {
        heap[pos] = childitem;
        pos = child;
      } else {
        break;
      }
    }
    heap[pos] = newitem;
    heap[startpos] = heap[pos];
    this._siftdown(heap, start, pos);
  },
  heapify: function (heap) {
    const len = heap.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      this._siftdown(heap, i, len - 1);
    }
  },
};
```
