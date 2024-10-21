var NestedIterator = function (nestedList) {
  this.flattenList = [];
  this.index = 0;
  this.flatten(nestedList);
}

NestedIterator.prototype.flatten = function (list) {
  for (let item of list) {
      if (item.isInteger()) {
          this.flattenList.push(item.getInteger());
      } else {
          this.flatten(item.getList());
      }
  }
}

NestedIterator.prototype.hasNext = function () {
  return this.index < this.flattenList.length;
}

NestedIterator.prototype.next = function () {
  return this.flattenList[this.index++];
}