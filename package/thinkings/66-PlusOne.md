# 加一

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：

```js
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

示例 2：

```js
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```

示例 3：

```js
输入：digits = [0]
输出：[1]
```

提示：

- 1 <= digits.length <= 100
- 0 <= digits[i] <= 9

思路：

1. 通过一个 for 循环，从数组的末尾开始向前遍历。在每次迭代中，都会检查当前数字 digits[i] 是否小于 9。如果小于 9，那么就将 digits[i] 加一，并立即返回 digits。这是因为我们已经完成了加一的操作，不需要再进位。
2. 如果 digits[i] 等于 9，那么就将 digits[i] 设置为 0，并继续下一次迭代。这是因为 9 加一需要进位。
3. 如果 for 循环结束后都没有返回，那么说明 digits 中的所有数字都是 9。此时，我们需要在 digits 的开头添加一个 1。因此，我们创建了一个新的数组 res，并将 1 和 digits 连接起来，然后返回 res。

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let n = digits.length;
  for (let i = digits.length - 1; i >= 0; --i) {
    if (digits[i] < 9) {
      ++digits[i];
      return digits;
    }
    digits[i] = 0;
  }
  let res = [1];
  res = res.concat(digits);
  return res;
};
```
