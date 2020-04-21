# 二叉树的右视图

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

**示例:**

```
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1 <---
  / \
 2   3 <---
  \   \
   5   4 <---
```

思路：
采用 BFS，来把每一行的叶子节点放在队列里，然后在从队列里遍历，把最后一个元素放到结果数组里。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = (root) => {
  const res = [];
  if (root === null) return res;
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      if (i === size - 1) {
        res.push(node.val);
      }
    }
  }
  return res;
};
```
