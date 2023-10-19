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

思路：

排序，那到最长和最短的字符串，根据最短字符串的长度开始对比

1. 首先，检查输入的字符串数组 strs 是否为空，或者长度为 0。如果是，那么直接返回空字符串。
2. 然后，对字符串数组 strs 进行排序。这样，具有最长公共前缀的两个字符串必定会被排在数组的首尾。
3. 接下来，取出排序后的数组的第一个元素 str1 和最后一个元素 str2，并计算出它们中较短的那个字符串的长度 min_len。
4. 使用一个 for 循环来查找最长公共前缀。在每一次循环中，比较 str1 和 str2 在位置 i 的字符是否相同。如果不同，那么跳出循环。
5. 最后，返回 str1 的前 i 个字符，即最长公共前缀。

这段代码的时间复杂度是 O(n)，其中 n 是字符串数组中所有字符的总数。这是因为每个字符只会被遍历一次。空间复杂度是 O(1)，因为只使用了常数个变量。

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
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
