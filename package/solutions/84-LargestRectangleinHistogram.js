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
