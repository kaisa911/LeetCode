# 缺失的第一个正数

给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

示例 1：

```js
输入：nums = [1,2,0]
输出：3
解释：范围 [1,2] 中的数字都在数组中。
```

示例 2：

```js
输入：nums = [3,4,-1,1]
输出：2
解释：1 在数组中，但 2 没有。
```

示例 3：

```js
输入：nums = [7,8,9,11,12]
输出：1
解释：最小的正数 1 没有出现。
```

提示：

- 1 <= nums.length <= 105
- -231 <= nums[i] <= 231 - 1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
  const tempArr = [];
  let res = 1;
  nums.map(item => {
    if (item > 0) {
      tempArr[item] = item;
    }
  });
  for (let i = 1; i <= tempArr.length; i++) {
    if (!tempArr[i]) {
      res = i;
      break;
    }
  }
  return res;
};

```
