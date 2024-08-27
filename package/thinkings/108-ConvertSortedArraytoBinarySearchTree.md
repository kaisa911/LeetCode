# 将有序数组转换为二叉搜索树

给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵平衡二叉搜索树。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg)

```js
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
```

示例 2：
![2](https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg)

```js
输入：nums = [1,3]
输出：[3,1]
解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
```

提示：

- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums 按 严格递增 顺序排列

思路:

1. 理解二叉搜索树：二叉搜索树(BST)是一棵二叉树，其中每个节点的值大于其左子树上所有节点的值，并且小于其右子树上所有节点的值。
2. 数组中点作为根：对于一个有序数组，选择中间的元素作为二叉搜索树的根节点可以获得平衡的树结构。
3. 递归构建：使用递归函数 buildBST 来构建二叉搜索树：
   - 定义递归的终止条件，如果开始索引 start 大于结束索引 end，则返回 null。
   - 计算中间索引 midIndex，使用该索引处的数组元素创建根节点。
   - 递归地构建左子树，使用数组从 start 到 midIndex - 1 的元素。
   - 递归地构建右子树，使用数组从 midIndex + 1 到 end 的元素。
4. 主函数调用：在 sortedArrayToBST 函数中，调用 buildBST 函数并传入数组、开始索引和结束索引。

时间复杂度：O(n)，其中 n 是数组的长度。每个元素恰好被访问一次。
空间复杂度：O(logn)，这是因为在最坏情况下（树完全不平衡），递归的深度可以达到数组长度的对数。但在本例中，由于树是平衡的，空间复杂度实际上与树的高度成正比，即 O(logn)。

```js
const buildBST = (nums, start, end) => {
  if (start > end) {
    // 构成不了区间，返回null
    return null;
  }

  const midIndex = (start + end) >>> 1; // 求中间索引
  const root = new TreeNode(nums[midIndex]); // 构建当前节点

  root.left = buildBST(nums, start, midIndex - 1); // 构建左子树
  root.right = buildBST(nums, midIndex + 1, end); // 构建右子树

  return root;
};

var sortedArrayToBST = function (nums) {
  return buildBST(nums, 0, nums.length - 1); // 递归的入口
};
```
