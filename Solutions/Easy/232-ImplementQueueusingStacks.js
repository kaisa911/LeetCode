/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  const pushStack = [];
  const popStack = [];
  this.pushStack = pushStack;
  this.popStack = popStack;
  this.size = 0;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const { pushStack } = this;
  pushStack.push(x);
  this.size++;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const { pushStack, popStack } = this;
  if (popStack.length === 0)
    while (pushStack.length !== 0) popStack.push(pushStack.pop());
  this.size--;
  return popStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  const { pushStack, popStack } = this;
  if (popStack.length === 0)
    while (pushStack.length !== 0) popStack.push(pushStack.pop());
  return popStack[popStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.size === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
