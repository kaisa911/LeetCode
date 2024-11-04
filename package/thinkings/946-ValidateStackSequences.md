# 验证栈序列

给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。

示例 1：

```js
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

示例 2：

```js
输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
```

提示：

- 1 <= pushed.length <= 1000
- 0 <= pushed[i] <= 1000
- pushed 的所有元素 互不相同
- popped.length == pushed.length
- popped 是 pushed 的一个排列

思路：

对于这道验证栈序列的题目，关键在于准确模拟栈的入栈和出栈操作，并与给定的出栈序列进行对比。初步思路是通过一个数据结构来模拟栈，在遍历入栈序列时进行入栈操作，并在合适的时机进行出栈操作，同时与出栈序列进行匹配。选择这种模拟栈操作的方法是因为它直接对应了题目中对栈操作的描述，能够清晰直观地解决问题。

1. 初始化一个整数 stack 为 0 来模拟栈的指针。
2. 遍历 pushed 序列，将元素放入模拟栈的位置，并增加栈指针 stack。
3. 每次放入元素后，检查栈顶元素（通过 stack - 1 索引）是否与 popped 序列当前位置的元素相等，如果相等 4. 则减小栈指针 stack 并移动 popped 序列的指针 index。
4. 遍历结束后，通过判断 stack 是否为 0 来确定两个序列是否匹配。

时间复杂度：O (n)，因为需要遍历 pushed 和 popped 序列各一次。
空间复杂度：O (1)，只使用了固定的几个变量，空间消耗不随输入序列的长度而变化。

```js
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = 0;
  for (let i = 0, index = 0; i < pushed.length; i++) {
    pushed[stack++] = pushed[i];
    while (stack > 0 && pushed[stack - 1] == popped[index]) {
      stack--;
      index++;
    }
  }
  return stack == 0;
};
```
