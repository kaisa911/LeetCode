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

1、使用 api，从前往后遍历字符串，indexOf 和 lastIndexOf 的值相同的就返回，否则返回-1

```js
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i];
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      return i;
    }
  }

  return -1;
};
```

2、从前往后遍历字符串，把每个字符都放在 map 里，然后遍历字符串，返回第一个 map 字符为 1 的下标，否则返回-1

1. 记录字符索引：在哈希表 map 中，每个键对应的值是一个对象，包含字符的出现次数 count 和首次出现的索引 index。
2. 单次遍历：在第一次遍历中，同时更新字符的出现次数和索引。
3. 查找索引：在遍历结束后，使用另一个循环遍历 map 的键（即字符），找到第一个出现次数为1的字符，并记录其索引。
4. 提前退出：一旦找到第一个非重复字符的索引，立即使用 break 语句退出循环。

算法具有 O(n) 的时间复杂度，其中 n 是字符串的长度，
空间复杂度保持为 O(k)，其中 k 是字符串中不同字符的数量。

```js
const firstUniqChar = s => {
  const map = {};
  let firstUniqIndex = -1; // 初始化为-1，表示未找到

  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i];
    // 如果字符已经在map中，则更新其出现次数和索引
    // 如果字符不在map中，则添加字符及其索引到map
    map[char] = (map[char] || { count: 0, index: i }) as { count: number; index: number };
    map[char].count += 1;
  }

  // 遍历map，找到第一个出现次数为1的字符的索引
  for (let char in map) {
    if (map[char].count === 1) {
      firstUniqIndex = map[char].index; // 记录第一个非重复字符的索引
      break; // 找到后立即退出循环
    }
  }

  return firstUniqIndex;
};
```
