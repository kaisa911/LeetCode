/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    // const queue = [root];
    // let maxDeep = 0;
    // while(queue.length) {
    //     const len = queue.length;
    //     for(let i = 0; i < len; i++) {
    //         const node = queue.shift();
    //         if(node.left) queue.push(node.left);
    //         if(node.right) queue.push(node.right);
    //     }
    //     maxDeep++;
    // }
    // return maxDeep;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end

