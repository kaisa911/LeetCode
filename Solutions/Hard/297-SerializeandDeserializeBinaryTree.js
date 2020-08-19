/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	serialize.root = root;
	if (!root) return [];
	let queen = [root];
	let res = [];
	while (queen.length) {
		let l = queen.length;
		let flag = true;
		for (var i = 0; i < l; i++) {
			let v = queen.shift();
			if (v === null) {
				res.push(null);
			} else {
				res.push(v.val);
				flag = false;
			}
		}
		if (flag) return res;
	}
	return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	return serialize.root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
