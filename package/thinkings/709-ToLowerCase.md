# 转换成小写字母

给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。

示例 1：

```javascript
输入：s = "Hello"
输出："hello"
```

示例 2：

```javascript
输入：s = "here"
输出："here"
```

示例 3：

```javascript
输入：s = "LOVELY"
输出："lovely"
```

提示：

- 1 <= s.length <= 100
- s 由 ASCII 字符集中的可打印字符组成

思路：

对于将字符串中的大写字母转换为小写字母的问题，由于 ASCII 码中大写字母和小写字母是有规律分布的（大写字母 A - Z 的 ASCII 码值为 65 - 90，小写字母 a - z 的 ASCII 码值为 97 - 122，相差 32），所以可以通过遍历字符串，判断字符的 ASCII 码值是否在大写字母范围内，如果是则将其 ASCII 码值加上 32 来实现转换。这种方法直接利用了 ASCII 码的特性来解决问题。

1. 首先将字符串 str 转换为字符数组，这样方便对每个字符进行操作。
2. 然后通过循环遍历字符数组。
3. 在循环中，使用 charCodeAt()方法获取每个字符的 ASCII 码值，判断其是否在大写字母的 ASCII 码值范围（65 - 90）内。
4. 如果字符的 ASCII 码值在大写字母范围内，就通过 String.fromCharCode()方法将其 ASCII 码值加上 32 后转换为对应的小写字母，并替换原字符。
5. 最后将字符数组通过 join('')方法转换回字符串并返回。

- 时间复杂度：需要遍历字符串一次，时间复杂度为 O(n)，其中 n 是字符串 str 的长度。
- 空间复杂度：将字符串转换为字符数组需要额外的空间，空间复杂度为 O(n)，不过在 JavaScript 中这种转换通常是较为高效的。最后返回结果字符串也需要额外空间，但总体上空间复杂度仍为 O(n)。

```javascript
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  str = [...str];
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() < 91 && str[i].charCodeAt() > 59) {
      str[i] = String.fromCharCode(+str[i].charCodeAt() + 32);
    }
  }
  return str.join('');
};
```
