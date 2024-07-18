# 组合总和 II

给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。

示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]

提示:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30

思路：
这个问题是一个典型的回溯问题，与“组合总和”类似，但有一些关键的区别：

- 每个数字在每个组合中只能使用一次。
- 需要确保解集中不包含重复的组合。

1. 排序：首先对 candidates 数组进行排序，这有助于在回溯过程中跳过重复的数字。
2. 回溯函数：定义一个回溯函数 backTrack，它接收两个参数：起始索引 start 和当前组合 current。
3. 终止条件：如果当前组合的和等于 target，则将当前组合添加到结果数组 res 中。
4. 递归搜索：对于数组中的每个数字，从 start 索引开始，将其添加到当前组合 current 中，并递归调用 backTrack 函数，同时更新 start 索引为当前数字的索引加一。
5. 跳过重复数字：如果当前数字与前一个数字相同，并且当前索引大于起始索引，则跳过当前数字，避免生成重复的组合。
6. 剪枝：如果当前组合的和加上当前数字已经超过 target，则停止当前递归路径的进一步搜索。

时间复杂度是 O(N * 2^N)，其中 N 是 candidates 数组的长度。这是因为每个数字都有两种选择：被选取或不被选取，而排序的时间复杂度为 O(N log N)。
空间复杂度是 O(N)，这是因为在最坏的情况下，我们需要存储所有可能的组合，这些组合的总长度可能达到 N。


```js
/**
 * 找出所有可能的组合，使得这些组合的元素之和等于 target
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b); // 对数组进行排序
  const backTrack = (start, current) => {
    if (current.reduce((pre, cur) => pre + cur, 0) === target) {
      res.push([...current]); // 找到组合，添加到结果数组
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (current.reduce((pre, cur) => pre + cur, 0) + candidates[i] > target) {
        break; // 剪枝：当前和加上当前数字大于目标值，停止搜索
      }
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue; // 跳过重复数字
      }
      current.push(candidates[i]); // 添加当前数字到组合
      backTrack(i + 1, current); // 递归搜索
      current.pop(); // 回溯，移除当前数字
    }
  };
  backTrack(0, []);
  return res;
};
```
