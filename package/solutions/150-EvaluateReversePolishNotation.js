var evalRPN = function (tokens) {
  const stack = []; // 使用数组模拟栈

  for (const token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      // 从栈中弹出两个数字进行运算
      const b = stack.pop();
      const a = stack.pop();

      if (token === '+') {
        stack.push(a + b);
      } else if (token === '-') {
        stack.push(a - b);
      } else if (token === '*') {
        stack.push(a * b);
      } else if (token === '/') {
        // 处理除法，向零截断
        stack.push(Math.floor(a / b));
      }
    } else {
      // 如果是数字，直接压入栈中
      stack.push(parseInt(token));
    }
  }

  // 表达式计算完成后，栈顶的数字即为结果
  return stack.pop();
};
