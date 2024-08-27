# 二叉树的层序遍历

给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```js
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

示例 2：

```js
输入：root = [1]
输出：[[1]]
```

示例 3：

```js
输入：root = []
输出：[]
```

提示：

- 树中节点数目在范围 [0, 2000] 内
- -1000 <= Node.val <= 1000

思路:

1. 使用队列：使用一个队列 queue 来存储待访问的节点。如果根节点不为空，则将其加入队列。
2. 层序遍历：当队列不为空时，执行以下步骤：
   - 记录当前队列的长度 len，这代表了当前层的节点数。
   - 初始化一个数组 addRes 来存储当前层的节点值。
3. 访问当前层的节点：遍历当前层的所有节点：
   - 弹出队列的第一个节点，并将其值添加到 addRes 中。
   - 如果该节点有左子节点，则将其加入队列。
   - 如果该节点有右子节点，则将其加入队列。
   - 减少当前层剩余节点计数 len。
4. 添加当前层的节点值：将 addRes 中的值复制到结果数组 res 中，表示已经访问完当前层的所有节点。
5. 返回结果：重复步骤 2-4，直到队列为空。返回结果数组 res。

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
