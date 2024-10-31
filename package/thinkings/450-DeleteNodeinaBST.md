# 删除二叉搜索树中的节点

给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

首先找到需要删除的节点；
如果找到了，删除它。

示例 1:
![1](https://assets.leetcode.com/uploads/2020/09/04/del_node_1.jpg)

```javascript
输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
另一个正确答案是 [5,2,6,null,4,null,7]。
```

示例 2:
![2](https://assets.leetcode.com/uploads/2020/09/04/del_node_supp.jpg)

```javascript
输入: root = [5,3,6,2,4,null,7], key = 0
输出: [5,3,6,2,4,null,7]
解释: 二叉树不包含值为 0 的节点
```

示例 3:

```javascript
输入: (root = []), (key = 0);
输出: [];
```

提示:

- 节点数的范围 [0, 10^4].
- -10^5 <= Node.val <= 10^5
- 节点值唯一
- root 是合法的二叉搜索树
- -10^5 <= key <= 10^5

进阶： 要求算法时间复杂度为 O(h)，h 为树的高度。

思路：

对于删除二叉搜索树中的节点问题，由于二叉搜索树的特性（左子树的所有节点值小于根节点值，右子树的所有节点值大于根节点值），我们可以通过比较目标值 key 和当前节点值来决定是向左子树还是右子树继续寻找要删除的节点。找到节点后，根据节点的子节点情况进行不同处理：如果没有子节点，直接删除；如果只有一个子节点，用子节点替代该节点；如果有两个子节点，通常找到右子树中的最小节点（后继节点）来替代该节点。这种方法充分利用了二叉搜索树的结构特点来处理节点删除问题。

1. 首先判断根节点 root 是否为空，如果为空，直接返回 null，因为没有节点可删。
2. 当 root.val > key 时，说明要删除的节点可能在左子树中，递归调用 deleteNode 处理左子树，并将返回结果赋值给 root.left，然后返回 root。
3. 当 root.val < key 时，说明要删除的节点可能在右子树中，递归调用 deleteNode 处理右子树，并将返回结果赋值给 root.right，然后返回 root。
4. 当 root.val === key 时，找到了要删除的节点：
   - 如果该节点没有左子树和右子树，直接返回 null，即删除该节点。
   - 如果没有右子树，返回左子树来替代该节点。
   - 如果没有左子树，返回右子树来替代该节点。
   - 如果有两个子节点，先找到右子树中的最小节点 successor（通过不断向左寻找）。然后递归删除右子树中 successor 这个节点，将 successor 的右子树设为原节点的右子树，左子树设为原节点的左子树，最后返回 successor 来替代原节点。
5. 最后返回 root。

- 时间复杂度：在最坏的情况下，需要遍历树的高度 h 次才能找到要删除的节点或确定节点不存在。对于平衡二叉搜索树，树的高度为 O(log n)，对于极端不平衡的二叉搜索树，高度可能为 O(n)，其中 n 是树中的节点数。每次递归调用 deleteNode 函数都需要一定的时间，所以时间复杂度为 O(h)，平均情况是 O(log n)，最坏情况是 O(n)。
- 空间复杂度：由于使用了递归，递归调用的栈空间取决于树的高度，所以空间复杂度为 O(h)，平均情况是 O(log n)，最坏情况是 O(n)。

```javascript
var deleteNode = function (root, key) {
  if (!root) {
    return null;
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  }
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.right) {
      return root.left;
    }
    if (!root.left) {
      return root.right;
    }
    let successor = root.right;
    while (successor.left) {
      successor = successor.left;
    }
    root.right = deleteNode(root.right, successor.val);
    successor.right = root.right;
    successor.left = root.left;
    return successor;
  }
  return root;
};
```
