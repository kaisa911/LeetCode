var StockSpanner = function () {
  this.stack = [];
  this.stack.push([-1, Number.MAX_VALUE]);
  this.idx = -1;
};

StockSpanner.prototype.next = function (price) {
  this.idx++;
  while (price >= this.stack[this.stack.length - 1][1]) {
    this.stack.pop();
  }
  let ret = this.idx - this.stack[this.stack.length - 1][0];
  this.stack.push([this.idx, price]);
  return ret;
};
