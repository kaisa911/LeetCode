# 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：

```js
输入：strs = ["flower","flow","flight"]
输出："fl"
```

示例 2：

```js
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

提示：

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] 仅由小写英文字母组成

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let len = strs.length,
    res = '',
    i;
  if (len === 0 || strs === null) {
    return '';
  }
  strs.sort();
  let str1 = strs[0],
    str2 = strs[len - 1],
    min_len = Math.min(str1.length, str2.length);
  for (i = 0; i < min_len; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      break;
    }
  }
  res = str1.substring(0, i);
  return res;
};
```
