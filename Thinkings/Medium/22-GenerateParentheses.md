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
声明一个回溯方法，退出条件是左边的值大于右边的值，或者左右两边的值都为 0；
然后判断，如果哪边大于 0 就走相应-1 继续回溯。

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  if (n === 0) return res;

  const backTrace = (left, right, current) => {
    console.log(left, right, current);
    if (left > right || left < 0 || right < 0) return;
    if (left === 0 && right === 0) {
      res.push(current);
      return;
    }
    backTrace(left - 1, right, current + '(');
    backTrace(left, right - 1, current + ')');
  };
  backTrace(n, n, '');
  return res;
};
```
