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

思路

1. 初始化：创建一个结果数组 res 用于存储从右侧看到的节点值，如果根节点为空，直接返回空数组。
2. 使用队列：使用一个队列 queue 来存储待访问的节点。
3. 层序遍历：使用一个 while 循环进行层序遍历，直到队列为空：
   - 记录当前层的节点数 size。
   - 遍历当前层的所有节点，对每个节点：
     - 如果左子节点存在，将其加入队列。
     - 如果右子节点存在，将其加入队列。
     - 如果是该层的最后一个节点（通过 i === size - 1 判断），将其值添加到结果数组 res 中。
4. 返回结果：遍历结束后，返回结果数组 res。

时间复杂度：O(n)，其中 n 是二叉树中的节点数。每个节点恰好被访问一次。
空间复杂度：O(n)，最坏情况下，队列可能需要存储所有节点，这发生在树完全不平衡时。

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
