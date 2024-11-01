const findSubsequences = (nums) => {
  const res = [];
  const len = nums.length;

  const dfs = (start, path) => {
    if (start == len) {
      // 递归的出口，指针已经越界
      if (path.length >= 2) {
        // path长度大于等于2
        res.push(path.slice()); // 加入解集
        return;
      }
    }
    path.push(nums[start]); // 进行选择
    for (let i = start + 1; i <= len; i++) {
      //枚举出选项，从start+1到len都可以选
      const prev = nums[start]; // 递归树中上一层的选择
      const cur = nums[i]; // 当前的选择
      if (i < len && cur == prev) {
        // i还没越界，且当前选择和上一层的选择相同
        dfs(i, path); // 递归完当前选择，就break，避免i自增，导致i==len
        break; // 从而避免导致执行else if里的逻辑，导致start==len
        // 导致来递归的出口，path推入res
      } else if (i == len || prev < cur) {
        // i==len越界，让它落入递归，在递归的出口中return
        dfs(i, path); // 或prev < cur，满足条件，往下递归
      }
    }
    path.pop(); // 撤销选择
  };
  for (let i = 0; i < len; i++) {
    dfs(i, []);
  }
  return res;
};
