# N 字形变换

将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);

示例 1：

```js
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
```

示例 2：

```js
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

示例 3：

```js
输入：s = "A", numRows = 1
输出："A"
```

提示：

- 1 <= s.length <= 1000
- s 由英文字母（小写和大写）、',' 和 '.' 组成
- 1 <= numRows <= 1000

思路：
1. 函数定义：convert 函数接收两个参数：字符串 s 和整数 numRows。
2. 特殊情况处理：如果 numRows 小于或等于 1，直接返回原始字符串 s，因为在这种情况下不需要变换。
3. 初始化结果字符串：定义一个空字符串 res 用于存储变换后的字符串。
4. 计算 Z 字形变换的总步长：size 等于 2 * numRows - 2，这是因为当 numRows 大于 1 时，Z 字形的步长是 2n - 2。
5. 多行循环：使用嵌套循环，外层循环从 0 到 numRows - 1，表示每一行；内层循环从当前行的索引 j = i 开始，每次增加步长 size。
6. 添加字符到结果：在内层循环中，将索引 j 处的字符添加到 res。
7. 处理下坡：如果当前行不是第一行也不是最后一行，计算下坡的索引 tmp 为 j + size - 2 * i。如果 tmp 在字符串 s 的范围内，将 s[tmp] 也添加到 res。
8. 返回结果：循环结束后，返回结果字符串 res。

通过模拟 Z 字形变换的过程，逐行逐字符地构建结果字符串。对于每一行，它按照 Z 字形的步长添加字符，直到达到行末。对于中间的行，它还会添加下坡的字符。

这个算法的时间复杂度是 O(n * m)，其中 n 是字符串 s 的长度，m 是 numRows。空间复杂度是 O(n)，因为我们需要存储变换后的字符串。

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows <= 1) return s;
  let res = '';
  let size = 2 * numRows - 2;
  for (let i = 0; i < numRows; ++i) {
    for (let j = i; j < s.length; j += size) {
      res += s[j];
      let tmp = j + size - 2 * i;
      if (i != 0 && i != numRows - 1 && tmp < s.length) res += s[tmp];
    }
  }
  return res;
};
```
