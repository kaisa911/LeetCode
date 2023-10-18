# 重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

示例 1:

![图片](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```js
Input: (preorder = [3, 9, 20, 15, 7]), (inorder = [9, 3, 15, 20, 7]);
Output: [3, 9, 20, null, null, 15, 7];
```

示例 2:

```js
Input: (preorder = [-1]), (inorder = [-1]);
Output: [-1];
```

限制：

- 0 <= 节点个数 <= 5000

**思路：**

这道题，首先得知道二叉树的前中后序遍历，否则不太好做啊，23333

- 前序遍历：根结点 ---> 左子树 ---> 右子树
- 中序遍历：左子树---> 根结点 ---> 右子树
- 后序遍历：左子树 ---> 右子树 ---> 根结点

知道这个，这道题就好做了。

具体实现思路如下：

- 首先，检查输入的前序遍历和中序遍历数组是否为空。如果为空，就直接返回null。
- 然后，创建一个新的树节点tree，并将前序遍历数组的第一个元素（即树的根节点）赋值给它。同时，将这个元素从前序遍历数组中移除。
- 接下来，在中序遍历数组中找到根节点的位置idx。
- 然后，将中序遍历数组分割成两部分：左子树对应的部分leftArr（从开始到idx）和右子树对应的部分rightArr（从idx + 1到结束）。
- 然后，递归地调用自身函数来构建左子树和右子树。注意，这里传入的前序遍历数组仍然是原始数组，因为我们在步骤2中已经移除了根节点。
- 最后，返回构建好的树。

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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;
  const tree: TreeNode = new TreeNode(preorder.shift());
  const val: number = tree.val;
  const idx = inorder.indexOf(val);
  const leftArr = inorder.slice(0, idx);
  const rightArr = inorder.slice(idx + 1);
  tree.left = buildTree(preorder, leftArr);
  tree.right = buildTree(preorder, rightArr);
  return tree;
}
```
