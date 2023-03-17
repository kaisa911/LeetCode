# 用两个栈实现队列

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead  操作返回 -1 )

示例 1：

输入：

```js
["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
[[],[3],[],[],[]]
输出：[null,null,3,-1,-1]
```

示例 2：

输入：

```js
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```

提示：

- 1 <= values <= 10000
- 最多会对  appendTail、deleteHead 进行  10000  次调用

**思路：**

两个栈实现一个队列，就是两个FILO，实现FIFO

- 那就是一个栈用来存数据（栈1），append的数据都放在栈1里
- 另一个栈（栈2）用来在出队列的时候，把栈1的数据pop放进去，然后再栈2pop就会拿到先进入的数据了。

这样就实现了一个队列了

```ts
class CQueue {
  protected stack1: number[] = [];
  protected stack2: number[] = [];

  appendTail(value: number): void {
    this.stack1.push(value);
  }

  deleteHead(): number {
    if (!this.stack2.length) {
      if (!this.stack1.length) return -1;

      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
      
      return this.stack2.pop();
    } else {
      return this.stack2.pop();
    }
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```
