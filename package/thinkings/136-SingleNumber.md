# 只出现一次的数字

给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

示例 1 ：

```js
输入：nums = [2,2,1]
输出：1
```

示例 2 ：

```js
输入：nums = [4,1,2,1,2]
输出：4
```

示例 3 ：

```js
输入：nums = [1]
输出：1
```

提示：

- 1 <= nums.length <= 3 \* 10^4
- -3 \* 10^4 <= nums[i] <= 3 \* 10^4
- 除了某个元素只出现一次以外，其余每个元素均出现两次。

思路
异或操作具有以下性质：一个数和自身做异或运算结果为 0，任何数和 0 做异或运算结果为该数本身。
由于数组中除了一个数出现一次外，其他所有数均出现两次，成对的数在异或过程中会相互抵消，最终只留下那个只出现一次的数。

1. 初始化结果：使用变量 res 来存储异或的结果，初始值设为 0。
2. 遍历数组：遍历输入数组 nums 中的每个元素。
3. 应用异或操作：对 res 和当前遍历到的元素进行异或操作，并将结果存储回 res。
4. 返回结果：遍历完成后，返回 res 的值，即为只出现一次的元素。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。需要遍历数组中的每个元素一次。
空间复杂度：O(1)，只需要一个固定大小的变量来存储异或结果。

```js
var singleNumber = function (nums) {
  let res;
  let i = 0;
  for (i; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};
```