/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
	const pos = {};
	for (let i = 0; i < inorder.length; i++) pos[inorder[i]] = i;
	return _helper(0, inorder.length - 1, 0, postorder.length - 1);
	function _helper(il, ir, pl, pr) {
		if (il > ir) return null;
		const root = new TreeNode(postorder[pr]);
		let k = pos[root.val];
		root.left = _helper(il, k - 1, pl, k - 1 - il + pl);
		root.right = _helper(k + 1, ir, k - il + pl, pr - 1);
		return root;
	}
};
