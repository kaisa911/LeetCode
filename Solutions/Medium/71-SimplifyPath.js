/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = path => {
  const stack = [];
  const arr = path.split('/');
  const site = ['', '.', '..'];
  for (let i = 0; i < arr.length; i++) {
    if (!site.includes(arr[i])) {
      stack.push(arr[i]);
    } else {
      if (arr[i] === '..') {
        stack.pop();
      }
    }
  }

  return '/' + stack.join('/');
};
