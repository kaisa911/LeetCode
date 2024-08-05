# 子集 II

给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

示例 1：

```js
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
```

示例 2：

```js
输入：nums = [0]
输出：[[],[0]]
```

提示：

- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10

思路：
1. 排序：首先对输入数组nums进行排序，以确保相同的元素相邻，这样在生成子集时可以跳过重复的子集。
2. 初始化：创建一个结果数组res，用于存储所有可能的子集。
3. 回溯：使用一个名为backtrack的递归函数来生成所有可能的子集。
  - start参数指定了当前考虑的子集的起始索引。
  - current数组存储当前正在构建的子集。
  - 首先将current添加到res中，表示当前子集是一个有效的子集。
  - 然后，从start索引开始遍历nums，对于每个元素：
    - 如果当前元素与前一个元素相同，并且当前索引大于起始索引，则跳过当前元素，以避免生成重复的子集。
    - 否则，将当前元素添加到current中，并递归调用backtrack函数，使用i + 1作为新的起始索引。
    - 回溯，即从current中移除最后一个元素，以回退到上一个状态。

时间复杂度：O(2^N×N)，其中N是nums数组的长度。最坏情况下，我们需要生成2^N
个子集，每个子集的构建可能需要O(N)的时间来添加和移除元素。
空间复杂度：O(N)，这是因为在递归过程中，current数组在最坏情况下可能包含nums中的所有元素。

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	nums.sort((a, b) => a - b);
	var res = [];
	backtrack(0, []);
	function backtrack(start, [...current]) {
		res.push(current);
		for (var i = start; i < nums.length; i++) {
			if (i > start && nums[i] === nums[i - 1]) continue;
			current.push(nums[i]);
			backtrack(i + 1, current);
			current.pop();
		}
	}
	return res;
};
```