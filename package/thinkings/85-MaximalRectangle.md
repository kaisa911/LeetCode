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

思路：
1. 转换问题：将问题转换为一维问题，即给定一个高度数组，求最大矩形面积的问题。
2. 逐行处理：对于矩阵的每一行，使用一个数组 heights 来存储当前行和前一行的 '1' 的累计高度。
3. 单调栈：使用一个栈来维护一个单调递增序列。利用单调栈的性质，可以方便地计算出任意区间的最小高度。
4. 计算面积：遍历 heights 数组，使用栈来维护当前位置之前的高度序列，从而可以计算出包含当前位置的最大矩形面积。
5. 更新最大面积：在每一步中，更新记录的最大矩形面积。

时间复杂度：O(n×m)，其中 n 是矩阵的行数，m 是列数。因为我们需要逐行处理矩阵，并且对于每行，我们需要 O(m) 的时间来计算最大矩形面积。
空间复杂度：O(m)，因为我们需要一个额外的数组 heights 来存储列的高度。

```js
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
```
