# 从上到下打印二叉树 II

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:
给定二叉树: [3,9,20,null,null,15,7],

```js
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```js
[
  [3],
  [9,20],
  [15,7]
]
```

提示：

- 节点总数 <= 1000

**思路：**

BFS层层遍历
要用一个队列来记录，先进先出, 然后每层用一个数组去存。

```ts
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) return [];
  var res = [],
    queue = [root];
  while (queue.length !== 0) {
    var len = queue.length,
      addRes = [];
    while (len !== 0) {
      var node = queue.shift();
      addRes.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      len -= 1;
    }
    res.push([...addRes]);
  }
  return res;
};
```
