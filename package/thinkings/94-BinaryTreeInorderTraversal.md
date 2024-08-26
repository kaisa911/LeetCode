# 二叉树的中序遍历

给定一个二叉树，返回它的中序遍历。

**示例:**

```js
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```

**进阶:**  递归算法很简单，你可以通过迭代算法完成吗？

**思路：**

一、递归的思路：

1. 递归就是先遍历所有的左子树，把值放进 list 里，
2. 再把根节点放进 list 里
3. 遍历右子树，把值放进 list 里

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
 * @return {number[]}
 */
const helper = (root, list) => {
  if (root === null) return;
  helper(root.left, list);
  list.push(root.val);
  helper(root.right, list);
};

const inorderTraversal = root => {
  const res = [];
  helper(root, res);
  return res;
};
```

二、迭代的方法来中序遍历

1. 声明一个用栈来暂时储存这些值
2. 先把当前根节点和左子树都压进栈里，根节点在栈底，依次各个左子树，
3. 没有左子树之后，取出当前的根节点，把值放进 res 里，然后当前节点变为右子树。
4. 继续把上面的操作

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
 * @return {number[]}
 */
const inorderTraversal = root => {
  const stack = [],
    res = [];
  let current = root;
  while (stack.length !== 0 || current !== null) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }
  return res;
};
```
