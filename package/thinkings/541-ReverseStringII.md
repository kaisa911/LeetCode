# 反转字符串 II

给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。

如果剩余字符少于 k 个，则将剩余字符全部反转。如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

示例 1：

```js
输入：s = "abcdefg", k = 2
输出："bacdfeg"
```

示例 2：

```js
输入：s = "abcd", k = 2
输出："bacd"
```

提示：

- 1 <= s.length <= 10^4
- s 仅由小写英文组成
- 1 <= k <= 10^4

思路：

对于这个问题，思路是通过循环逐步处理字符串。每次循环以 2k 为一个大区间，在每个大区间内根据规则对前 k 个字符进行反转操作。

1. 首先初始化结果字符串`result`为空字符串，获取输入字符串`s`的长度`n`，并将处理的起始位置`start`设为 0。
2. 进入循环，只要`start`小于`n`：
   - 计算当前要反转的子串的结束位置`end`，这里取`start + k - 1`和`n - 1`中的较小值，确保不会超出字符串范围。
   - 从`s`中截取从`start`到`end`的子串`sub`，将`sub`先分割成字符数组，反转后再连接成字符串，这实现了对前 k 个字符（在满足条件时）的反转操作，然后将`sub`添加到`result`中。
   - 将`start`增加 2 \* k，这是跳到下一个 2k 区间的起点。
   - 如果`start`大于等于`n`，说明已经处理完字符串，跳出循环。
   - 如果没有跳出循环，说明在当前 2k 区间内还有剩余字符（后 k 个字符），将`start - k`到`start`的字符添加到`result`中，再将`start`增加 k，进入下一个区间处理。
3. 最后，检查是否还有剩余字符未处理。如果`start - 2 * k`小于`n`，说明有剩余字符，将`start - 2 * k`到`n`的字符添加到`result`中。最后返回`result`。

时间复杂度：在循环中，每次操作都是对字符串的切片、分割、反转和连接操作。虽然有多层操作，但每次操作的时间复杂度都与处理的字符串长度相关。循环的次数取决于字符串长度`n`和`k`的值，总体上时间复杂度为 O(n)，因为对字符串的操作次数与`n`成正比。
空间复杂度：主要的空间消耗在中间变量`sub`和`result`上。在最坏情况下，`result`可能存储整个字符串，`sub`存储每次处理的子串。所以空间复杂度为 O(n)。

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let result = '';
  let n = s.length;
  let start = 0;
  while (start < n) {
    let end = Math.min(start + k - 1, n - 1);
    let sub = s.slice(start, end + 1);
    sub = sub.split('').reverse().join('');
    result += sub;
    start += 2 * k;
    if (start >= n) break;
    result += s.slice(start - k, start);
    start += k;
  }
  if (start - 2 * k < n) {
    result += s.slice(start - 2 * k, n);
  }
  return result;
};
```
