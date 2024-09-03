# 二叉树的后序遍历

给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg)

```javascript
输入：root = [1,null,2,3]
输出：[3,2,1]
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

提示：

- 树中节点的数目在范围 [0, 100] 内
- -100 <= Node.val <= 100

进阶：递归算法很简单，你可以通过迭代算法完成吗？

思路

1. 初始化：创建一个结果数组 res 用于存储后序遍历的结果，以及一个栈 stack 用于辅助遍历。
2. 遍历：使用 while 循环，当 root 不为空或者栈不为空时，执行以下操作：
   - 从 root 开始，尽可能地深入到最右边，将沿途的节点入栈，并将节点的值存入 res 数组（但不是最终顺序）。
   - 当到达叶子节点的右节点时，开始出栈，并将出栈节点的左子节点作为新的 root 继续遍历。
3. 反转结果：由于我们是从右到左将节点值存入 res 数组的，所以在遍历结束后，需要反转数组以得到正确的后序遍历顺序。
4. 返回结果：返回反转后的结果数组 res。

时间复杂度：O(n)，其中 n 是二叉树中的节点数。每个节点恰好被访问一次。
空间复杂度：O(n)，最坏情况下，栈可能需要存储所有节点，这发生在树完全不平衡时。

```javascript
var postorderTraversal = function (root) {
  // 初始化数据
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      res.unshift(root.val);
      root = root.right;
    }
    root = stack.pop();
    root = root.left;
  }
  return res;
};
```
