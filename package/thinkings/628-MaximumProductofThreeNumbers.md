# 三个数的最大乘积

给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

示例 1：

```js
输入：nums = [1,2,3]
输出：6
```

示例 2：

```js
输入：nums = [1,2,3,4]
输出：24
```

示例 3：

```js
输入：nums = [-1,-2,-3]
输出：-6
```

提示：

- 3 <= nums.length <= 104
- -1000 <= nums[i] <= 1000

思路

1. 初始化：定义五个变量 first、second、third、fourth 和 fifth，分别用于存储数组中最大的三个数和最小的两个数。初始时，最大的数设为正无穷，最小的数设为负无穷。
2. 遍历数组：遍历数组 nums 中的每个元素 num：
   - 如果 num 大于当前最大的 first，则将 third 更新为 second 的值，将 second 更新为 first 的值，然后将 first 更新为 num 的值。
   - 如果 num 大于当前的 second 但小于或等于 first，则将 third 更新为 second 的值，将 second 更新为 num 的值。
   - 如果 num 大于当前的 third，则将 third 更新为 num 的值。
   - 对于最小的数，执行类似的操作，但条件是 num 小于当前的最小值。
3. 计算最大乘积：在遍历结束后，计算由 first、second 和 third 组成的乘积与由 first、fourth 和 fifth 组成的乘积。
4. 返回结果：返回上述两种情况中的较大乘积作为最终结果。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。只需遍历数组一次。
空间复杂度：O(1)，只需要常数级别的额外空间。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
  // 找到三个最大的数和两个最小的数
  let first = (second = third = Infinity); // 初始化为正无穷
  let fourth = (fifth = -Infinity); // 初始化为负无穷

  for (const num of nums) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }

    if (num < fourth) {
      fifth = fourth;
      fourth = num;
    } else if (num < fifth) {
      fifth = num;
    }
  }

  // 计算两种情况的乘积并返回较大者
  return Math.max(first * second * third, first * fourth * fifth);
};
```
