# 单词规律

给定一种规律 pattern  和一个字符串  str ，判断 str 是否遵循相同的规律。

这里的   遵循   指完全匹配，例如， pattern  里的每个字母和字符串  str  中的每个非空单词之间存在着双向连接的对应规律。

**示例 1:**

```js
输入: (pattern = 'abba'), (str = 'dog cat cat dog');
输出: true;
```

**示例 2:**

```js
输入: (pattern = 'abba'), (str = 'dog cat cat fish');
输出: false;
```

**示例 3:**

```js
输入: (pattern = 'aaaa'), (str = 'dog cat cat dog');
输出: false;
```

**示例  4:**

```js
输入: (pattern = 'abba'), (str = 'dog dog dog dog');
输出: false;
```

**说明:**
你可以假设  pattern  只包含小写字母， str  包含了由单个空格分隔的小写字母。

思路：
1. 分割字符串：首先，将str分割成单词数组。
2. 长度比较：如果pattern的长度和单词数组的长度不相等，那么str肯定不遵循pattern，直接返回false。
3. 建立映射：遍历pattern和单词数组，尝试为每个字符和单词建立映射关系。如果发现某个字符已经映射到另一个不同的单词，或者某个单词已经被另一个不同的字符映射，那么返回false。
4. 检查映射：如果所有字符和单词都成功建立了映射关系，且没有冲突，则str遵循pattern，返回true。

这种方法的时间复杂度是O(n)，其中n是pattern的长度，因为我们需要遍历每个字符和单词一次。空间复杂度是O(n)，因为我们需要存储所有字符和单词的映射关系。



```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = (pattern, str) => {
  let words = str.split(' ');
  if (pattern.length !== words.length) return false;

  let charToWord = {};
  let wordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (charToWord[char]) {
      if (charToWord[char] !== word) return false;
    } else {
      charToWord[char] = word;
    }

    if (wordToChar[word]) {
      if (wordToChar[word] !== char) return false;
    } else {
      wordToChar[word] = char;
    }
  }

  return true;
};
```
