# 从前序与中序遍历序列构造二叉树

根据一棵树的前序遍历与中序遍历构造二叉树。

**注意:**
你可以假设树中没有重复的元素。

例如，给出

```
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
```

返回如下的二叉树：

```js
    3
   / \
  9  20
    /  \
   15   7
```

**思路：**

一、这道题是剑指 offer 上的一道题，还是很好做的，前序遍历的第一个值就是根节点，然后找到中序遍历里的根节点的位置，把中序遍历和先序遍历拆成左子树和右子树，然后找前序遍历里的左右子树的根节点，依次下去

```js
const buildTree = (preorder, inorder) => {
  if (!preorder.length && !inorder.length) return null;
  const head = preorder[0];
  const root = inorder.indexOf(head);

  const midLeft = inorder.slice(0, root),
    midRight = inorder.slice(root + 1),
    preLeft = preorder.slice(1, root + 1),
    preRight = preorder.slice(root + 1);

  const tree = new TreeNode(head);
  tree.left = buildTree(preLeft, midLeft);
  tree.right = buildTree(preRight, midRight);
  return tree;
};
```

二、大佬的做法

1. 理解前序和中序遍历：前序遍历的第一个元素是根节点。中序遍历中的根节点将树分为左子树和右子树。
2. 查找根节点：在中序遍历中找到前序遍历第一个元素的索引，这个索引将中序遍历分为两部分，即左右子树。
3. 递归构造：使用递归函数 restoreTree 来构造子树。对于每个子树：
    - 使用 startIndex 和 endIndex 来确定当前子树的范围。
    - 根据当前的根节点值在中序遍历中找到索引，从而确定左右子树的分界。
    - 递归地构造左子树和右子树。
4. 返回根节点：递归的基线是 startIndex 等于 endIndex，此时返回 null。递归结束时返回根节点。

算法复杂度
时间复杂度：O(n)，其中 n 是树中节点的数量。每个节点恰好被访问一次。
空间复杂度：O(h)，其中 h 是树的高度。这是因为在递归过程中，栈空间取决于树的高度。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);
  let rootIndex = -1;
  const restoreTree = (startIndex, endIndex) => {
    if (startIndex === endIndex) return null;
    rootIndex++;
    const rootValue = preorder[rootIndex];
    const index = inorder.indexOf(rootValue);
    const root = new TreeNode(rootValue);
    root.left = restoreTree(startIndex, index);
    root.right = restoreTree(index + 1, endIndex);
    return root;
  };
  return restoreTree(0, inorder.length);
};
```
