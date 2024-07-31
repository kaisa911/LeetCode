function largestRectangleArea(heights) {
  const stack = [-1]; // 使用-1作为哨兵
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]) {
      const h = heights[stack.pop()];
      const w = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }
  // 处理最后一个元素之后的所有情况
  while (stack[stack.length - 1] !== -1) {
    const h = heights[stack.pop()];
    const w = heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, h * w);
  }
  return maxArea;
}

function maximalRectangle(matrix) {
  if (!matrix || matrix.length === 0) return 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxArea = 0;

  for (let i = 0; i < rows; i++) {
    // 将当前行转换为高度数组
    let heights = new Array(cols).fill(0);
    for (let j = i; j < rows; j++) {
      heights = heights.map((h, k) => (matrix[j][k] === '1' ? h + 1 : 0));
      maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
  }
  return maxArea;
}
