# 恢复二叉搜索树

给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/10/28/recover1.jpg)

```js
输入：root = [1,3,null,null,2]
输出：[3,1,null,null,2]
解释：3 不能是 1 的左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。
```

示例 2：
![1](https://assets.leetcode.com/uploads/2020/10/28/recover2.jpg)

```js
输入：root = [3,1,4,null,null,2]
输出：[2,1,4,null,null,3]
解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。
```

提示：

- 树上节点的数目在范围 [2, 1000] 内
- -2^31 <= Node.val <= 2^31 - 1

进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用 O(1) 空间的解决方案吗？

思路

1. 使用栈进行中序遍历：使用一个栈 stack 来辅助进行二叉搜索树的中序遍历，因为中序遍历可以按顺序访问所有节点，从而可以发现违反 BST 性质的节点。
2. 初始化变量：x 和 y 用于存储需要交换的两个节点，pred 用于存储当前访问节点的前一个节点。
3. 中序遍历：使用迭代的方式进行中序遍历。在遍历过程中，始终将当前节点的左子节点压入栈中，然后移动到左子节点。
4. 访问节点：当没有左子节点时，从栈中弹出一个节点，这个节点就是中序遍历的下一个节点。检查这个节点的值是否小于 pred 的值：

- 如果是，说明找到了第一个错误的节点，将其赋值给 x。
- 如果 x 已经被赋值，并且当前节点的值也小于 pred 的值，说明找到了第二个错误的节点，将其赋值给 y。

5. 更新 pred：将当前节点赋值给 pred，然后移动到当前节点的右子节点，继续中序遍历。
6. 交换值：遍历结束后，交换 x 和 y 节点的值。

时间复杂度：O(n)，其中 n 是二叉搜索树中的节点数。算法需要访问每个节点一次。
空间复杂度：O(h)，其中 h 是二叉搜索树的高度。栈的深度最多与树的高度相同，这是在树完全不平衡时的最坏情况。

```js
var recoverTree = function (root) {
  const stack = [];
  let x = null,
    y = null,
    pred = null;
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (pred !== null && root.val < pred.val) {
      y = root;
      if (x === null) {
        x = pred;
      } else break;
    }
    pred = root;
    root = root.right;
  }
  [x.val, y.val] = [y.val, x.val];
};
```
