var evalRPN = function (tokens) {
  const n = tokens.length;
  const stack = new Array(Math.floor((n + 1) / 2)).fill(0);
  let index = -1;
  for (let i = 0; i < n; i++) {
    const token = tokens[i];
    if (token === '+') {
      index--;
      stack[index] += stack[index + 1];
    } else if (token === '-') {
      index--;
      stack[index] -= stack[index + 1];
    } else if (token === '*') {
      index--;
      stack[index] *= stack[index + 1];
    } else if (token === '/') {
      index--;
      stack[index] =
        stack[index] / stack[index + 1] > 0
          ? Math.floor(stack[index] / stack[index + 1])
          : Math.ceil(stack[index] / stack[index + 1]);
    } else {
      index++;
      stack[index] = parseInt(token);
    }
  }
  return stack[index];
};
