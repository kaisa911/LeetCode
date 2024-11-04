# 最大交换

给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

示例 1:

```js
输入：2736
输出：7236
解释：交换数字2和数字7
```

示例 2:

```js
输入：9973
输出：9973
解释：不需要交换
```

注意：

- 给定数字的范围是 [0, 10^8]

思路：

拿到这个题目，首先考虑将数字转换为字符数组，通过从后往前遍历数组，找到最大数字的索引位置`maxIdx`。同时在遍历过程中，如果遇到比当前最大数字小的数字，记录下这两个数字的索引`idx1`和`idx2`。最后，如果找到了可交换的数字对，进行交换并转换回数字返回；否则直接返回原数字。选择这种方法的理由是通过一次遍历就能够找到可交换的数字对，时间复杂度相对较低，逻辑也较为清晰。

1. 首先将数字转换为字符数组，便于对每个数字进行操作和比较。
2. 通过从后往前遍历，能够及时更新当前最大数字的位置`maxIdx`，确保在后续的比较中能准确找到可交换的数字。
3. 当遇到比当前最大数字小的数字时，记录下这两个数字的索引`idx1`和`idx2`，为后续的交换做准备。
4. 如果找到了可交换的数字对，进行交换并转换回数字返回，否则直接返回原数字，处理了无需交换的情况。

时间复杂度：O(n)，其中 n 是数字的位数。因为只进行了一次从后往前的遍历。
空间复杂度：O(n)，主要用于存储数字转换后的字符数组。

```js
var maximumSwap = function (num) {
  const charArray = [...('' + num)];
  const n = charArray.length;
  let maxIdx = n - 1;
  let idx1 = -1,
    idx2 = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (charArray[i] > charArray[maxIdx]) {
      maxIdx = i;
    } else if (charArray[i] < charArray[maxIdx]) {
      idx1 = i;
      idx2 = maxIdx;
    }
  }
  if (idx1 >= 0) {
    [charArray[idx1], charArray[idx2]] = [charArray[idx2], charArray[idx1]];
    return parseInt(charArray.join(''));
  } else {
    return num;
  }
};
```
