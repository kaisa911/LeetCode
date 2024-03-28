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

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  const backTrace = (start, current, sum) => {
    if (sum > target) return;
    if (sum === target) {
      res.push([...current]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backTrace(i, current, sum + candidates[i]);
      current.pop();
    }
  };

  backTrace(0, [], 0);
  return res;
};
```
