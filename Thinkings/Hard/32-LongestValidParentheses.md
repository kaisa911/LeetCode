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
