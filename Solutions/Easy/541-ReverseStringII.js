/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let res = [];
  const temp = s.split('');
  const length = temp.length;
  let num = Math.ceil(length / k);

  for (let i = 0; i < num; i++) {
    let list = [];
    for (let j = i * k; j < i * k + k; j++) {
      list.push(s[j]);
    }
    if (i % 2 === 0) {
      res = [...res, ...list.reverse()];
    } else {
      res = [...res, ...list];
    }
  }
  return res.join('');
};
