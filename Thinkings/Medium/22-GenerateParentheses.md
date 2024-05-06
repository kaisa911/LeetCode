# 括号生成

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

**示例：**

```
输入：n = 3
输出：[
"((()))",
"(()())",
"(())()",
"()(())",
"()()()"
]
```

**思路：**
运用回溯思想：

在这个函数中，我们定义了一个内部的 backtrack 函数，它使用三个参数：

- left：表示已经添加的左括号的数量。
- right：表示已经添加的右括号的数量。
- current：表示当前生成的括号字符串。

backtrack 函数首先检查当前字符串的长度是否已经达到 2 * n，如果是，说明所有括号都已添加完毕，将其添加到结果列表 result 中。

然后，函数检查是否还有剩余的左括号可以添加（即 left 小于 n）。如果可以添加左括号，递归调用 backtrack 函数，并更新 left 和 current。

接下来，如果当前右括号的数量小于左括号的数量，说明添加的左括号需要匹配，递归调用 backtrack 函数，并更新 right 和 current。

最后，generateParenthesis 函数返回包含所有有效括号组合的列表 result。

这种方法的时间复杂度是 O(4^n)，因为每次递归调用都可能生成两个新的字符串（添加左括号或右括号），空间复杂度是 O(n)，因为递归调用栈的深度最多为 2 * n。

```js
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  function backtrack(left, right, current) {
    // 如果当前字符串长度达到2*n，说明所有括号都已添加完毕
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // 如果还有剩余的左括号可以添加
    if (left < n) {
      backtrack(left + 1, right, current + '(');
    }

    // 如果添加了左括号，那么必须添加一个右括号来匹配
    if (right < left) {
      backtrack(left, right + 1, current + ')');
    }
  }

  let result = [];
  backtrack(0, 0, '');
  return result;
}
```
