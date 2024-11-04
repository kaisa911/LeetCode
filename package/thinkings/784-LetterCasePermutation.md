# 字母大小写全排列

给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。

返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。

示例 1：

```js
输入：s = "a1b2"
输出：["a1b2", "a1B2", "A1b2", "A1B2"]
```

示例 2:

```js
输入: s = '3z4';
输出: ['3z4', '3Z4'];
```

提示:

- 1 <= s.length <= 12
- s 由小写英文字母、大写英文字母和数字组成

思路：

拿到这个题目，我们可以考虑使用回溯算法来解决。因为对于每个字母，都有两种可能（大写或小写），而对于数字则只有一种选择。通过回溯遍历所有可能的情况，生成所有可能的字符串组合。选择回溯算法的理由是它能够有效地处理这种需要穷举所有可能性的问题，并且实现起来相对直观。

1. 首先定义了一个结果数组 `res` 用于存储最终的所有可能字符串。
2. 定义了回溯函数 `backTrack` ，接受当前的索引 `index` 和已构建的当前字符串 `current` 。
3. 如果当前构建的字符串长度等于输入字符串 `S` 的长度，将其添加到结果数组 `res` 中并返回。
4. 如果当前字符不是数字，分别构建将其转换为小写和大写后的新字符串，并递归调用回溯函数处理下一个字符。
5. 如果当前字符是数字，直接将其添加到当前字符串中，并递归调用回溯函数处理下一个字符。

时间复杂度：O(2^n)，其中 n 是字符串 `S` 中字母的个数。因为对于每个字母都有两种选择（大写或小写），所以总的可能性是 2 的 n 次幂。
空间复杂度：O(n)，主要是递归调用栈的空间以及存储结果的数组 `res` 的空间，它们的大小都与输入字符串的长度有关，为线性关系。

```js
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const res = [];
  if (!S.length) return res;

  const backTrack = (index, current) => {
    if (current.length === S.length) {
      res.push(current);
      return;
    }
    if (isNaN(+S[index])) {
      const lower = current + S[index].toLowerCase();
      const upper = current + S[index].toUpperCase();

      backTrack(index + 1, lower);
      backTrack(index + 1, upper);
    } else {
      current += S[index];
      backTrack(index + 1, current);
    }
  };

  backTrack(0, '');
  return res;
};
```
