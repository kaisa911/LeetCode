# 赎金信

给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

**注意：**

你可以假设两个字符串均只含有小写字母。

```js
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

**思路：**
使用哈希表的算法步骤：

1. 创建哈希表：遍历magazine字符串，使用对象或Map来记录每个字符及其出现的次数。
2. 检查ransomNote中的字符：遍历ransomNote字符串，对于每个字符，检查它在哈希表中的计数是否大于0。
3. 更新哈希表：如果字符在哈希表中，并且计数大于0，将该字符的计数减1。
4. 判断结果：如果在遍历ransomNote的过程中，所有字符都找到了足够的数量，则返回true；如果在任何时候发现某个字符的计数不足，则返回false。

时间复杂度：遍历两个字符串的时间复杂度为O(n + m)，其中n是magazine的长度，m是ransomNote的长度。哈希表的查找和更新操作平均时间复杂度为O(1)。
空间复杂度：O(k)，其中k是magazine中不同字符的数量。这是因为我们只需要存储每个不同字符的计数。

```js
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const charCount = new Map();

  // 填充哈希表
  for (const char of magazine) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // 检查ransomNote中的字符
  for (const char of ransomNote) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false; // 字符不存在或计数不足
    }
    charCount.set(char, charCount.get(char) - 1); // 减1
  }

  return true; // 所有字符都有足够的数量
};
```
