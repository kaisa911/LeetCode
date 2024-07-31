# 子集

给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。

**示例:**

```js
输入: nums = [1, 2, 3];
输出: [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];
```

**思路：**
这个问题可以通过回溯算法来解决。以下是算法的基本步骤：

1. 初始化：创建一个结果数组 res 并初始化一个空数组作为所有子集的子集，然后添加到结果中，表示空集是所有数集的一个子集。
2. 定义回溯函数：定义一个回溯函数 backtrace，它接收三个参数：start 表示当前考虑的起始数字索引，current 表示当前的子集数组，len 表示我们需要生成的子集的长度。
3. 递归退出条件：如果当前子集 current 的长度等于 len，则将这个子集添加到结果数组 res 中，并返回。
4. 递归逻辑：在回溯函数中，使用一个循环从 start 开始，遍历到数组的末尾。对于每个索引 i：
  - 将索引 i 所对应的数字添加到当前子集 current 中。
  - 递归调用 backtrace 函数，传入 i + 1 作为新的起始索引，以及更新后的 current 和子集长度 len。
  - 回溯，即从 current 中移除最后添加的数字，以便进行下一次迭代。
5. 多层循环：在函数的主体部分，使用一个外部循环来确定子集的长度，从 0 到数组长度，然后对于每个长度，调用 backtrace 函数，从索引 0 开始，生成长度为 i 的所有子集。
6. 返回结果：在所有递归调用完成后，返回结果数组 res。

时间复杂度:O(2^n)，其中 n 是数组 nums 的长度。因为每个元素都有两种选择，加入或不加入子集，所以总共有2^n个子集。
空间复杂度:O(n)，这是因为在递归过程中，我们需要存储当前的子集，其最大长度为 n。

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
