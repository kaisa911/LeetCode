# 最长有效括号

给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

示例 1：

```js
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
```

示例 2：

```js
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
```

示例 3：

```js
输入：s = ""
输出：0
```

提示：

- 0 <= s.length <= 3 \* 104
- s[i] 为 '(' 或 ')'

思路：
1. 函数定义：longestValidParentheses 函数接收一个字符串 s 作为参数。
2. 初始化变量：定义变量 res 初始化为 0，用于存储最长有效括号的长度；start 初始化为 0，用于记录当前无效序列的起始索引；stack 初始化为空数组，用于存储索引。
3. 遍历字符串：使用 for 循环遍历字符串 s。
4. 处理左括号：如果当前字符是左括号 '('，则将其索引推入 stack。
5. 处理右括号：
  - 如果当前字符是右括号 ')'，则有两种情况：
  - 如果 stack 为空，说明当前右括号无法匹配，更新 start 为当前索引加 1。
  - 如果 stack 不为空，弹出栈顶元素（即最近的左括号索引），此时有两种子情况：
  - 如果 stack 为空，则当前右括号与字符串开始处的左括号匹配，更新 res 为当前索引与 start 之差加 1。
  - 如果 stack 不为空，则当前右括号与栈顶元素的左括号匹配，更新 res 为当前索引与栈顶索引之差。
6. 返回结果：循环结束后，返回 res，即最长有效括号子串的长度。

使用了栈来处理括号的匹配问题，通过记录每个右括号是否能匹配到最近的左括号，从而找到最长的有效括号子串。

代码中的关键点：

- 使用栈来存储左括号的索引，便于后续匹配。
- 通过更新 start 变量来跳过无效的括号序列。
- 在每次右括号匹配成功后，根据栈的状态来更新最长有效括号的长度。

它的时间复杂度是 O(n)，其中 n 是字符串 s 的长度，因为每个字符只被遍历一次。空间复杂度是 O(n)，最坏情况下，栈可能需要存储所有字符的索引。

```js
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
  let res = 0,
    start = 0;
  let stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length === 0) {
        start = i + 1;
      } else {
        stack.pop();
        res = stack.length === 0 ? Math.max(res, i - start + 1) : Math.max(res, i - stack[stack.length - 1]);
      }
    }
  }
  return res;
};
```
