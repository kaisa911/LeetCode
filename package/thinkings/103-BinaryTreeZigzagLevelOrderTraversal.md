# 二叉树的锯齿形层序遍历

给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

示例 1：
![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```js
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[20,9],[15,7]]
```

示例 2：

```js
输入：root = [1]
输出：[[1]]
```

示例 3：

```js
输入：root = []
输出：[]
```

提示：

- 树中节点数目在范围 [0, 2000] 内
- -100 <= Node.val <= 100

思路:

1. 初始化：如果根节点 root 为空，直接返回空数组，因为无节点可遍历。
2. 结果数组：创建一个结果数组 res，用于存储每层的节点值。
3. 队列：使用一个队列 nodeQueue 来存储待访问的节点，初始化时将根节点加入队列。
4. 遍历标志：使用一个布尔变量 isOrderLeft 来标记当前层的遍历顺序，初始为 true 表示从左到右遍历。
5. 层序遍历：当队列不为空时，执行以下步骤：
   - 创建一个临时数组 levelList，用于存储当前层的节点值。
   - 计算当前层的节点数 size，遍历队列中的所有节点。
   - 对于每个节点，根据 isOrderLeft 的值决定是将节点值添加到 levelList 的末尾还是开头。
   - 将当前节点的左右子节点（如果存在）加入队列，以备下一层遍历。
6. 交替遍历顺序：每完成一层的遍历后，翻转 isOrderLeft 的值，以实现锯齿形的遍历顺序。
7. 添加到结果：将当前层的节点值数组 levelList 添加到结果数组 res 中。
8. 返回结果：遍历完成后，返回包含所有层节点值的 res 数组。

时间复杂度：O(n)，其中n 是二叉树中的节点数。每个节点恰好被访问一次。
空间复杂度：O(n)，最坏情况下，队列可能需要存储所有节点，这发生在树完全不平衡时。

```js
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const nodeQueue = [root];
  let isOrderLeft = true;
  while (nodeQueue.length) {
    let levelList = [];
    const size = nodeQueue.length;
    for (let i = 0; i < size; ++i) {
      const node = nodeQueue.shift();
      if (isOrderLeft) {
        levelList.push(node.val);
      } else {
        levelList.unshift(node.val);
      }
      if (node.left !== null) {
        nodeQueue.push(node.left);
      }
      if (node.right !== null) {
        nodeQueue.push(node.right);
      }
    }
    res.push(levelList);
    isOrderLeft = !isOrderLeft;
  }
  return res;
};
```
