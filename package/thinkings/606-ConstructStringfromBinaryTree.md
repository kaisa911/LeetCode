# 根据二叉树创建字符串

你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。

空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。

**示例 1:**

```
输入: 二叉树: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

输出: "1(2(4))(3)"

解释: 原本将是“1(2(4)())(3())”，
在你省略所有不必要的空括号对之后，
它将是“1(2(4))(3)”。
```

**示例 2:**

```
输入: 二叉树: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

输出: "1(2()(4))(3)"

解释: 和第一个示例相似，
除了我们不能省略第一个对括号来中断输入和输出之间的一对一映射关系。
```

**思路：**

对于根据二叉树创建字符串这个问题，采用递归的前序遍历方式是比较自然的思路。题目要求按照前序遍历的顺序来构建字符串，并且根据节点的子节点情况添加不同的括号，通过递归可以很方便地处理每个节点及其子节点的情况。

1. 首先判断根节点`root`是否为空，如果为空则返回空字符串。
2. 然后判断根节点是否没有左右子节点（`!root.left &&!root.right`），如果是，则直接返回根节点的值转换为字符串形式（`'' + root.val`）。
3. 接着判断根节点是否没有右子节点（`!root.right`），如果是，则返回根节点值加上左子节点递归处理结果并加上括号（`root.val + '(' + tree2str(root.left) + ')'`）。
4. 最后，如果根节点有左右子节点，则返回根节点值加上左子节点递归处理结果加上括号，再加上右子节点递归处理结果加上括号（`root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')'`）。

时间复杂度：对于二叉树的每个节点，都要进行一次递归调用操作，二叉树的节点总数设为`n`，所以时间复杂度为 O(n)。
空间复杂度：由于采用了递归的方式，递归调用栈的深度最多为二叉树的高度，设二叉树的高度为`h`，在最坏情况下，二叉树是一条链，高度为`n`，所以空间复杂度为 O(n)。在平均情况下，二叉树是平衡的，高度为 O(log n)，空间复杂度为 O(log n)。

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

function tree2str(root: TreeNode | null): string {
  if (!root) {
    return '';
  }
  if (!root.left && !root.right) {
    return '' + root.val;
  }
  if (!root.right) {
    return root.val + '(' + tree2str(root.left) + ')';
  }
  return root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')';
}
```
