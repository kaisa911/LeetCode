# IP 地址无效化

给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

示例 1：

```javascript
输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"
```

示例 2：

```javascript
输入：address = "255.100.50.0"
输出："255[.]100[.]50[.]0"
```

提示：

- 给出的 address 是一个有效的 IPv4 地址

思路：

拿到这个题目，我们需要将输入的 IPv4 地址中的每个 "." 替换为 "[.]" 。由于题目明确给出了输入是有效的 IPv4 地址，所以我们可以直接使用字符串的相关操作来完成替换。

1. 首先创建一个空字符串 `result` 用于存储最终的结果。
2. 遍历输入的 IPv4 地址的每个字符。
3. 如果当前字符是 "." ，则将 "[.]" 添加到 `result` 中。
4. 如果当前字符不是 "." ，则将该字符直接添加到 `result` 中。

时间复杂度为 O(n)，需要遍历整个输入字符串。
空间复杂度为 O(n)，用于存储结果字符串。

```javascript
var defangIPAddr = function (address) {
  let result = '';
  for (let char of address) {
    if (char === '.') {
      result += '[.]';
    } else {
      result += char;
    }
  }
  return result;
};
```
