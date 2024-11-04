var leafSimilar = function (root1, root2) {
  const seq1 = [];
  const seq2 = [];

  const dfs = (root, seq) => {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      seq.push(root.val);
    }
    dfs(root.left, seq);
    dfs(root.right, seq);
  };

  dfs(root1, seq1);
  dfs(root2, seq2);

  for (let i = 0; i < seq1.length && i < seq2.length; i++) {
    if (seq1[i] !== seq2[i]) {
      return false;
    }
  }
  return seq1.length === seq2.length;
};
