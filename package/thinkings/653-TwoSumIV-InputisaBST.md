# 两数之和 IV - 输入 BST

给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

**示例 1：**

```js
输入: (root = [5, 3, 6, 2, 4, null, 7]), (k = 9);
输出: true;
```

**示例 2：**

```js
输入: (root = [5, 3, 6, 2, 4, null, 7]), (k = 28);
输出: false;
```

提示:

- 二叉树的节点个数的范围是   [1, 104].
- -104 <= Node.val <= 104
- root  为二叉搜索树
- -105 <= k <= 105

思路：
对于两数之和 IV - 输入 BST 这个问题，是通过中序遍历二叉搜索树（BST），并利用集合（Set）来记录已经遍历过的节点值，通过判断目标值 k 减去当前节点值是否在集合中来确定是否存在两数之和等于 k。二叉搜索树的中序遍历可以得到有序的节点值序列，在遍历过程中利用集合可以快速查找是否存在满足条件的另一个值，时间复杂度相对较低。

1. 首先创建一个集合`set`，用于存储已经遍历过的节点值。
2. 然后定义了一个内部递归函数`DFS`，用于深度优先搜索二叉搜索树：
   - 当节点`root`为空时，返回`false`，这是递归的边界条件。
   - 当`k - root.val`在集合`set`中时，说明找到了两个节点值之和等于`k`，返回`true`。
   - 然后将当前节点值`root.val`添加到集合`set`中。
   - 最后递归地调用`DFS`函数，分别在左子树和右子树中继续寻找，只要左子树或右子树中有满足条件的节点，就返回`true`。
3. 最后调用`DFS`函数从根节点开始搜索，返回搜索结果。

时间复杂度：在最坏情况下，二叉搜索树是一条链，每个节点都要遍历一次，节点总数为`n`（`1 <= n <= 10^4`），所以时间复杂度为$O(n)$。每次查找集合中的元素时间复杂度接近$O(1)$，不会对整体时间复杂度产生影响。
空间复杂度：空间主要消耗在递归调用栈和集合`set`上。在最坏情况下，递归调用栈的深度为树的高度，当树是一条链时，高度为`n`，集合`set`最多存储`n`个元素，所以空间复杂度为$O(n)$。在平均情况下，树是平衡的，高度为$O(log n)$，空间复杂度为$O(log n)$。

```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set();
  const DFS = (root: TreeNode | null, k: number): boolean => {
    if (!root) {
      return false;
    }
    if (set.has(k - root.val)) {
      return true;
    }
    set.add(root.val);
    return DFS(root.left, k) || DFS(root.right, k);
  };
  return DFS(root, k);
}
```
