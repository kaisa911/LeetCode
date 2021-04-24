# 组合总和 Ⅳ

给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。

示例 1：

```js
输入：nums = [1,2,3], target = 4
输出：7
解释：所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
```

示例 2：

```js
输入：nums = [9], target = 3
输出：0
```

提示：

- 1 <= nums.length <= 200
- 1 <= nums[i] <= 1000
- nums 中的所有元素 互不相同
- 1 <= target <= 1000

进阶：如果给定的数组中含有负数会发生什么？问题会产生何种变化？如果允许负数出现，需要向题目中添加哪些限制条件？

思路：

拿到这道题，第一个想法就是用回溯来做，每次都从 0 开始遍历 nums，然后得到相同的 target，就放到 res 里。

```ts
function combinationSum4(nums: number[], target: number): number {
  const res: number[][] = [];
  const numSum: number = nums.reduce((total, cur) => total + cur, 0);

  if (nums.every((item) => item > target)) return 0;

  const backTrack = (current: number[]): undefined => {
    if (current.reduce((total, cur) => total + cur, 0) === target) {
      res.push([...current]);
      return;
    }
    for (let i: number = 0; i < nums.length; i++) {
      const sum: number = current.reduce((total, cur) => total + cur, 0);
      if (sum + nums[i] <= target) {
        current.push(nums[i]);
        backTrack(current);
        current.pop();
      } else {
        continue;
      }
    }
  };

  for (let i: number = 0; i < nums.length; i++) {
    backTrack([nums[i]]);
  }

  return res.length;
}
```

嗯，妥妥的超时…（写的时候还觉得怎么这么简单，执行代码都对了…）

那就要考虑剪枝和记忆化了…看题目，题目中说不同的顺序是不同的组合，那意思是得先排个序了吧  
然后再看给出的例子，其实就是把 target 逐渐拆分的过程，

- 4 可以分成 3 和 1，也可以分成 2 和 2
- 然后 3 可以分成 2 和 1
- 2 可以分成 1 和 1

然后就可以从下往上的看啦, 逐渐的把 target 拆成更小的 target，然后把计算出来的 target 记下来，以后再遇到相同的 target 就
可以直接拿出来用啦，就不用重新计算了

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  nums.sort((a, b) => b - a);
  const visited = new Map();
  const len = nums.length;

  const backtrack = (target) => {
    if (target < 0) return 0;
    if (target === 0) return 1;
    if (visited.has(target)) return visited.get(target);
    let res = 0;
    for (let i = 0; i < len; i++) {
      res += backtrack(target - nums[i]);
    }
    visited.set(target, res);
    return res;
  };

  return backtrack(target);
};
```

写完上面的时候，我觉得动态规划应该已经出来了，毕竟都是往下分 target 的过程…

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  nums.sort((a, b) => a - b);
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (num <= i) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
};
```
