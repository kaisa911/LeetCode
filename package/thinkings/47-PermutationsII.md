# 全排列 II

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

提示：

1 <= nums.length <= 8
-10 <= nums[i] <= 10

思路：

1. 排序：nums.sort((a, b) => a - b); 这行代码对输入数组nums进行升序排序，确保相同的数字都相邻。
2. 结果数组：const result = []; 用于存储最终的全排列。
3. 使用标记数组：const used = new Array(nums.length).fill(false); 创建一个布尔数组used，用于跟踪每个数字是否已经被使用。
4. 回溯函数：const backtrack = (path) => {...} 定义了一个递归函数backtrack，它接收当前的排列path作为参数。
5. 完成条件：if (path.length === nums.length) {...} 当当前排列的长度等于nums的长度时，将排列添加到结果数组中。
6. 剪枝逻辑：if (i > 0 && nums[i] === nums[i - 1] && used[i - 1]) continue; 这行代码是剪枝的关键，它避免了生成重复的排列。
7. 递归和回溯：在if (!used[i]) {...}块中，将当前数字添加到path中，标记为已使用，并递归调用backtrack。之后，执行回溯操作，将数字从path中移除并取消使用标记。
8. 启动递归：backtrack([]); 从空的当前排列开始递归过程。



```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
  // 对输入数组进行排序
  nums.sort((a, b) => a - b);

  const result = [];
  const used = new Array(nums.length).fill(false);
  const backtrack = (path) => {
    if (path.length === nums.length) {
      result.push(path.slice()); // 复制当前路径并添加到结果中
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 剪枝：如果当前数字与前一个数字相同且前一个数字已经被使用过，则跳过
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1]) continue;

      // 如果当前数字未被使用过，则使用它
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true; // 标记当前数字已使用
        backtrack(path); // 递归生成剩余的排列
        used[i] = false; // 回溯，取消使用当前数字
        path.pop();
      }
    }
  };

  backtrack([]); // 从空路径开始递归
  return result;
};
```
