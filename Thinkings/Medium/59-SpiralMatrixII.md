# 螺旋矩阵 II

给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

示例 1：
![](https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg)

```js
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

示例 2：

```js
输入：n = 1
输出：[[1]]
```

提示：

- 1 <= n <= 20

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  let hash = {};
  for (item of strs) {
    let str = item
      .split('')
      .sort()
      .join('');
    !hash[str] ? (hash[str] = [item]) : hash[str].push(item);
  }
  return Object.values(hash);
};

```