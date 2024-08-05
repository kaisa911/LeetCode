# 字母异位词分组

给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

示例 1:

```js
输入: strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
输出: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
```

示例 2:

```js
输入: strs = [''];
输出: [['']];
```

示例 3:

```js
输入: strs = ['a'];
输出: [['a']];
```

提示：

- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] 仅包含小写字母

思路：
这个问题可以通过使用哈希表来解决。基本思路是将每个字符串排序后的结果作为键，将原始字符串作为值存储在哈希表中。以下是解决这个问题的步骤：

1. 初始化哈希表：创建一个空的哈希表hash，用来存储排序后的字符串和对应的原始字符串数组。
2. 遍历字符串数组：对输入的字符串数组strs进行遍历。
3. 排序并形成键：对于每个字符串，将其拆分为字符数组，排序，然后重新拼接成字符串作为哈希表的键。
4. 分组存储：如果排序后的字符串作为键不存在于哈希表中，初始化一个新数组；如果已存在，将原始字符串添加到对应的数组中。
5. 返回结果：最后，返回哈希表的值（即Object.values(hash)），这些值就是按字母异位词分组的结果。

时间复杂度是O(n * k * log(k))，其中n是字符串数组的长度，k是字符串的最大长度。这是因为每个字符串都需要排序，排序的时间复杂度是O(k * log(k))，而我们需要对n个字符串进行排序。
空间复杂度是O(n)，因为最坏情况下，每个字符串都是一个独特的字母异位词，我们需要在哈希表中存储所有字符串。

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const hash = {};
  for (const item of strs) {
    const sortedStr = Array.from(item)
      .sort((a, b) => a.localeCompare(b))
      .join('');
    hash[sortedStr] = hash[sortedStr] || [];
    hash[sortedStr].push(item);
  }
  return Object.values(hash);
};
```
