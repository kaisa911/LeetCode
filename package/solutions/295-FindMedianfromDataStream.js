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
