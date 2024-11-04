# 最大层内元素和

给你一个二叉树的根节点 root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。

请返回层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中 最小 的那个。

示例 1：
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/08/17/capture.jpeg)

```javascript
输入：root = [1,7,0,7,-8,null,null]
输出：2
解释：
第 1 层各元素之和为 1，
第 2 层各元素之和为 7 + 0 = 7，
第 3 层各元素之和为 7 + -8 = -1，
所以我们返回第 2 层的层号，它的层内元素之和最大。
```

示例 2：

```javascript
输入：root = [989,null,10250,98693,-89388,null,null,null,-32127]
输出：2
```

提示：

树中的节点数在 [1, 10^4]范围内
-10^5 <= Node.val <= 10^5

思路：

这道题是要求找出二叉树中具有最大节点值之和的层。初步思路是使用广度优先搜索（BFS）遍历二叉树的每一层，计算每一层的节点值之和，然后比较得出最大值所在的层。选择 BFS 是因为它能够按层顺序访问节点，便于计算每一层的和。

1. 首先定义变量 `ans` 来记录最大和所在的层，初始为 1，`maxSum` 记录最大的层节点值之和，初始为根节点的值。创建一个队列 `q` 并将根节点入队。
2. 进入循环，只要队列不为空，就表示还有未处理的层。
3. 对于当前层，创建新队列 `nq` 用于存储下一层的节点，同时初始化当前层的和为 0 。
4. 遍历当前层的节点，计算节点值之和，并将其左右子节点入队到 `nq` 。
5. 如果当前层的和大于之前记录的最大和，更新 `maxSum` 和 `ans` 。
6. 最后将队列更新为下一层的节点，继续循环。

时间复杂度：O(n)，其中 n 是二叉树的节点数。因为需要遍历每个节点一次。
空间复杂度：O(m)，其中 m 是二叉树的最大宽度，即某一层节点数的最大值。主要是用于存储队列中的节点。

```javascript
var maxLevelSum = function (root) {
  let ans = 1,
    maxSum = root.val;
  let q = [];
  q.push(root);
  for (let level = 1; q.length > 0; ++level) {
    const nq = [];
    let sum = 0;
    for (const node of q) {
      sum += node.val;
      if (node.left) {
        nq.push(node.left);
      }
      if (node.right) {
        nq.push(node.right);
      }
    }
    if (sum > maxSum) {
      maxSum = sum;
      ans = level;
    }
    q = nq;
  }
  return ans;
};
```
