# 验证二叉搜索树

给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

- 节点的左子树只包含 小于 当前节点的数。
- 节点的右子树只包含 大于 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

示例 1：

![1](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)

```
输入：root = [2,1,3]
输出：true
```

示例 2：
![1](https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg)

```
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
```

提示：

- 树中节点数目范围在[1, 104] 内
- -2^31 <= Node.val <= 2^31 - 1

思路：
1. 初始化：使用一个栈stack来辅助进行中序遍历，同时使用变量inorder来记录上一个访问的节点的值，初始化为负无穷大，因为BST中的最小值应该比任何其他值都小。
2. 中序遍历：使用迭代的方式进行中序遍历。在遍历过程中，始终将当前节点的左子节点压入栈中，然后移动到左子节点。
3. 访问节点：当没有左子节点时，从栈中弹出一个节点，这个节点就是中序遍历的下一个节点。检查这个节点的值是否大于inorder，如果不是，则说明不是有效的BST。
4. 更新inorder：将当前节点的值赋给inorder，然后移动到当前节点的右子节点，继续中序遍历。
5. 循环结束：当栈为空且当前节点为null时，中序遍历结束。如果所有节点都满足BST的条件，则返回true。

时间复杂度：O(n)，其中n是二叉树中的节点数。算法需要访问每个节点一次。
空间复杂度：O(h)，其中h是二叉树的高度。栈的深度最多与树的高度相同，这是在树完全不平衡时的最坏情况。

```js
var isValidBST = function (root) {
  let stack = [];
  let inorder = -Infinity;
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
};
```
