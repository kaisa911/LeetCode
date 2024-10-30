# 二叉树的直径

给你一棵二叉树的根节点，返回该树的 直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg)

```javascript
输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
```

示例 2：

```javascript
输入：root = [1,2]
输出：1
```

提示：

- 树中节点数目在范围 [1, 10^4] 内
- -100 <= Node.val <= 100

思路：

对于求二叉树的直径这个问题，采用后序遍历的方式来计算每个节点的左右子树深度是比较合适的思路。
二叉树的直径可能经过根节点，也可能在子树中，通过计算每个节点的左右子树深度，就可以得到以该节点为转折点的路径长度（左右子树深度之和），在遍历过程中记录下最大的路径长度即为二叉树的直径。

1. 首先定义了一个变量`result`来存储二叉树的直径，初始值为 0。
2. 然后定义了内部函数`getDepth`，用于计算二叉树的深度：
   - 当节点`root`为空时，返回 0，这是递归的边界条件。
   - 递归地计算左子树深度`leftDepth`和右子树深度`rightDepth`。
   - 更新`result`的值，取当前`result`和`leftDepth + rightDepth`中的最大值，因为`leftDepth + rightDepth`是以当前节点为转折点的路径长度。
   - 返回当前节点的深度，即`Math.max(leftDepth, rightDepth)+1`，这里取左右子树深度的最大值加 1 作为当前节点的深度。
3. 最后调用`getDepth`函数从根节点开始计算，返回`result`，即二叉树的直径。

时间复杂度：对于二叉树的每个节点，都要计算其左右子树的深度，这相当于对二叉树进行了一次完全遍历。二叉树的节点数为`n`（`1 <= n <= 10^4`），所以时间复杂度为$O(n)$。
空间复杂度：由于采用了递归的方式，递归调用栈的深度最多为二叉树的高度。在最坏情况下，二叉树是一条链，高度为`n`，所以空间复杂度为$O(n)$。在平均情况下，二叉树是平衡的，高度为$O(log n)$，空间复杂度为$O(log n)$。

```javascript
var diameterOfBinaryTree = function (root) {
  let result = 0;

  function getDepth(root) {
    if (!root) return 0;

    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);

    result = Math.max(result, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }

  getDepth(root);
  return result;
};
```
