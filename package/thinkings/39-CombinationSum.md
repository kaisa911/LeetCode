# 组合总和

给定一个无重复元素的数组  candidates  和一个目标数  target ，找出  candidates  中所有可以使数字和为  target  的组合。

candidates  中的数字可以无限制重复被选取。

**说明：**

- 所有数字（包括  target）都是正整数。
- 解集不能包含重复的组合。

**示例 1:**

```js
输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
```

**示例 2:**

```js
输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

**思路：**
用回溯思想来解决这个问题：
思路很简单，就是因为能重复使用，所以在循环递归的时候，还是要从头开始。

1. 初始化：创建一个结果数组 res 来存储所有可能的组合。
2. 回溯函数：定义一个回溯函数 backTrace，它接收三个参数：起始索引 start，当前组合 current，以及当前组合的和 sum。
3. 终止条件：如果当前和 sum 大于 target，则停止当前递归路径的进一步搜索。
4. 找到组合：如果当前和 sum 等于 target，则将当前组合 current 添加到结果数组 res 中。
5. 递归搜索：对于数组中的每个数字，从 start 索引开始，将其添加到当前组合 current 中，并递归调用 backTrace 函数，更新 sum 为当前和加上新添加的数字。
6. 回溯：在递归调用结束后，从当前组合 current 中移除最后一个添加的数字，以便进行下一次迭代。

时间复杂度是 O(2^N)，其中 N 是 candidates 数组的长度。这是因为每个数字都有两种选择：被选取或不被选取。
空间复杂度是 O(N)，这是因为在最坏的情况下，我们需要存储所有可能的组合，这些组合的总长度可能达到 N。

```js
/**
 * 找出所有可能的组合，使得这些组合的元素之和等于 target
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const backTrace = (start, current, sum) => {
    if (sum > target) return; // 剪枝：当前和大于目标值，停止搜索
    if (sum === target) {
      res.push([...current]); // 找到组合，添加到结果数组
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]); // 添加当前数字到组合
      backTrace(i, current, sum + candidates[i]); // 递归搜索，允许重复选择当前数字
      current.pop(); // 回溯，移除当前数字
    }
  };

  backTrace(0, [], 0);
  return res;
};
```
