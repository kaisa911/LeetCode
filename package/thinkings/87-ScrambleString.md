# 扰乱字符串

使用下面描述的算法可以扰乱字符串 s 得到字符串 t ：

1. 如果字符串的长度为 1 ，算法停止
2. 如果字符串的长度 > 1 ，执行下述步骤：

- 在一个随机下标处将字符串分割成两个非空的子字符串。即，如果已知字符串 s ，则可以将其分成两个子字符串 x 和 y ，且满足 s = x + y 。
- 随机 决定是要「交换两个子字符串」还是要「保持这两个子字符串的顺序不变」。即，在执行这一步骤之后，s 可能是 s = x + y 或者 s = y + x 。
- 在 x 和 y 这两个子字符串上继续从步骤 1 开始递归执行此算法。
  给你两个 长度相等 的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。如果是，返回 true ；否则，返回 false 。

示例 1：

```js
输入：s1 = "great", s2 = "rgeat"
输出：true
解释：s1 上可能发生的一种情形是：
"great" --> "gr/eat" // 在一个随机下标处分割得到两个子字符串
"gr/eat" --> "gr/eat" // 随机决定：「保持这两个子字符串的顺序不变」
"gr/eat" --> "g/r / e/at" // 在子字符串上递归执行此算法。两个子字符串分别在随机下标处进行一轮分割
"g/r / e/at" --> "r/g / e/at" // 随机决定：第一组「交换两个子字符串」，第二组「保持这两个子字符串的顺序不变」
"r/g / e/at" --> "r/g / e/ a/t" // 继续递归执行此算法，将 "at" 分割得到 "a/t"
"r/g / e/ a/t" --> "r/g / e/ a/t" // 随机决定：「保持这两个子字符串的顺序不变」
算法终止，结果字符串和 s2 相同，都是 "rgeat"
这是一种能够扰乱 s1 得到 s2 的情形，可以认为 s2 是 s1 的扰乱字符串，返回 true
```

示例 2：

```js
输入：s1 = "abcde", s2 = "caebd"
输出：false
```

示例 3：

```js
输入：s1 = "a", s2 = "a"
输出：true
```

提示：

- s1.length == s2.length
- 1 <= s1.length <= 30
- s1 和 s2 由小写英文字母组成

思路：
给定两个长度相同的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。扰乱字符串是指通过随机分割原字符串并在分割后的子字符串之间进行交换或保持顺序的操作得到的新字符串。

1. 备忘录：使用一个三维数组 memo 作为备忘录，存储已经计算过的状态，以避免重复计算。
2. 辅助函数 dfs：定义一个递归函数 dfs 来判断在给定的起始索引 i1 和 i2 下，长度为 length 的子字符串 s1 和 s2 是否是扰乱字符串。
3. 字符集检查：在 dfs 函数中，首先检查两个子字符串是否完全相同，如果相同则直接返回 true。如果字符集不相同，则返回 false。
4. 分割与递归：枚举所有可能的分割点，对于每个分割点，递归地调用 dfs 函数来判断交换或不交换子字符串后是否满足扰乱字符串的条件。
5. 辅助函数 checkIfSimilar：定义一个函数 checkIfSimilar 来检查两个子字符串的字符集是否相同。
6. 备忘录存储：在递归过程中，使用备忘录来存储已经计算过的结果，当再次遇到相同的子问题时，直接返回存储的结果。
7. 返回结果：dfs 函数返回 true 或 false 表示 s2 是否是 s1 的扰乱字符串。

时间复杂度:O(n^2)，其中 n 是字符串的长度。最坏情况下，我们需要枚举所有可能的分割点，并对每个分割点进行两次递归调用。
空间复杂度：O(n^3)，由于备忘录的大小为 n×n×(n/2)，其中 n 是字符串的长度。

```js
var isScramble = function (s1, s2) {
  const length = s1.length;
  const memo = new Array(length)
    .fill(0)
    .map(() => new Array(length).fill(0).map(() => new Array(length + 1).fill(0)));
  return dfs(0, 0, length, s1, s2, memo);
};
const dfs = function (i1, i2, length, s1, s2, memo) {
  if (memo[i1][i2][length] !== 0) {
    return memo[i1][i2][length] === 1;
  }
  // 判断两个子串是否相等
  if (s1.slice(i1, i1 + length) === s2.slice(i2, i2 + length)) {
    memo[i1][i2][length] = 1;
    return true;
  }
  // 判断是否存在字符 c 在两个子串中出现的次数不同
  if (!checkIfSimilar(i1, i2, length, s1, s2)) {
    memo[i1][i2][length] = -1;
    return false;
  }
  // 枚举分割位置
  for (let i = 1; i < length; ++i) {
    // 不交换的情况
    if (dfs(i1, i2, i, s1, s2, memo) && dfs(i1 + i, i2 + i, length - i, s1, s2, memo)) {
      memo[i1][i2][length] = 1;
      return true;
    }
    // 交换的情况
    if (dfs(i1, i2 + length - i, i, s1, s2, memo) && dfs(i1 + i, i2, length - i, s1, s2, memo)) {
      memo[i1][i2][length] = 1;
      return true;
    }
  }
  memo[i1][i2][length] = -1;
  return false;
};
const checkIfSimilar = function (i1, i2, length, s1, s2) {
  const freq = new Map();
  for (let i = i1; i < i1 + length; ++i) {
    const c = s1[i];
    freq.set(c, (freq.get(c) || 0) + 1);
  }
  for (let i = i2; i < i2 + length; ++i) {
    const c = s2[i];
    freq.set(c, (freq.get(c) || 0) - 1);
  }
  for (const value of freq.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};
```
