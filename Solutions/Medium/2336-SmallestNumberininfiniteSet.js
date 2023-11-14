var SmallestInfiniteSet = function () {
  this.minPriorityQueue = new MinPriorityQueue(); // 构造
  this.set = new Set();
  for (let i = 1; i <= 1000; i++) {
    this.minPriorityQueue.enqueue(i);
    this.set.add(i);
  }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  const element = this.minPriorityQueue.dequeue().element;
  this.set.delete(element);
  return element;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (!this.set.has(num)) {
    this.minPriorityQueue.enqueue(num);
    this.set.add(num);
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
