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
