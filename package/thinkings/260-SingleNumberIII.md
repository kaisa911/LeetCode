# 只出现一次的数字 III

给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。

你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。

示例 1：

```js
输入：nums = [1,2,1,3,2,5]
输出：[3,5]
解释：[5, 3] 也是有效的答案。
```

示例 2：

```js
输入：nums = [-1,0]
输出：[-1,0]
```

示例 3：

```js
输入：nums = [0,1]
输出：[1,0]
```

提示：

- 2 <= nums.length <= 3 \* 104
- -2^31 <= nums[i] <= 2^31 - 1
- 除两个只出现一次的整数外，nums 中的其他数字都出现两次

思路：

1. 使用异或运算找到两个只出现一次的数字的异或结果。
2. 找到异或结果中任意一个为 1 的位，作为区分两个数字的依据。
3. 根据这个不同的位，将数组中的数字分为两组，分别异或得到两个只出现一次的数字。

时间复杂度：O(n)，需要遍历数组两次。
空间复杂度：O(1)，只使用了常量级别的额外空间。

```javascript
var singleNumber = function (nums) {
  let xorSum = 0;
  for (const num of nums) {
    xorSum ^= num;
  }

  // 找到 xorSum 中任意一个为 1 的位
  let diffBit = 1;
  while ((diffBit & xorSum) === 0) {
    diffBit <<= 1;
  }

  let num1 = 0;
  let num2 = 0;
  for (const num of nums) {
    if ((num & diffBit) === 0) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }
  return [num1, num2];
};
```
