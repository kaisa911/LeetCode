# 全排列

给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

```js
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

思路：回溯，暴力循环。


```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const res = [];
  if(!nums.length) return res;
  const backTrack = (start,current) => {
    if(current.length === nums.length){
      res.push([...current]);
      return;
    }

    for(let i=start;i<nums.length;i++) {
      if(current.includes(nums[i])){
        continue;
      }
      current.push(nums[i])
      backTrack(0, current);
      current.pop();
    }
  }
  for(let i=0;i<nums.length;i++){
    backTrack(0, [nums[i]])
  }
  
  return res;
};
```