# 字符串的排列

输入一个字符串，打印出该字符串中字符的所有排列。
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:

```js
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
```

限制：

- 1 <= s 的长度 <= 8

**思路：**

- 先对s进行按字符排序
- 回溯来处理

```ts
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res: Array<string> = [];
  s = s
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
  const backtrack = (has: string, rest) => {
    if (rest.length === 0) res.push(has);
    for (let i = 0, len = rest.length; i < len; i++) {
      if (rest[i] === rest[i + 1]) continue;
      backtrack(has + rest[i], rest.slice(0, i) + rest.slice(i + 1));
    }
  };
  backtrack("", s);
  return res;
};
```
