# 验证外星语词典

某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。

给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。

示例 1：

```javascript
输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
输出：true
解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
```

示例 2：

```javascript
输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
输出：false
解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
```

示例 3：

```javascript
输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
输出：false
解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中 '∅' 是空白字符，定义为比任何其他字符都小（更多信息）。
```

提示：

- 1 <= words.length <= 100
- 1 <= words[i].length <= 20
- order.length == 26
- 在 words[i] 和 order 中的所有字符都是英文小写字母。

思路：

拿到这道题，首先需要明确题目要求判断给定的外星语单词序列是否按照给定的字母表顺序排列。解题的初步思路是创建一个哈希表来存储字母表中字母与对应索引的映射关系，然后通过遍历单词序列，逐个比较相邻的单词。选择这种方法的理由是可以快速通过哈希表获取字母的顺序关系，从而进行高效的比较。

1. 首先创建一个 Map 数据结构来存储字母和其对应索引的映射，这样可以快速获取字母的顺序。
2. 遍历单词序列，对于每对相邻的单词 `word1` 和 `word2` 。
3. 计算两个单词的最小长度 `minLength` ，然后遍历这个长度内的字母进行比较。
4. 如果在比较过程中发现 `word1` 中对应位置的字母顺序大于 `word2` 中的，则直接返回 `false` ，表示不是按字典序排列。
5. 如果发现 `word1` 中对应位置的字母顺序小于 `word2` 中的，则标记 `isSorted` 为 `false` ，并跳出内层循环。
6. 如果内层循环结束后 `isSorted` 为 `true` ，且 `word1` 的长度大于 `word2` 的长度，说明不符合字典序，返回 `false` 。
7. 如果整个循环都没有返回 `false` ，则说明单词序列是按字典序排列的，返回 `true` 。

时间复杂度：O(n\*m) ，其中 n 是单词的数量，m 是单词的平均长度。主要的时间消耗在遍历单词序列和比较单词的字母。
空间复杂度：O(1) ，因为字母表的大小固定为 26，创建的 Map 存储的元素数量也是固定的，与输入的单词数量和长度无关。

```javascript
var isAlienSorted = function (words, order) {
  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];

    let minLength = Math.min(word1.length, word2.length);
    let isSorted = true;

    for (let j = 0; j < minLength; j++) {
      if (map.get(word1[j]) > map.get(word2[j])) {
        return false;
      } else if (map.get(word1[j]) < map.get(word2[j])) {
        isSorted = false;
        break;
      }
    }

    if (isSorted && word1.length > word2.length) {
      return false;
    }
  }

  return true;
};
```
