# 最大矩形

给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例 1：
![](https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg)

```js
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：6
解释：最大矩形如上图所示。
```

示例 2：

```js
输入：matrix = [["0"]]
输出：0
```

示例 3：

```js
输入：matrix = [["1"]]
输出：1
```

提示：

- rows == matrix.length
- cols == matrix[0].length
- 1 <= row, cols <= 200
- matrix[i][j] 为 '0' 或 '1'

```js
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var peak = function(stack) {
  return stack[stack.length - 1];
};
var largestRectangleArea = function(heights) {
  // 构建单调递增栈
  const stack = [];
  stack.push(-1);
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    // 通过构建单调栈，每当下一个矩形高度比当前栈顶元素高度小时
    // 因为构建了单调递增栈，需要不断移除栈顶元素，来维持单调性
    // 每次移除栈顶元素时，以该被移除的矩形作为基础面，向左右扩展，计算包含该栈顶元素的最大矩形
    // 当前遍历的序号为i, 高度为 heights[stack.pop()]
    // 向前拓展的序号为 peak(stack),那么可以拓展出底为 i - peak(stack) - 1;
    while (peak(stack) !== -1 && heights[peak(stack)] >= heights[i]) {
      const popHeight = heights[stack.pop()];
      const currentIdx = i - 1;
      const lastIdx = peak(stack);
      maxArea = Math.max(maxArea, popHeight * (currentIdx - lastIdx));
    }
    stack.push(i);
  }
  while (peak(stack) !== -1) {
    maxArea = Math.max(maxArea, heights[stack.pop()] * (heights.length - peak(stack) - 1));
  }
  return maxArea;
};
var maximalRectangle = function(matrix) {
  if (matrix.length === 0) return 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  const heights = Array.from({ length: cols }, () => 0);
  let maxArea = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') heights[j]++;
      else heights[j] = 0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  return maxArea;
};
```
