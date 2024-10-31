# 数据流中的第 K 大元素

设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

请实现 KthLargest 类：

KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。

示例 1：

```javascript
输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

输出：[null, 4, 5, 5, 8, 8]

解释：

KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // 返回 4
kthLargest.add(5); // 返回 5
kthLargest.add(10); // 返回 5
kthLargest.add(9); // 返回 8
kthLargest.add(4); // 返回 8
```

示例 2：

```javascript
输入：
["KthLargest", "add", "add", "add", "add"]
[[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]

输出：[null, 7, 7, 7, 8]

解释：

KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
kthLargest.add(2); // 返回 7
kthLargest.add(10); // 返回 7
kthLargest.add(9); // 返回 7
kthLargest.add(9); // 返回 8
```

提示：

- 0 <= nums.length <= 10^4
- 1 <= k <= nums.length + 1
- -10^4 <= nums[i] <= 10^4
- -10^4 <= val <= 10^4
- 最多调用 add 方法 10^4 次

思路：

对于这个问题，我们需要设计一个类来处理数据流并找到第 k 大元素。可以考虑使用一个数据结构来存储数据流中的元素，并保持其有序性，这样就能方便地找到第 k 大元素。选择这种方法的原因是它直接对应题目要求，通过有序的数据结构可以直观地获取第 k 大元素。

1. 在 KthLargest 类的构造函数中：
   - 首先初始化 k 值和一个最小堆 minHeap。
   - 然后遍历 nums 数组，将每个元素插入到最小堆中。如果插入后堆的大小大于 k，就从堆中取出最小元素（因为要保持堆中只有 k 个最大元素）。
2. 在 add 方法中：
   - 将新元素 val 插入到最小堆中。
   - 如果堆的大小大于 k，就从堆中取出最小元素。
   - 最后返回堆顶元素，即第 k 大元素。
3. 在 MinHeap 类中：
   - size 方法返回堆的大小。
   - insert 方法将元素插入堆中，并通过 bubbleUp 操作来维护堆的性质。
   - extractMin 方法取出堆中的最小元素，并通过 bubbleDown 操作来维护堆的性质。
   - peek 方法返回堆顶元素。
   - bubbleUp 方法用于在插入元素时将元素上移到合适位置以保持堆的性质。
   - bubbleDown 方法用于在取出堆顶元素后将新的堆顶元素下移到合适位置以保持堆的性质。

时间复杂度：

- 对于构造函数，插入 n 个元素到最小堆中，每次插入操作的时间复杂度为 O (log n)，总共 O (n log n)。
- 对于 add 方法，插入和删除操作的时间复杂度都是 O (log k)，因为堆中最多有 k 个元素。
  空间复杂度：需要存储 k 个元素在最小堆中，空间复杂度为 O (k)。

```javascript
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinHeap();
    for (let num of nums) {
      this.minHeap.insert(num);
      if (this.minHeap.size() > k) {
        this.minHeap.extractMin();
      }
    }
  }

  add(val) {
    this.minHeap.insert(val);
    if (this.minHeap.size() > this.k) {
      this.minHeap.extractMin();
    }
    return this.minHeap.peek();
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  peek() {
    return this.heap[0];
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      this.bubbleDown(smallest);
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```
