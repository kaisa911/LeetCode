# 从上到下打印二叉树 III

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
给定二叉树: [3,9,20,null,null,15,7],

```js
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```js
[
  [3],
  [20,9],
  [15,7]
]
```

提示：

- 节点总数 <= 1000

**思路：**

BFS层层遍历
要用一个队列来记录，先进先出, 然后每层用一个数组去存,然后设置一个flag，来判断层数的奇偶。

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var queue = [];
  var res = [];
  var flag = false;
  if (!root) return res;
  queue.push(root);
  while (queue.length) {
    var items = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      if (flag) {
        var item = queue.shift();
        items.push(item.val);
        if (item.right) queue.push(item.right);
        if (item.left) queue.push(item.left);
      } else {
        var item = queue.pop();
        items.push(item.val);
        if (item.left) queue.unshift(item.left);
        if (item.right) queue.unshift(item.right);
      }
    }
    flag = !flag;
    res.push(items);
  }
  return res;
};

```
