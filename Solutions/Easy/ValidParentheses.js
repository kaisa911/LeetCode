/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  let bracketStack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (char === '(' || char === '[' || char === '{') {
      bracketStack.push(char);
    } else {
      if (bracketStack.length === 0) {
        return false;
      }

      let oldChar = bracketStack.pop();
      if (oldChar === '(' && char !== ')') {
        return false;
      } else if (oldChar === '[' && char !== ']') {
        return false;
      } else if (oldChar === '{' && char !== '}') {
        return false;
      }
    }
  }

  return bracketStack.length === 0;
};
