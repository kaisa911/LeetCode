# 柱状图中最大的矩形

给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

示例 1:
![](https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg)

```js
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
```

示例 2：
![](https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg)

```js
输入： heights = [2,4]
输出： 4
```

提示：

- 1 <= heights.length <=105
- 0 <= heights[i] <= 104

思路：
这个问题是一个经典的算法问题，通常被称为“柱状图中的最大矩形问题”。以下是算法的基本思路：

1. 单调栈：使用一个栈来维护一个单调递增序列。栈底到当前栈顶的所有元素都是单调非减的。
2. 初始化：将一个哨兵元素（如 -1）压入栈底，以处理边界情况。
3. 遍历柱状图：遍历每个柱子的高度 heights[i]。
  - 每当当前高度小于栈顶柱子的高度，就从栈顶弹出一个元素，计算弹出元素所代表的矩形面积（heights[栈顶] * (i - 栈中前一个元素的索引 - 1)），并更新最大面积 maxarea。
  - 这个过程会一直进行，直到当前高度大于或等于栈顶柱子的高度，或者栈为空。
4. 压栈：将当前柱子的索引压入栈中。
5. 处理剩余柱子：在遍历结束后，栈中可能还有一些未处理的柱子。重复第 3 步，直到栈为空。
6. 返回最大面积：返回计算得到的最大矩形面积。

时间复杂度：O(n)，其中 n 是 heights 数组的长度。每个元素最多被压栈和弹栈各一次。
空间复杂度：O(n)，栈的存储空间最多存储所有元素。

```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = [];
  stack.push(-1);
  let maxarea = 0;
  for (let i = 0; i < heights.length; ++i) {
    while (stack[stack.length - 1] != -1 && heights[stack[stack.length - 1]] >= heights[i])
      maxarea = Math.max(maxarea, heights[stack.pop()] * (i - stack[stack.length - 1] - 1));
    stack.push(i);
  }
  while (stack[stack.length - 1] != -1)
    maxarea = Math.max(maxarea, heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1));
  return maxarea;
};
```
