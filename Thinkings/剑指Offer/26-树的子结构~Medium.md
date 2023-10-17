# 树的子结构

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

```js
输入：A = [1,2,3], B = [3,1]
输出：false
```

示例 2：

```js
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```

限制：

- 0 <= 节点个数 <= 10000

**思路：**

用DFS来做这道题

- DFS 解析：
  - 递归参数： A树和B树 。
- 终止条件：
  - 返回 false：
    - A的值和B的值不相同
    - A树的值===null
  - 返回 true： B树的值===null。

- 递推过程：
  - 判断A树的值和B树的值是否相等，如果相等，就继续判断A树的左子树和B树左子树，A树的右子树和B树的右子树
  - 递归A的左子树和B树
  - 递归A的右子树和B树
- 返回值： 返回布尔量 res ，代表是否搜索到目标字符串。

```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A || !B) return false;
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}
function dfs(A: TreeNode | null, B: TreeNode | null): boolean {
  if (B == null) return true;
  if (A == null) return false;
  return A.val == B.val && dfs(A.left, B.left) && dfs(A.right, B.right);
}

```
