var maxLevelSum = function (root) {
  let ans = 1,
    maxSum = root.val;
  let q = [];
  q.push(root);
  for (let level = 1; q.length > 0; ++level) {
    const nq = [];
    let sum = 0;
    for (const node of q) {
      sum += node.val;
      if (node.left) {
        nq.push(node.left);
      }
      if (node.right) {
        nq.push(node.right);
      }
    }
    if (sum > maxSum) {
      maxSum = sum;
      ans = level;
    }
    q = nq;
  }
  return ans;
};
