# 用队列实现栈

请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

实现 MyStack 类：

- void push(int x) 将元素 x 压入栈顶。
- int pop() 移除并返回栈顶元素。
- int top() 返回栈顶元素。
- boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。

注意：

你只能使用队列的标准操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。

示例：

```javascript
输入：
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 2, 2, false]

解释：
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False
```

提示：

- 1 <= x <= 9
- 最多调用 100 次 push、pop、top 和 empty
- 每次调用 pop 和 top 都保证栈不为空

进阶：你能否仅用一个队列来实现栈。

思路：
使用一个队列实现栈的功能，我们可以采用如下策略：

1. push(x)：将要添加的元素放到队列末尾。
2. pop()：将除了最后一个元素之外的所有元素重新入队，然后返回最后一个元素。
3. top()：与 pop() 类似，但不移除最后一个元素。
4. empty()：检查队列是否为空。

时间复杂度：
push(x)：O(n)，其中 n 是队列的长度。
pop()：O(1)，原因同上。
top()：O(1)，原因同上。
empty()：O(1)。
空间复杂度：O(n)，最坏情况下，两个队列中存储了所有元素。

```javascript
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  if (!this.array || Object.prototype.toString.call(this.array) !== '[object Array]') {
    this.array = [];
  }
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.array.unshift(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.array.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.array[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.array.length > 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```
