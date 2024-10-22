# 递增的三元子序列

给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

示例 1：

```javascript
输入：nums = [1,2,3,4,5]
输出：true
解释：任何 i < j < k 的三元组都满足题意
```

示例 2：

```javascript
输入：nums = [5,4,3,2,1]
输出：false
解释：不存在满足题意的三元组
```

示例 3：

```javascript
输入：nums = [2,1,5,0,4,6]
输出：true
解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6
```

提示：

- 1 <= nums.length <= 5 \* 10^4
- -2^31 <= nums[i] <= 2^31 - 1

思路：

这道题的解题思路可以从动态规划或者贪心算法的角度来考虑。上述代码采用了贪心算法的思路。通过维护两个变量 first 和 second，试图在一次遍历中找到满足条件的递增三元子序列。这种方法的好处是只需要线性时间复杂度就可以完成判断，避免了复杂的状态转移和重复计算。

1. 首先判断数组长度，如果小于 3，则直接返回 false，因为不可能存在长度为 3 的递增子序列。
2. 初始化 first 为数组的第一个元素，second 为最大值（Number.MAX_VALUE）。
3. 开始遍历数组（从第二个元素开始，索引为 1）：
   - 当遇到一个元素 num 大于 second 时，说明找到了满足条件的递增三元子序列（first < second < num），直接返回 true。
   - 当 num 大于 first 且小于等于 second 时，更新 second 为 num，因为找到了一个比 first 大且更小的中间值。
   - 当 num 小于等于 first 时，更新 first 为 num，因为找到了一个更小的起始值。
4. 如果遍历完整个数组都没有返回 true，则返回 false。

时间复杂度：只需要遍历一次数组，时间复杂度为 O (n)，其中 n 是数组的长度。
空间复杂度：只使用了两个额外的变量 first 和 second，空间复杂度为 O (1)。

```javascript
var increasingTriplet = function (nums) {
  const n = nums.length;
  if (n < 3) {
    return false;
  }
  let first = nums[0],
    second = Number.MAX_VALUE;
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    if (num > second) {
      return true;
    } else if (num > first) {
      second = num;
    } else {
      first = num;
    }
  }
  return false;
};
```
