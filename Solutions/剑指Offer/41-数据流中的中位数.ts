var MedianFinder = function () {
  this.stack = [];
};
MedianFinder.prototype.addNum = function (num) {
  let { stack } = this;
  if (stack.length === 0) return stack.push(num);
  let left = 0,
    right = stack.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (stack[mid] > num) {
      // 中间值大于插入值，插入值应该在中间值的左侧
      right = mid - 1;
    } else if (stack[mid] < num) {
      // 中间值小于插入值，插入值应该在中间值的右侧
      left = mid + 1;
    } else {
      // 中间值等于插入值，直接插入，跳出循环
      return stack.splice(mid, 0, num);
    }
  }
  stack.splice(right + 1, 0, num);
};
MedianFinder.prototype.findMedian = function () {
  let { stack } = this,
    len = stack.length;
  if (len === 0) return 0;
  if (len & 1) return stack[len >> 1];
  else return (stack[(len >> 1) - 1] + stack[len >> 1]) / 2;
};
