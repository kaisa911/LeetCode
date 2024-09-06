/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.mainStack = []; // 主栈存储所有元素
  this.minStack = [];  // 辅助栈存储每个元素入栈时的最小值
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.mainStack.push(x);
  // 如果辅助栈为空或者当前元素小于等于辅助栈的栈顶元素，则入栈
  if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(x);
  } else {
    // 否则，将辅助栈的栈顶元素复制一份入栈
    this.minStack.push(this.minStack[this.minStack.length - 1]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.mainStack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.mainStack[this.mainStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */