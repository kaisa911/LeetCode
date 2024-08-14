# Excel 表列序号

给你一个字符串  columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。

**例如:**

```
  A -> 1
  B -> 2
  C -> 3
  ...
  Z -> 26
  AA -> 27
  AB -> 28
  ...
 
```

**示例 1:**

```
输入: columnTitle = "A"
输出: 1
```

**示例  2:**

```
输入: columnTitle = "AB"
输出: 28
```

**示例  3:**

```
输入: columnTitle = "ZY"
输出: 701
```

**示例 4:**

```
输入: columnTitle = "FXSHRXW"
输出: 2147483647
``` 

**提示：**

1 <= columnTitle.length <= 7
columnTitle 仅由大写英文组成
columnTitle 在范围 ["A", "FXSHRXW"] 内


**思路：**

这就是一个26进制的问题，前面每一位都要 * 26；

- 从Excel列标题的第一个字母开始，将其转换为对应的数值。
- 由于Excel列标题的每个后续字母都是基于前一个字母的26倍，因此需要在累加之前将当前的结果乘以26。
- 遍历完所有的字母后，得到的res就是列标题对应的列序号。

时间复杂度是O(n)，其中n是columnTitle字符串的长度，因为每个字符恰好被处理一次。
空间复杂度是O(1)，因为除了输入字符串之外，我们只需要一个固定数量的额外变量。

```js
/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) => {
  let res = 0;
  for (const char of columnTitle) {
    res = res * 26 + (char.charCodeAt() - 64);
  }
  return res;
};
````
