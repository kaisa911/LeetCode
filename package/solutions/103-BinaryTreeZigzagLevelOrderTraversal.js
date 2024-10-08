var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const nodeQueue = [root];
  let isOrderLeft = true;
  while (nodeQueue.length) {
    let levelList = [];
    const size = nodeQueue.length;
    for (let i = 0; i < size; ++i) {
      const node = nodeQueue.shift();
      if (isOrderLeft) {
        levelList.push(node.val);
      } else {
        levelList.unshift(node.val);
      }
      if (node.left !== null) {
        nodeQueue.push(node.left);
      }
      if (node.right !== null) {
        nodeQueue.push(node.right);
      }
    }
    res.push(levelList);
    isOrderLeft = !isOrderLeft;
  }
  return res;
};
