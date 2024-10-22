# 扁平化嵌套列表迭代器

给你一个嵌套的整数列表 nestedList 。每个元素要么是一个整数，要么是一个列表；该列表的元素也可能是整数或者是其他列表。请你实现一个迭代器将其扁平化，使之能够遍历这个列表中的所有整数。

实现扁平迭代器类 NestedIterator ：

- NestedIterator(List<NestedInteger> nestedList) 用嵌套列表 nestedList 初始化迭代器。
- int next() 返回嵌套列表的下一个整数。
- boolean hasNext() 如果仍然存在待迭代的整数，返回 true ；否则，返回 false 。
  你的代码将会用下述伪代码检测：

```js
initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res
```

如果 res 与预期的扁平化列表匹配，那么你的代码将会被判为正确。

示例 1：

```javascript
输入：nestedList = [[1,1],2,[1,1]]
输出：[1,1,2,1,1]
解释：通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
```

示例 2：

```javascript
输入：nestedList = [1,[4,[6]]]
输出：[1,4,6]
解释：通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。
```

提示：

- 1 <= nestedList.length <= 500
- 嵌套列表中的整数值在范围 [-10^6, 10^6] 内

思路：
这道题的解题思路可以通过使用栈来实现。上述代码采用栈来处理嵌套列表，通过不断地将列表展开并压入栈中，在获取下一个元素时从栈顶取出元素。选择栈这种数据结构是因为它符合后进先出的特性，能够很好地处理嵌套结构的展开操作，每次处理最内层的列表。

1. 在构造函数中，创建一个空数组 flattenList 用于存储扁平化后的列表，并调用 flatten 方法对传入的嵌套列表进行扁平化处理，同时初始化索引 index 为 0。
2. 在 flatten 方法中：
   - 遍历传入的列表 list，对于每个元素 item，如果它是整数，就将其添加到 flattenList 中。
   - 如果它是列表，就递归调用 flatten 方法对其内部列表进行扁平化。
3. 在 hasNext 方法中，判断索引 index 是否小于扁平化列表 flattenList 的长度，若小于则表示还有元素可以返回，返回 true。
4. 在 next 方法中，返回扁平化列表中索引 index 处的元素，并将 index 加 1。

时间复杂度：在构造函数中对列表进行扁平化处理，时间复杂度为 O (n)，其中 n 是嵌套列表中的元素总数。hasNext 和 next 方法的时间复杂度为 O (1)。
空间复杂度：使用一个数组来存储扁平化后的列表，空间复杂度为 O (n)。

```javascript
var NestedIterator = function (nestedList) {
  this.flattenList = [];
  this.index = 0;
  this.flatten(nestedList);
};

NestedIterator.prototype.flatten = function (list) {
  for (let item of list) {
    if (item.isInteger()) {
      this.flattenList.push(item.getInteger());
    } else {
      this.flatten(item.getList());
    }
  }
};

NestedIterator.prototype.hasNext = function () {
  return this.index < this.flattenList.length;
};

NestedIterator.prototype.next = function () {
  return this.flattenList[this.index++];
};
```
