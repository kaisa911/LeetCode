# 逐步求和得到正数的最小值

给你一个整数数组 nums 。你可以选定任意的 正数 startValue 作为初始值。

你需要从左到右遍历 nums 数组，并将 startValue 依次累加上 nums 数组中的值。

请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 正数 作为 startValue 。

示例 1：

```javascript
输入：nums = [-3,2,-3,4,2]
输出：5
解释：如果你选择 startValue = 4，在第三次累加时，和小于 1 。
                累加求和
                startValue = 4 | startValue = 5 | nums
                  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
                  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
                  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
                  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
                  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
```

示例 2：

```javascript
输入：nums = [1,2]
输出：1
解释：最小的 startValue 需要是正数。
```

示例 3：

```javascript
输入：nums = [1,-2,-3]
输出：5
```

提示：

- 1 <= nums.length <= 100
- -100 <= nums[i] <= 100

思路：

拿到这道题，首先需要明确我们的目标是找到一个最小的正数 `startValue` ，使得从左到右遍历数组 `nums` 并依次累加后，累加和始终大于等于 1 。可以通过遍历数组计算累加和，找到累加和的最小值，然后通过计算得到所需的最小正数 `startValue` 。选择这种方法的理由是直观且易于理解和实现。

1. 首先初始化变量 `min` 为 0 ， `sum` 为 0 。 `min` 用于记录累加和的最小值， `sum` 用于计算当前的累加和。
2. 然后通过循环遍历数组 `nums` ，每次将当前元素累加到 `sum` 中。
3. 在每次累加后，使用 `Math.min` 函数更新 `min` 的值，使其始终为累加和中的最小值。
4. 最后通过计算 `1 - min` 得到能保证累加和始终大于等于 1 的最小正数 `startValue` 。

时间复杂度：O(n)，其中 n 是数组 `nums` 的长度，因为需要遍历数组一次。
空间复杂度：O(1)，只使用了固定的几个变量，不随输入规模的增加而增加额外的空间。

```javascript
var minStartValue = function (nums) {
  let min = 0,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(min, sum);
  }
  return 1 - min;
};
```
