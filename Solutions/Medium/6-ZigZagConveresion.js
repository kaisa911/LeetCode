/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows <= 1) return s;
  let res = '';
  let size = 2 * numRows - 2;
  for (let i = 0; i < numRows; ++i) {
    for (let j = i; j < s.length; j += size) {
      res += s[j];
      let tmp = j + size - 2 * i;
      if (i != 0 && i != numRows - 1 && tmp < s.length) res += s[tmp];
    }
  }
  return res;
};

// const convert = (s, numRows) => {
//   if (numRows <= 1) return s;
//   const matrix = [];
//   let res = '';
//   for (let i = 0; i < numRows; i++) {
//     matrix.push([]);
//   }
//   let ss = s;
//   let size = 2 * numRows - 2;
//   let len = Math.ceil(s.length / size);
//   for (let i = 0; i < len; i++) {
//     let temp = ss.substr(0, size);
//     ss = ss.substr(size, ss.length);
//     for (let j = 0; j < temp.length; j++) {
//       if (j <= numRows - 1) {
//         matrix[j][i * (numRows - 1)] = temp[j];
//       }
//       if (j > numRows - 1 && j < 2 * numRows - 1) {
//         matrix[size - j][i * (numRows - 1) + j - numRows + 1] = temp[j];
//       }
//     }
//   }

//   matrix.forEach((item) => {
//     res = res + item.join('');
//   });
//   return res;
// };
