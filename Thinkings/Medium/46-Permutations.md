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

思路:

1. 初始化：创建一个结果数组res来存储全排列。
2. 边界条件：如果输入数组nums为空，直接返回空数组res。
3. 回溯函数：定义一个递归函数backTrack，它接收当前的起始索引start和当前的排列current。
4. 完成条件：如果current的长度等于nums的长度，说明我们已经完成了一个全排列，将其复制并添加到结果数组res中。
5. 遍历：从start索引开始遍历nums，对于每个元素：
  - 检查当前元素是否已经在current中，如果是，则跳过，以避免重复。
  - 将当前元素添加到current中。
  - 递归调用backTrack，从0开始，继续添加下一个元素。
  - 回溯，移除current中的最后一个元素，以便尝试其他可能。
6. 开始回溯：从索引0开始，对nums中的每个元素调用backTrack函数，每个元素作为排列的起始元素。

时间复杂度是O(n!)，其中n是输入数组nums的长度。这是因为每个元素都可以与剩余的n-1个元素以(n-1)!种方式排列，因此总的排列数是n * (n-1) * ... * 1。
空间复杂度是O(n)，这是因为在递归过程中，我们需要存储当前的排列current，其最大长度为n。


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