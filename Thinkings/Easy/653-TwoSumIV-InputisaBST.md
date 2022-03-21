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

**思路：**

就是遍历拿到一个 hash，然后判断 target-current.val 在不在 hash 里，有得话就返回 true，没有或者输入为 null 的时候，就返回false

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
