var recoverTree = function (root) {
  const stack = [];
  let x = null,
    y = null,
    pred = null;
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (pred !== null && root.val < pred.val) {
      y = root;
      if (x === null) {
        x = pred;
      } else break;
    }
    pred = root;
    root = root.right;
  }
  [x.val, y.val] = [y.val, x.val];
};
