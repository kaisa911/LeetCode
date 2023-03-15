/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res: Array<string> = [];
  s = s
    .split('')
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join('');
  const backtrack = (has: string, rest) => {
    if (rest.length === 0) res.push(has);
    for (let i = 0, len = rest.length; i < len; i++) {
      if (rest[i] === rest[i + 1]) continue;
      backtrack(has + rest[i], rest.slice(0, i) + rest.slice(i + 1));
    }
  };
  backtrack('', s);
  return res;
};
