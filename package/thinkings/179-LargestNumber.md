# 最大数

给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

示例 1：

```js
输入：nums = [10,2]
输出："210"
```

示例 2：

```js
输入：nums = [3,30,34,5,9]
输出："9534330"
```

提示：

- 1 <= nums.length <= 100
- 0 <= nums[i] <= 109

思路

1. 排序：首先对数组 nums 进行排序，但不是简单的升序或降序排序。自定义排序规则如下：
   - 对于数组中的每个元素，将其视为一个多位数字（例如，10 视为 10，2 视为 2），并将其与另一个元素进行比较。
   - 在比较时，考虑将一个元素放在另一个元素前面时形成的数字，如果 sx _ y + x（即将 x 放在 y 前面）大于 sy _ x + y（即将 y 放在 x 前面），则 x 应该排在 y 前面。
2. 转换为字符串：排序完成后，将数组中的每个数字转换为字符串，并将它们拼接起来形成最终的结果。
3. 处理前导零：如果排序后的数组第一个元素是 0，这意味着最终结果会以 0 开头，这在数值上不是最大的数。但由于题目要求返回的是字符串，且数组中至少有一个非零元素，这种情况实际上不会发生。
4. 返回结果：返回拼接后的字符串。

时间复杂度：O(nlogn)，其中 n 是数组 nums 的长度。排序操作的时间复杂度为 O(nlogn)。
空间复杂度：O(n)，需要存储排序后的数组和拼接的字符串。

```javascript
var largestNumber = function (nums) {
  nums.sort((x, y) => {
    let sx = 10,
      sy = 10;
    while (sx <= x) {
      sx *= 10;
    }
    while (sy <= y) {
      sy *= 10;
    }
    return '' + (sx * y + x) - ('' + (sy * x + y));
  });
  if (nums[0] === 0) {
    return '0';
  }
  return nums.join('');
};
```
