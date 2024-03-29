# 从上到下打印二叉树

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如: 给定二叉树: [3,9,20,null,null,15,7],

```js
    3
   / \
  9  20
    /  \
   15   7
```

返回：

```js
[3, 9, 20, 15, 7];
```

提示：

- 节点总数 <= 1000

**思路：**

BFS层层遍历
要用一个队列来记录，先进先出

```ts
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
var levelOrder = function (root) {
  //存储结果
  const res = [];
  //判断是否为空
  if (root == null) {
    return res;
  }
  //声明一个队列
  const queue = [root];

  while (queue.length > 0) {
    //队列：先进先出，拿到第一个值，也就是root。
    //此时queue.为空
    let vertex = queue.shift();
    //把vertex.val值添加到res
    res.push(vertex.val);
    //判断左右边是否有值
    if (vertex.left) {
      queue.push(vertex.left);
    }
    if (vertex.right) {
      queue.push(vertex.right);
    }
  }
  return res;
};
```
