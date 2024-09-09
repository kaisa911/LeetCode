# Excel 表列名称

给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...

示例 1：

```javascript
输入：columnNumber = 1
输出："A"
```

示例 2：

```javascript
输入：columnNumber = 28
输出："AB"
```

示例 3：

```javascript
输入：columnNumber = 701
输出："ZY"
```

示例 4：

```javascript
输入：columnNumber = 2147483647
输出："FXSHRXW"
```

提示：

- 1 <= columnNumber <= 2^31 - 1

思路：
1. 初始化字符串构建器：使用数组 sb 来构建最终的字符串。
2. 循环处理：在循环中，不断将 columnNumber 减去 1，然后根据余数得到对应的字母，并将其添加到 sb 中。
3. 更新 columnNumber：将 columnNumber 整除 26，为下一次循环做准备。
4. 处理结束：当 columnNumber 为 0 时，循环结束。
5. 反转并拼接字符串：将 sb 中的字符反转并拼接成字符串，因为添加字符的顺序与最终结果的顺序是相反的。


时间复杂度：O(logₙn)，其中 n 是 columnNumber 的值。这是因为每次迭代都将 columnNumber 除以 26，最多需要对数级别的迭代。
空间复杂度：O(logₙn)，需要存储最终的列名称。

```javascript
var convertToTitle = function (columnNumber) {
  const sb = [];
  while (columnNumber !== 0) {
    columnNumber--;
    sb.push(String.fromCharCode((columnNumber % 26) + 'A'.charCodeAt()));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return sb.reverse().join('');
};
```
