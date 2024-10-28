# 前 K 个高频元素

给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

示例 1:

```javascript
输入: (nums = [1, 1, 1, 2, 2, 3]), (k = 2);
输出: [1, 2];
```

示例 2:

```javascript
输入: (nums = [1]), (k = 1);
输出: [1];
```

提示：

- 1 <= nums.length <= 10^5
- k 的取值范围是 [1, 数组中不相同的元素的个数]
- 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的

进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

思路：
这道题的解题思路是先统计每个元素出现的频率，然后利用桶排序来找出前 k 个高频元素。通过 Map 数据结构来记录元素及其频率，当元素数量小于等于 k 时，直接返回所有元素。当元素数量大于 k 时，使用桶排序，将元素按照频率分配到不同的桶中，再从后往前遍历桶，获取前 k 个高频元素。这种方法避免了使用复杂度较高的排序算法。

1. 首先使用 Map 来统计每个元素在 nums 中的出现频率。同时，通过 Set 将 nums 去重得到 arr。
2. 如果 Map 的大小小于等于 k，直接返回 Map 的所有键（即所有元素）。
3. 如果 Map 的大小大于 k，使用桶排序：
4. 创建一个数组 arr 来作为桶，根据元素的频率将元素分配到对应的桶中。
5. 从后往前遍历桶，将桶中的元素添加到结果数组 res 中，直到 res 的长度达到 k。

时间复杂度：遍历 nums 统计频率的时间复杂度为 O (n)，其中 n 是 nums 的长度。在桶排序中，假设元素的最大频率为 m，桶排序的时间复杂度为 O (m + n)。总的时间复杂度为 O (m + n)。
空间复杂度：使用了 Map 和桶数组来存储数据，空间复杂度为 O (n + m)。

```javascript
let topKFrequent = function (nums, k) {
  let map = new Map(),
    arr = [...new Set(nums)];
  nums.map((num) => {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  });

  // 如果元素数量小于等于 k
  if (map.size <= k) {
    return [...map.keys()];
  }

  return bucketSort(map, k);
};

// 桶排序
let bucketSort = (map, k) => {
  let arr = [],
    res = [];
  map.forEach((value, key) => {
    // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
    if (!arr[value]) {
      arr[value] = [key];
    } else {
      arr[value].push(key);
    }
  });
  // 倒序遍历获取出现频率最大的前k个数
  for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i]) {
      res.push(...arr[i]);
    }
  }
  return res;
};
```

进阶：

可以用堆排序，创建一个大小为 K 的 miniHeap，遍历 Map，将 Map 中的元素加入到 miniHeap 中，如果 miniHeap 的大小大于 K，则将堆顶元素弹出，最后 miniHeap 中的元素就是前 K 个高频元素。

1. 同样先使用 Map 来统计每个元素的出现频率。
2. 创建一个大小为 k 的最小堆 MinHeap。
3. 遍历 Map 中的每个元素：
   - 如果堆的大小小于 k，将元素及其频率以数组形式（[num, freq]）压入堆中。
   - 如果堆的大小等于 k 且当前元素的频率大于堆顶元素的频率，先弹出堆顶元素，再将当前元素压入堆中。
4. 最后返回堆中所有元素的键（即对应的数字）。

时间复杂度：遍历 nums 统计频率的时间复杂度为 O (n)。在维护最小堆的过程中，每次插入或删除操作的时间复杂度为 O (log k)，总共进行 n 次比较，时间复杂度为 O (n log k)。总的时间复杂度为 O (n log k)。
空间复杂度：使用了 Map 和大小为 k 的最小堆来存储数据，空间复杂度为 O (n + k)。

```js
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  let heap = new MinHeap(k);
  for (let [num, freq] of map) {
    if (heap.size < k) {
      heap.push([num, freq]);
    } else if (freq > heap.top()[1]) {
      heap.pop();
      heap.push([num, freq]);
    }
  }
  return heap.arr.map((item) => item[0]);
};

class MinHeap {
  constructor(k) {
    this.arr = [];
    this.size = 0;
    this.k = k;
  }
  push(val) {
    this.arr.push(val);
    this.size++;
    this.bubbleUp(this.size - 1);
  }
  pop() {
    if (this.size === 0) return null;
    let top = this.arr[0];
    this.arr[0] = this.arr[this.size - 1];
    this.arr.pop();
    this.size--;
    this.bubbleDown(0);
    return top;
  }
  top() {
    return this.arr[0];
  }
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[parentIndex][1] > this.arr[index][1]) {
        [this.arr[parentIndex], this.arr[index]] = [this.arr[index], this.arr[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  bubbleDown(index) {
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;
      if (leftChildIndex < this.size && this.arr[leftChildIndex][1] < this.arr[smallest][1]) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < this.size && this.arr[rightChildIndex][1] < this.arr[smallest][1]) {
        smallest = rightChildIndex;
      }
      if (smallest !== index) {
        [this.arr[smallest], this.arr[index]] = [this.arr[index], this.arr[smallest]];
        index = smallest;
      } else {
        break;
      }
    }
  }
}
```
