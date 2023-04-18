# 序列化二叉树

请实现两个函数，分别用来序列化和反序列化二叉树。

你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅  LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

示例：
![](https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg)

```js
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```

**思路：**

*序列化 Serialize ：*
借助队列，对二叉树做层序遍历，并将越过叶节点的 null 也打印出来。

算法流程：

- 特例处理： 若 root 为空，则直接返回空列表 "[]" ；
- 初始化： 队列 queue （包含根节点 root ）；序列化列表 res ；
- 层序遍历： 当 queue 为空时跳出；
  - 节点出队，记为 node ；
  - 若 node 不为空：① 打印字符串 node.val ，② 将左、右子节点加入 queue ；
  - 否则（若 node 为空）：打印字符串 "null" ；
- 返回值： 拼接列表，用 ',' 隔开，首尾添加中括号；


*反序列化 Deserialize ：*
基于本文开始推出的 node , node.left , node.right 在序列化列表中的位置关系，可实现反序列化。

利用队列按层构建二叉树，借助一个指针 i 指向节点 node 的左、右子节点，每构建一个 node 的左、右子节点，指针 i 就向右移动 1 位。

- 算法流程：
- 特例处理： 若 data 为空，直接返回 null ；
- 初始化： 序列化列表 vals （先去掉首尾中括号，再用逗号隔开），指针 i = 1 ，根节点 root （值为 vals[0] ），队列 queue（包含 root ）；
- 按层构建： 当 queue 为空时跳出；
  - 节点出队，记为 node ；
  - 构建 node 的左子节点：node.left 的值为 vals[i] ，并将 node.left 入队；
  - 执行 i += 1 ；
  - 构建 node 的右子节点：node.left 的值为 vals[i] ，并将 node.left 入队；
  - 执行 i += 1 ；
- 返回值： 返回根节点 root 即可；

```ts
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
  if (!root) {
    return [];
  }
  const res = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.pop();
    //为空也要放数组里
    if (!node) {
      res.push(node);
      continue;
    }
    res.push(node.val);
    queue.unshift(node.left);
    queue.unshift(node.right);
  }
  return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data || !data.length) {
    return null;
  }
  //利用一个queue,第1个元素不可能为空的
  let root = new TreeNode(data[0]);
  let queue = [root];
  let i = 1;
  while (i < data.length) {
    let node = queue.pop();
    if (i < data.length) {
      if (data[i] !== null) {
        node.left = new TreeNode(data[i]);
        queue.unshift(node.left);
      }
      i++;
    }
    if (i < data.length) {
      if (data[i] !== null) {
        node.right = new TreeNode(data[i]);
        queue.unshift(node.right);
      }
      i++;
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```
