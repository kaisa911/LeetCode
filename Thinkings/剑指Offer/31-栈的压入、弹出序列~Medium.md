# 栈的压入、弹出序列

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

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

- 0 <= pushed.length == popped.length <= 1000
- 0 <= pushed[i], popped[i] < 1000
- pushed  是  popped  的排列。

**思路：**

这道题需要利用给定的两个数组 pushed 和 popped 的如下性质：

- 数组 pushed 中的元素互不相同；
- 数组 popped 和数组 pushed 的长度相同；
- 数组 popped 是数组 pushed 的一个排列。

根据上述性质，可以得到如下结论：

- 栈内不可能出现重复元素；
- 如果 pushed 和 popped 是有效的栈操作序列，则经过所有的入栈和出栈操作之后，每个元素各入栈和出栈一次，栈为空。

因此，可以遍历两个数组，模拟入栈和出栈操作，判断两个数组是否为有效的栈操作序列。

模拟入栈操作可以通过遍历数组 pushed 实现。由于只有栈顶的元素可以出栈，因此模拟出栈操作需要判断栈顶元素是否与 popped 的当前元素相同，如果相同则将栈顶元素出栈。由于元素互不相同，因此当栈顶元素与 popped的当前元素相同时必须将栈顶元素出栈，否则出栈顺序一定不等于 popped。

根据上述分析，验证栈序列的模拟做法如下：

- 遍历数组 pushed，将 pushed 的每个元素依次入栈；
- 每次将 pushed 的元素入栈之后，如果栈不为空且栈顶元素与 popped 的当前元素相同，则将栈顶元素出栈，同时遍历数组 popped，直到栈为空或栈顶元素与 popped 的当前元素不同。

遍历数组 pushed 结束之后，每个元素都按照数组 pushed 的顺序入栈一次。如果栈为空，则每个元素都按照数组popped 的顺序出栈，返回 true。如果栈不为空，则元素不能按照数组 popped 的顺序出栈，返回 false。

```ts
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  const n = pushed.length;
  for (let i = 0, j = 0; i < n; i++) {
    stack.push(pushed[i]);
    while (stack.length && stack[stack.length - 1] == popped[j]) {
      stack.pop();
      j++;
    }
  }
  return stack.length === 0;
};
```
