# 用栈实现队列

请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false
说明：

你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。

示例 1：

```javascript
输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]

解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

提示：

- 1 <= x <= 9
- 最多调用 100 次 push、pop、peek 和 empty
- 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）

进阶：

你能否实现每个操作均摊时间复杂度为 O(1) 的队列？换句话说，执行 n 个操作的总时间复杂度为 O(n) ，即使其中一个操作可能花费较长时间。

思路

1. 初始化两个栈：stackNewestOnTop 用于 push 操作，stackOldestOnTop 用于 pop 和 peek 操作。
2. push 操作：直接将元素推入 stackNewestOnTop。
3. pop 和 peek 操作：如果 stackOldestOnTop 为空，将 stackNewestOnTop 中的所有元素弹出并压入 stackOldestOnTop，这样可以保证 stackOldestOnTop 的顶部元素是队列的前端元素。然后执行 pop 或 peek 操作。
4. empty 操作：检查两个栈是否都为空。

时间复杂度：
push 操作：O(1)，因为直接将元素推入栈。
pop 和 peek 操作：均摊时间复杂度为 O(1)，因为虽然在某些情况下需要将所有元素从一个栈移动到另一个栈（O(n)操作），但这种情况并不频繁，平均下来每个操作的时间复杂度仍然是 O(1)。
empty 操作：O(1)，只需要检查两个栈是否为空。
空间复杂度：O(n)，最坏情况下，所有元素都存储在两个栈中，其中 n 是队列中的元素数量。

```javascript
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
```
