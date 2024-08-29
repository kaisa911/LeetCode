# 填充每个节点的下一个右侧节点指针

给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
int val;
Node *left;
Node*right;
Node \*next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

示例 1：
![1](https://assets.leetcode.com/uploads/2019/02/14/116_sample.png)

```js
输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
```

示例 2:

```js
输入：root = []
输出：[]
```

提示：

- 树中节点的数量在 [0, 212 - 1] 范围内
- -1000 <= node.val <= 1000

进阶：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。

思路

1. 基本情况：如果根节点 root 为空，直接返回 null。
2. 初始化最左节点：使用 leftmost 指针指向当前层的最左节点，初始指向根节点。
3. 层序遍历：使用一个 while 循环，直到 leftmost 指向 null：
   - 使用 head 指针遍历当前层的所有节点：
     - 连接当前节点的左子节点到右子节点的 next 指针（CONNECTION 1）。
     - 如果当前节点的右子节点存在，且当前节点的下一个兄弟节点存在，连接当前节点的右子节点到下一个兄弟节点的左子节点的 next 指针（CONNECTION 2）。
     - 移动 head 指针到下一个节点。
4. 移动到下一层：将 leftmost 指针移动到其左子节点，以便开始下一层的遍历。
5. 返回根节点：遍历结束后，返回根节点。

时间复杂度：O(n)，其中 n 是二叉树中的节点数。算法需要访问每个节点一次。
空间复杂度：O(1)，不使用额外的空间，只修改了节点的指针。

```js
var connect = function (root) {
  if (root === null) {
    return root;
  }
  // 从根节点开始
  let leftmost = root;
  while (leftmost.left !== null) {
    // 遍历这一层节点组织成的链表，为下一层的节点更新 next 指针
    let head = leftmost;
    while (head !== null) {
      // CONNECTION 1
      head.left.next = head.right;
      // CONNECTION 2
      if (head.next != null) {
        head.right.next = head.next.left;
      }
      // 指针向后移动
      head = head.next;
    } // 去下一层的最左的节点
    leftmost = leftmost.left;
  }
  return root;
};
```
