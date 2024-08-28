# 有序数组的平方

给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1：

```js
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

示例 2：

```js
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

提示：

- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums 已按 非递减顺序 排序

进阶：

请你设计时间复杂度为 O(n) 的算法解决本问题

思路
1. 初始化：定义两个指针left和right，分别指向数组A的起始位置和结束位置。创建一个新数组squares，其长度与A相同，用于存储结果。
2. 双指针法：使用一个循环，其中k从right递减到0。这个循环将填充squares数组。
3. 平方比较：在每次迭代中，计算left和right指针所指元素的平方。
4. 选择较大平方：比较两个平方值，将较大的平方值放到squares[k]中。这样做是因为较大值应该放在排序后的数组的高位（考虑到最终数组是倒序填充的）。
5. 更新指针：根据选择的平方值，更新对应的指针。如果选择了squareLeft，则left指针向右移动；如果选择了squareRight，则right指针向左移动。
6. 返回结果：循环结束后，返回填充好的squares数组。

时间复杂度：O(n)，其中 n 是数组 A 的长度。这是因为每个元素恰好被访问一次。
空间复杂度：O(n)，因为创建了一个新的数组 squares 来存储结果。

```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = (A) => {
  let left = 0;
  let right = A.length - 1;
  const squares = new Array(A.length);

  for (let k = right; k >= 0; k--) {
    const squareLeft = A[left] * A[left];
    const squareRight = A[right] * A[right];
    if (squareLeft > squareRight) {
      squares[k] = squareLeft;
      left++;
    } else {
      squares[k] = squareRight;
      right--;
    }
  }

  return squares;
};
```