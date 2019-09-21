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
拿到这道题，首先就想判断一下，pattern 和 str 的数量是不是一样的，不一样的返回 false，一样的再比较。  
然后把 pattern 的单词和 str 的单词对应起来。
然后根据 pattern 的长度把 res 加起来。
最后判断一下和 str 是否一样

```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const patternSet = [...new Set(pattern.split(''))];
  const strSet = [...new Set(str.split(' '))];
  if (patternSet.length !== strSet.length) return false;

  let obj = {},
    res = '';
  for (let i = 0, len = patternSet.length; i < len; i++) {
    obj[patternSet[i]] = strSet[i];
  }
  for (let j = 0, length = pattern.length; j < length; j++) {
    res += obj[pattern[j]] + ' ';
  }
  return res.trim() === str;
};
```
