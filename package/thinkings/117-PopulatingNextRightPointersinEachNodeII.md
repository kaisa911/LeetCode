# 填充每个节点的下一个右侧节点指针 II

给定一个二叉树：

```js
struct Node {
  int val;
  Node *left;
  Node*right;
  Node *next;
}
```

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。

初始状态下，所有 next 指针都被设置为 NULL 。

示例 1：
![1](https://assets.leetcode.com/uploads/2019/02/15/117_sample.png)

```js
输入：root = [1,2,3,4,5,null,7]
输出：[1,#,2,3,#,4,5,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。
```

示例 2：

```js
输入：root = []
输出：[]
```

提示：

- 树中的节点数在范围 [0, 6000] 内
- -100 <= Node.val <= 100

进阶：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序的隐式栈空间不计入额外空间复杂度。

思路

1. 初始化队列：创建一个队列 queue，将根节点 root 加入队列。
2. 层序遍历：使用 while 循环进行层序遍历，直到队列为空：
   - 记录当前层的节点数 n。
   - 初始化一个变量 last，用于存储当前层的最后一个节点。
3. 处理当前层的节点：
   - 循环 n 次，每次从队列中取出一个节点 f。
   - 如果 f 有左子节点，将其加入队列。
   - 如果 f 有右子节点，将其加入队列。
   - 如果当前不是该层的第一个节点（i !== 1），则将前一个节点的 next 指针指向当前节点 f。
   - 更新 last 为当前节点 f。
4. 返回根节点：遍历结束后，返回根节点。

时间复杂度：O(N)，其中 N 是二叉树中的节点数。算法需要访问每个节点一次。
空间复杂度：O(N)，最坏情况下，队列可能存储所有节点，这发生在树完全不平衡时。

```js
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) {
    return null;
  }
  const queue = [root];
  while (queue.length) {
    const n = queue.length;
    let last = null;
    for (let i = 1; i <= n; ++i) {
      let f = queue.shift();
      if (f.left !== null) {
        queue.push(f.left);
      }
      if (f.right !== null) {
        queue.push(f.right);
      }
      if (i !== 1) {
        last.next = f;
      }
      last = f;
    }
  }
  return root;
};
```
