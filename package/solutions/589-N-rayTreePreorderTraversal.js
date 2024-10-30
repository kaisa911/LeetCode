var preorder = function (root) {
  if (root === null) return [];
  const res = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      if (node.children[i]) {
        stack.push(node.children[i]);
      }
    }
  }
  return res;
};
