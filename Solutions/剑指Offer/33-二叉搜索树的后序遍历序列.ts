/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  const len = postorder.length;
  if (!len) {
    return true;
  }

  const mid = postorder[len - 1];
  const index = postorder.findIndex((value) => value > mid);

  const right = postorder.slice(index, len - 1);

  if (!right.every((value) => value >= mid)) {
    return false;
  }

  return verifyPostorder(postorder.slice(0, index)) && verifyPostorder(right);
};
