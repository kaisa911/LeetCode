# 最小和分割

给你一个正整数 num ，请你将它分割成两个非负整数 num1 和 num2 ，满足：

- num1 和 num2 直接连起来，得到 num 各数位的一个排列。
  - 换句话说，num1 和 num2 中所有数字出现的次数之和等于 num 中所有数字出现的次数。
- num1 和 num2 可以包含前导 0 。

请你返回 num1 和 num2 可以得到的和的 最小 值。

注意：

- num 保证没有前导 0 。
- num1 和 num2 中数位顺序可以与 num 中数位顺序不同。

示例 1：

```js
输入：num = 4325
输出：59
解释：我们可以将 4325 分割成 num1 = 24 和 num2 = 35 ，和为 59 ，59 是最小和。
```

示例 2：

```js
输入：num = 687
输出：75
解释：我们可以将 687 分割成 num1 = 68 和 num2 = 7 ，和为最优值 75 。
```

提示：

- 10 <= num <= 10^9

思路：

对于这道题，我们需要将给定的整数`num`拆分成两个数`num1`和`num2`，拆分的规则是它们组合起来是`num`数位的一个排列，且要求它们的和最小。首先将`num`转换为数字数组并排序，然后通过交替分配数字到`num1`和`num2`来构建这两个数，以达到和最小的目的。这种方法的理由是，对于相同的数字组合，较小的数字在高位会使得和更小，通过交替分配可以尽量保证较小数字在高位。

1. 将输入的整数`num`转换为数字数组，并进行排序。
2. 初始化两个变量`num1`和`num2`为 0。
3. 通过遍历排序后的数字数组，偶数索引的数字分配给`num1`，奇数索引的数字分配给`num2`，并且通过乘以 10 加上当前数字的方式构建这两个数。
4. 最终返回`num1`和`num2`的和。

时间复杂度为 O(nlogn)，主要开销在于对数字数组的排序操作，其中 n 是数字的位数。
空间复杂度为 O(n)，用于存储数字数组。

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  const list = [...String(num)].map(Number).sort((a, b) => a - b);
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < list.length; i += 1) {
    if (i % 2 === 0) {
      num1 = num1 * 10 + list[i];
    } else {
      num2 = num2 * 10 + list[i];
    }
  }

  return num1 + num2;
};
```
