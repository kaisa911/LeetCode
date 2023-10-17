# 二叉搜索树与双向链表

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

为了让您更好地理解问题，以下面的二叉搜索树为例：
![](https://assets.leetcode.com/uploads/2018/10/12/bstdlloriginalbst.png)
我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。
![](https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png)
特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

**思路：**

dfs(cur): 递归法中序遍历；

- 终止条件： 当节点 cur 为空，代表越过叶节点，直接返回；
- 递归左子树，即 dfs(cur.left) ；
- 构建链表：
  - 当 pre 为空时： 代表正在访问链表头节点，记为 head ；
  - 当 pre 不为空时： 修改双向节点引用，即 pre.right = cur ， cur.left = pre ；
  - 保存 cur ： 更新 pre = cur ，即节点 cur 是后继节点的 pre ；
- 递归右子树，即 dfs(cur.right) ；

- 特例处理： 若节点 root 为空，则直接返回；
- 初始化： 空节点 pre ；
- 转化为双向链表： 调用 dfs(root) ；
- 构建循环链表： 中序遍历完成后，head 指向头节点， pre 指向尾节点，因此修改 head 和 pre 的双向节点引用即可；
- 返回值： 返回链表的头节点 head 即可；


```ts
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root == null) return null;
  let pre, head;
  const dfs = (cur) => {
    if (cur == null) return;
    dfs(cur.left);

    if (pre != null) pre.right = cur;
    else head = cur;

    cur.left = pre;
    pre = cur;

    dfs(cur.right);
  };
  dfs(root);
  head.left = pre;
  pre.right = head;
  return head;
};
```