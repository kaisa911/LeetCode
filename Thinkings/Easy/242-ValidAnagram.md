# 有效的字母异位词

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

**示例  1:**

```js
输入: (s = 'anagram'), (t = 'nagaram');
输出: true;
```

**示例 2:**

```js
输入: (s = 'rat'), (t = 'car');
输出: false;
```

**说明:**
你可以假设字符串只包含小写字母。

**思路：**

1. 长度比较：同样首先检查字符串 s 和 t 的长度是否相等。
2. 初始化哈希表：创建一个空对象 hash，用于存储字符及其出现次数。
3. 构建 s 的哈希表：遍历字符串 s 的每个字符，如果 hash 中没有该字符，则添加它并设置计数为 1；如果有，则增加计数。
4. 更新哈希表并验证 t：遍历字符串 t 的每个字符，检查 hash 中是否存在该字符。如果不存在，说明 t 有一个 s 中没有的字符，返回 false。如果存在，将该字符的计数减少 1。
5. 最终验证：循环结束后，由于每个字符都已经被匹配且计数减少，如果所有的字符都恰好出现一次，那么 hash 中的所有值应该都是 0。

这种方法的时间复杂度是 O(n)，其中 n 是字符串的长度，因为我们只遍历了每个字符串一次。空间复杂度是 O(m)，其中 m 是字符集中字符的数量，这在最坏的情况下（所有字符都不同）将接近于字符串的长度。

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let hash = {};
  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }

  for (const char of t) {
    if (!hash[char]) return false;
    hash[char]--;
  }

  return true;
};
```
