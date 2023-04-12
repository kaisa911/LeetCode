# 二叉搜索树的后序遍历序列

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

参考以下这颗二叉搜索树：

```js
     5
    / \
   2   6
  / \
 1   3
```

示例 1：

```js
输入: [1,6,3,2,5]
输出: false
```

示例 2：

```js
输入: [1,3,2,6,5]
输出: true
```

提示：

- 数组长度 <= 1000

**思路：**

二叉搜索树特点是右子树值永远大于左子树
后序遍历：左子树 -> 右子树 -> 根
取出左子树，取出右子树，判断右子树 和 根相比最小值是不是根值，否，则返回false
递归左子树和右子树，直到树中值元素<=2 返回true;
举例[1,6,3,2,5]，分为左子树[1],右子树[6,3,2],根[5], Math.min(6,3,2,5) !== 5, return false

```ts
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  if (postorder.length <= 2) return true;

  const mid = postorder[postorder.length - 1];
  const index = postorder.findIndex((value) => value > mid);
  const left = postorder.slice(0, index)
  const right = postorder.slice(index, postorder.length - 1);
  if (!right.every((value) => value >= mid)) {
    return false;
  }

  return verifyPostorder(left) && verifyPostorder(right);
};

```
