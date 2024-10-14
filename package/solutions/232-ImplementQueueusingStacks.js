/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stackNewestOnTop = [];
  this.stackOldestOnTop = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackNewestOnTop.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stackOldestOnTop.length === 0) {
    while (this.stackNewestOnTop.length !== 0) {
      this.stackOldestOnTop.push(this.stackNewestOnTop.pop());
    }
  }
  return this.stackOldestOnTop.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stackOldestOnTop.length === 0) {
    while (this.stackNewestOnTop.length !== 0) {
      this.stackOldestOnTop.push(this.stackNewestOnTop.pop());
    }
  }
  return this.stackOldestOnTop[this.stackOldestOnTop.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stackNewestOnTop.length === 0 && this.stackOldestOnTop.length === 0;
};
