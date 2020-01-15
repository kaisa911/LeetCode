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
