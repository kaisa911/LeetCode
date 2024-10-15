# 二叉树的序列化与反序列化

序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

示例 1：
![image](https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg)

```javascript
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```

示例 2：

```javascript
输入：root = []
输出：[]
```

示例 3：

```javascript
输入：root = [1]
输出：[1]
```

示例 4：

```javascript
输入：root = [1,2]
输出：[1,2]
```

提示：

- 树中结点数在范围 [0, 10^4] 内
- -1000 <= Node.val <= 1000

思路

**序列化：**

1. 使用一个队列来进行广度优先搜索（BFS）。
2. 将每个节点的值放入一个数组中，如果节点为空，则放入一个特殊值（如"#"）。
3. 最后，将数组中的值用逗号分隔，形成一个字符串。

**反序列化：**

1. 将序列化后的字符串按逗号分隔，形成一个数组。
2. 使用一个队列来进行广度优先搜索，重建二叉树。
3. 如果数组中的值不是特殊值，则创建一个新的节点，并将其添加到队列中。

时间复杂度：O(N)，其中 N 是二叉树中的节点数。每个节点都会被访问一次。
空间复杂度：O(N)，需要存储所有节点的值，以及可能的最大队列大小，即树的最大宽度。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '#';

  let queue = [root];
  let vals = [];

  while (queue.length) {
    let node = queue.shift();
    if (node) {
      vals.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      vals.push('#');
    }
  }

  return vals.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;

  let vals = data.split(',');
  let root = new TreeNode(vals.shift());
  let queue = [root];

  while (queue.length && vals.length) {
    let node = queue.shift();
    let val = vals.shift();

    if (val !== '#') {
      node.left = new TreeNode(val);
      queue.push(node.left);
    }

    if (vals.length) {
      let val = vals.shift();
      if (val !== '#') {
        node.right = new TreeNode(val);
        queue.push(node.right);
      }
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```
