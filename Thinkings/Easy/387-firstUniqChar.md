# 字符串中的第一个唯一字符

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引，如果不存在，返回-1；

**示例**

```js
s = 'leetcode'
返回 0

s = 'loveleetcode'
返回 2
```

**提示:**
你可以假定该字符串只包含小写字母

**思路：**

1、使用api，从前往后遍历字符串，indexOf和lastIndexOf的值相同的就返回，否则返回-1

```js
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i];
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      return i;
    }
  }

  return -1;
};
```

2、从前往后遍历字符串，把每个字符都放在map里，然后遍历字符串，返回第一个map字符为1的下标，否则返回-1

```js
const firstUniqChar = s => {
  const map = {};

  for (let i = 0, len = s.length; i < len; i += 1) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (let i = 0,len = s.length; i < len; i += 1) {
    if(map[s[i]] === 1) {
      return i
    }
  }
  
  return -1
}
```
