# 对称二叉树

你一个二叉树的根节点 root ， 检查它是否轴对称。

示例 1：
![1](https://pic.leetcode.cn/1698026966-JDYPDU-image.png)

```js
输入：root = [1,2,2,3,4,4,3]
输出：true
```

示例 2：
![1](https://pic.leetcode.cn/1698027008-nPFLbM-image.png)

```js
输入：root = [1,2,2,null,3,null,3]
输出：false
```

提示：

树中节点数目在范围 [1, 1000] 内
-100 <= Node.val <= 100

进阶：你可以运用递归和迭代两种方法解决这个问题吗？

思路：

1. 初始化：定义一个辅助函数 check，它使用两个节点 u 和 v 作为参数，这两个节点应该是二叉树中对应的两个对称节点。
2. 使用队列：使用一个队列 q 来存储待比较的节点对。开始时，将根节点对（root, root）加入队列。
3. 迭代比较：当队列不为空时，执行以下步骤：
  - 从队列中取出一对节点 u 和 v。
  - 如果 u 和 v 都不存在（即都为 null），则继续下一次循环。
  - 如果一个存在而另一个不存在，或者它们的值不相等，则树不是对称的，返回 false。
  - 如果 u 和 v 的值相等，将 u 的左子节点与 v 的右子节点对和 u 的右子节点与 v 的左子节点对加入队列，以便在下一次迭代中进行比较。
4. 迭代结束：如果所有节点对都检查完毕且没有发现不对称的情况，则树是对称的，返回 true。

时间复杂度：O(n)，其中 n 是二叉树中的节点数。每个节点恰好被检查一次。
空间复杂度：O(n)，最坏情况下，队列可能需要存储所有节点，这发生在二叉树完全不对称时。

```js
const check = (u, v) => {
  const q = [];
  q.push(u), q.push(v);
  while (q.length) {
    u = q.shift();
    v = q.shift();
    if (!u && !v) continue;
    if (!u || !v || u.val !== v.val) return false;
    q.push(u.left);
    q.push(v.right);
    q.push(u.right);
    q.push(v.left);
  }
  return true;
};
var isSymmetric = function (root) {
  return check(root, root);
};
```
