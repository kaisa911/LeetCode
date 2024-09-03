# 二叉树的前序遍历

给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

```javascript
输入：root = [1,null,2,3]
输出：[1,2,3]
```

示例 2：

```javascript
输入：root = []
输出：[]
```

示例 3：

```javascript
输入：root = [1]
输出：[1]
```

示例 4：
![2](https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg)

```javascript
输入：root = [1,2]
输出：[1,2]
```

示例 5：
![3](https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg)

```javascript
输入：root = [1,null,2]
输出：[1,2]
```

提示：

- 树中节点数目在范围 [0, 100] 内
- -100 <= Node.val <= 100

进阶：递归算法很简单，你可以通过迭代算法完成吗？

思路
1. 初始化：创建一个结果数组res用于存储前序遍历的结果，以及一个栈stack用于辅助遍历。
2. 基本情况：如果根节点root为空，直接返回空数组。
3. 入栈：将根节点入栈。
4. 遍历栈：当栈不为空时，执行以下操作：
    - 弹出栈顶元素n，并将其值添加到结果数组res中。
    - 如果n的右子节点存在，将其入栈。
    - 如果n的左子节点存在，将其入栈。
5. 返回结果：遍历结束后，返回结果数组res。

时间复杂度：O(n)，其中 n 是二叉树中的节点数。每个节点恰好被访问一次。
空间复杂度：O(n)，最坏情况下，栈可能需要存储所有节点，这发生在树完全不平衡时。

```javascript
/** * Definition for a binary tree node. * function TreeNode(val, left, right) { * this.val = (val===undefined ? 0 : val) * this.left = (left===undefined ? null : left) * this.right = (right===undefined ? null : right) * } */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    const n = stack.pop();
    res.push(n.val);
    // 栈：后进先出
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
  return res;
};
```
