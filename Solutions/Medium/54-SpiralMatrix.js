/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const result = [];
  const deal = (arr, type) => {
    if (arr.length == 0 || arr[0].length == 0) return result;
    let m = (arr[0] && arr[0].length) || 0;
    let n = (arr && arr.length) || 0;

    switch (type) {
      case 1:
        arr[0].forEach(v => result.push(v));
        arr.shift();
        return deal(arr, 2);
        break;
      case 2:
        arr.forEach(v => result.push(v[v.length - 1]));
        arr.forEach(v => v.pop());
        return deal(arr, 3);
        break;
      case 3:
        for (let i = m - 1; i >= 0; i--) {
          const item = arr[n - 1][i];
          result.push(item);
        }
        arr.pop();
        return deal(arr, 4);
        break;
      case 4:
        for (let i = n - 1; i >= 0; i--) {
          const item = arr[i][0];
          result.push(item);
        }
        arr.forEach(v => v.shift());
        return deal(arr, 1);
        break;
      default:
        break;
    }
  };
  return deal(matrix, 1);
};
