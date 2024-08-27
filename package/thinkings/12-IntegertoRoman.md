# 整数转罗马数字

罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

- I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
- X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
- C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

给你一个整数，将其转为罗马数字。

示例 1:

```js
输入: num = 3
输出: "III"
```

示例 2:

```js
输入: num = 4
输出: "IV"
```

示例 3:

```js
输入: num = 9
输出: "IX"
```

示例 4:

```js
输入: num = 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
```

示例 5:

```js
输入: num = 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

提示：

- 1 <= num <= 3999

思路：

1. 函数定义：intToRoman 函数接收一个整数参数 num。
2. 初始化变量：定义了几个变量：
  res 用于存储最终的罗马数字字符串。
  val 是一个数组，包含了用于生成罗马数字的数值，按照从大到小的顺序排列，并且考虑了特殊规则（如 IV, IX, XL, XC, CD, CM）。
  str 是一个数组，包含了对应的罗马数字字符，与 val 数组中的数值顺序相对应。
3. 转换逻辑：使用一个 for 循环，从 val 数组的第一个数值开始，执行以下操作：
  只要 num 大于或等于当前的数值，就从 num 中减去这个数值，并在 res 字符串中添加对应的罗马数字字符。
  更新 num 的值为减去当前数值后的值。
4. 返回结果：循环结束后，返回 res，即整数转换后的罗马数字字符串。

这个算法的思路是“取大优先”，从最大的数值开始，尽可能多地使用该数值，直到不能使用为止，然后转向下一个较小的数值。这种方法可以确保正确处理罗马数字的特殊规则。

以下是这个算法的关键点：

- 使用两个数组 val 和 str 来存储数值和对应的罗马数字字符，这两个数组是同步遍历的。
- 通过 while 循环实现对每个数值的多次应用，直到 num 小于当前数值。
- 通过 for 循环顺序地处理下一个较小的数值。

这个实现是高效的，因为它只需要一次遍历，时间复杂度是 O(1)，因为 val 和 str 数组的长度是固定的，与输入的整数 num 大小无关。空间复杂度也是 O(1)，因为除了输入和输出外，我们只使用了固定大小的额外空间。

```js
/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  let res = '',
    val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    str = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I'
    ],
    i;

  for (let i = 0; i < val.length; ++i) {
    while (num >= val[i]) {
      num -= val[i];
      res += str[i];
    }
  }
  return res;
};
```