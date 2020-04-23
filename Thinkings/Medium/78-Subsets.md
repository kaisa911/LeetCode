# 子集

给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。

**示例:**

```js
输入: nums = [1, 2, 3];
输出: [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];
```

**思路：**
使用回溯的思想，  
定义一个回溯的方法：
因为要求子集，所以长度从 1-n 都可以，所以要分步，多次来求。所以要添加一个长度的参数 len。
当 current 的长度等于 len 时就退出。
初始化在 for 循环里，从 1-n 来回溯。

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]];
  const length = nums.length;
  const backtrace = (start, current, len) => {
    if (current.length === len) {
      res.push([...current]);
      return;
    }
    for (var i = start; i < length; i++) {
      current.push(nums[i]);
      backtrace(i + 1, current, len);
      current.pop();
    }
  };

  for (let i = 1; i <= length; i++) {
    backtrace(0, [], i);
  }
  return res;
};
```
