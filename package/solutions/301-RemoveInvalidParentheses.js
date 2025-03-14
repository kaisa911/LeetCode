var removeInvalidParentheses = function (s) {
  const res = [];
  let currSet = new Set();

  currSet.add(s);
  while (true) {
    for (const str of currSet) {
      if (isValid(str)) {
        res.push(str);
      }
    }
    if (res.length > 0) {
      return res;
    }
    const nextSet = new Set();
    for (const str of currSet) {
      for (let i = 0; i < str.length; i++) {
        if (i > 0 && str[i] === str[i - 1]) {
          continue;
        }
        if (str[i] === '(' || str[i] === ')') {
          nextSet.add(str.substring(0, i) + str.substring(i + 1));
        }
      }
    }
    currSet = nextSet;
  }
};

const isValid = (str) => {
  let count = 0;

  for (const c of str) {
    if (c === '(') {
      count++;
    } else if (c === ')') {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }

  return count === 0;
};
