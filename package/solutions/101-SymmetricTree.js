const check = (u, v) => {
  const q = [];
  q.push(u), q.push(v);
  while (q.length) {
    u = q.shift();
    v = q.shift();
    if (!u && !v) continue;
    if (!u || !v || u.val !== v.val) return false;
    q.push(u.left);
    q.push(v.right);
    q.push(u.right);
    q.push(v.left);
  }
  return true;
};
var isSymmetric = function (root) {
  return check(root, root);
};
