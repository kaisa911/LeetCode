# N 叉树的前序遍历

给定一个 n 叉树的根节点 root ，返回 其节点值的 前序遍历 。

n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。

示例 1：
![1](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

```js
输入：root = [1,null,3,2,4,null,5,6]
输出：[1,3,5,6,2,4]
```

示例 2：
![2](https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png)

```js
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
```

提示：

- 节点总数在范围 [0, 10^4]内
- 0 <= Node.val <= 10^4
- n 叉树的高度小于或等于 1000

进阶：递归法很简单，你可以使用迭代法完成此题吗?

思路：

迭代法

1. 首先判断根节点root是否为空，如果为空则直接返回空数组。
2. 然后创建一个空数组res用于存储结果，以及一个栈stack，并将根节点root压入栈。
3. 进入循环，只要栈stack不为空：
    - 从栈中弹出一个节点node，将其值node.val添加到res中。
    - 然后逆序遍历node的子节点node.children：
    - 如果子节点不为空，将子节点压入栈stack。这样做的原因是栈的后进先出特性，逆序压入可以保证先访问左子树（在 N 叉树中是先访问顺序靠前的子树），符合前序遍历的顺序。
4. 最后返回res，即 N 叉树的前序遍历结果。

时间复杂度：每个节点都会进栈和出栈一次，并且会被访问一次，所以时间复杂度为O(n)，其中n是节点总数。
空间复杂度：主要的空间消耗在栈stack上，栈中最多存储树的一层节点，在最坏情况下（当树是一条链时），栈中可能存储n个节点，所以空间复杂度为O(n)。

```js
var preorder = function (root) {
  if (root === null) return [];
  const res = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      if (node.children[i]) {
        stack.push(node.children[i]);
      }
    }
  }
  return res;
};
```
