# 最小栈

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素 val 推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。

示例 1:

```js
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

提示：

- -2^31 <= val <= 2^31 - 1
- pop、top 和 getMin 操作总是在 非空栈 上调用
- push, pop, top, and getMin 最多被调用 3 \* 10^4 次

思路：
1. 使用辅助栈：创建一个辅助栈来存储每个元素入栈时的当前最小值。这样，辅助栈的栈顶始终是主栈中所有元素的最小值。
2. 入栈操作：当一个元素入栈时，将其与辅助栈的栈顶元素比较，将较小的值压入辅助栈。
3. 出栈操作：当一个元素出栈时，辅助栈也相应地出栈。
4. 获取最小值：辅助栈的栈顶元素即为当前最小值，可以直接返回。

时间复杂度：
push 操作：O(1)，只需要常量时间进行入栈操作。
pop 操作：O(1)，只需要常量时间进行出栈操作。
top 操作：O(1)，直接返回主栈的栈顶元素。
getMin 操作：O(1)，直接返回辅助栈的栈顶元素。
空间复杂度：O(n)，其中 n 是主栈中元素的数量。辅助栈在最坏的情况下会存储与主栈相同数量的元素。


```js
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
```
