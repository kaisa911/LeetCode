# 确定两个字符串是否接近

如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：

操作 1：交换任意两个 现有 字符。
例如，abcde -> aecdb
操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）
你可以根据需要对任意一个字符串多次使用这两种操作。

给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；否则，返回 false 。

示例 1：

```javascript
输入：word1 = "abc", word2 = "bca"
输出：true
解释：2 次操作从 word1 获得 word2 。
执行操作 1："abc" -> "acb"
执行操作 1："acb" -> "bca"
```

示例 2：

```javascript
输入：word1 = "a", word2 = "aa"
输出：false
解释：不管执行多少次操作，都无法从 word1 得到 word2 ，反之亦然。
```

示例 3：

```javascript
输入：word1 = "cabbba", word2 = "abbccc"
输出：true
解释：3 次操作从 word1 获得 word2 。
执行操作 1："cabbba" -> "caabbb"
执行操作 2："caabbb" -> "baaccc"
执行操作 2："baaccc" -> "abbccc"
```

提示：

- 1 <= word1.length, word2.length <= 10^5
- word1 和 word2 仅包含小写英文字母

思路：

拿到这个题目，首先需要明确题目要求判断两个字符串是否可以通过给定的操作相互转换。由于操作主要涉及字符的交换和字符种类及出现次数的变换，所以考虑统计两个字符串中字符的出现次数来进行比较。如果长度不同则直接排除，然后分别统计每个字符的出现次数，检查是否存在某个字符在一个字符串中有而在另一个中没有的情况，最后对统计的次数数组排序并比较是否完全相同。

1. 首先检查两个字符串的长度，如果长度不同直接返回 false。
2. 使用两个长度为 26 的数组 count1 和 count2 来统计两个字符串中每个字符出现的次数，通过字符的 ASCII 码值与 'a' 的 ASCII 码值的差值作为索引。
3. 然后检查是否存在一个字符串中有某个字符而另一个字符串中没有的情况，如果有则返回 false。
4. 对统计的字符次数数组进行排序。
5. 比较两个排序后的数组，如果对应位置的元素不相同则返回 false，全部相同则返回 true。

时间复杂度：O(n + 26log26)，其中 n 是字符串的长度。主要的时间消耗在遍历字符串统计字符出现次数 O(n)，以及对长度为 26 的数组进行排序 O(26log26)。
空间复杂度：O(26)，使用了两个长度为 26 的数组来存储字符出现次数，空间复杂度为常数级别。

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);
  for (let i = 0; i < word1.length; i++) {
    count1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (let i = 0; i < word2.length; i++) {
    count2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (let i = 0; i < 26; i++) {
    if ((count1[i] === 0 && count2[i] !== 0) || (count1[i] !== 0 && count2[i] === 0)) {
      return false;
    }
  }
  count1.sort((a, b) => a - b);
  count2.sort((a, b) => a - b);
  for (let i = 0; i < 26; i++) {
    if (count1[i] !== count2[i]) {
      return false;
    }
  }
  return true;
};
```
