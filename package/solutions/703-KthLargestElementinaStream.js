/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  //排序后,小顶堆; 先变成堆形态
  this.heap = new Heap();
  this.k = k;

  for (var i = 0; i < nums.length; i++) {
    if (this.heap.length < k) {
      this.heap.push(nums[i]);
    } else if (this.heap.peek() < nums[i]) {
      this.heap.pop();
      this.heap.push(nums[i]);
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.heap.length < this.k) {
    this.heap.push(val);
  } else if (this.heap.peek() < val) {
    this.heap.pop();
    this.heap.push(val);
  }
  return this.heap.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class Heap extends Array {
  //继承自Array
  //创建一个数量为k的小根堆
  constructor(compare = (a, b) => a - b, initialValues) {
    super();
    this.compare = compare;
  }

  swap(i, j) {
    var t = this[i];
    this[i] = this[j];
    this[j] = t;
  } //转换过程1

  heapUp(idx) {
    var pIdx = (idx - 1) >> 1;
    if (idx > 0 && this.compare(this[idx], this[pIdx]) < 0) {
      this.swap(idx, pIdx);
      this.heapUp(pIdx);
    }
  }

  heapDown(idx) {
    if (idx < this.length) {
      var max = idx;
      var l = idx * 2 + 1;
      var r = l + 1;

      if (l < this.length && this.compare(this[l], this[max]) < 0) {
        max = l;
      }
      if (r < this.length && this.compare(this[r], this[max]) < 0) {
        max = r;
      }
      if (idx !== max) {
        this.swap(idx, max);
        this.heapDown(max);
      }
    }
  } //转换过程

  //转换二叉堆
  peek() {
    return this[0];
  }

  push(val) {
    super.push(val);
    this.heapUp(this.length - 1);
  }

  pop() {
    var result = this[0];
    var last = super.pop();
    if (this.length > 0) {
      this[0] = last;
      this.heapDown(0);
    }
    return result;
  }
}

// 第二种方法
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.arr = [];
  for (var i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  var sign = true;
  if (!this.arr.length) {
    this.arr.push(val);
  } else {
    var i = 0;
    while (i < this.arr.length) {
      if (val < this.arr[i]) {
        this.arr.splice(i, 0, val);
        sign = false;
        break;
      }
      i++;
    }
    if (sign) {
      this.arr.push(val);
    }
    if (this.arr.length > this.k) {
      this.arr.shift();
    }
  }

  return this.arr[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
