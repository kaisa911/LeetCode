# 基本计算器 II

给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

你可以假设给定的表达式总是有效的。所有中间结果将在 [-2^31, 2^31 - 1] 的范围内。

注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

示例 1：

```javascript
输入：s = "3+2*2"
输出：7
```

示例 2：

```javascript
输入：s = " 3/2 "
输出：1
```

示例 3：

```javascript
输入：s = " 3+5 / 2 "
输出：5
```

提示：

- 1 <= s.length <= 3 \*10^5
- s 由整数和算符 ('+', '-', '\*', '/') 组成，中间由一些空格隔开
- s 表示一个 有效表达式
- 表达式中的所有整数都是非负整数，且在范围 [0, 2^31 - 1] 内
- 题目数据保证答案是一个 32-bit 整数

思路：

1. 遍历字符串：从头到尾遍历表达式字符串 s。
2. 构建数字：当遇到数字时，将其构建成完整的数值。
3. 处理运算符：当遇到运算符时，根据前一个运算符和当前的数值进行计算，然后将结果压入栈中。
4. 处理优先级：乘法和除法优先级高于加法和减法。在遇到乘法或除法时，先从栈中弹出一个元素进行计算；在遇到加法或减法时，直接将数值压入栈中。
5. 计算结果：遍历完成后，从栈中依次弹出所有元素并求和，得到最终结果。

时间复杂度：O(n)，其中 n 是表达式字符串 s 的长度。每个字符最多被遍历一次。
空间复杂度：O(n)，在最坏的情况下，所有字符都可能是数字，需要将它们全部压入栈中。

```javascript
var calculate = function (s) {
  s = s.trim();
  const stack = new Array();
  let preSign = '+';
  let num = 0;
  const n = s.length;
  for (let i = 0; i < n; ++i) {
    if (!isNaN(Number(s[i])) && s[i] !== ' ') {
      num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
    }
    if (isNaN(Number(s[i])) || i === n - 1) {
      switch (preSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push((stack.pop() / num) | 0);
      }
      preSign = s[i];
      num = 0;
    }
  }
  let ans = 0;
  while (stack.length) {
    ans += stack.pop();
  }
  return ans;
};
```
