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
