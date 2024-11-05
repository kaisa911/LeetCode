# 上升下降字符串

给你一个字符串 s ，请你根据下面的算法重新构造字符串：

从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
从 s 剩余字符中选出比上一个添加字符更大的 最小 字符，将它 接在 结果字符串后面。
重复步骤 2 ，直到你没法从 s 中选择字符。
从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
从 s 剩余字符中选出比上一个添加字符更小的 最大 字符，将它 接在 结果字符串后面。
重复步骤 5 ，直到你没法从 s 中选择字符。
重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。
在任何一步中，如果最小或者最大字符不止一个 ，你可以选择其中任意一个，并将其添加到结果字符串。

请你返回将 s 中字符重新排序后的 结果字符串 。

示例 1：

```javascript
输入：s = "aaaabbbbcccc"
输出："abccbaabccba"
解释：第一轮的步骤 1，2，3 后，结果字符串为 result = "abc"
第一轮的步骤 4，5，6 后，结果字符串为 result = "abccba"
第一轮结束，现在 s = "aabbcc" ，我们再次回到步骤 1
第二轮的步骤 1，2，3 后，结果字符串为 result = "abccbaabc"
第二轮的步骤 4，5，6 后，结果字符串为 result = "abccbaabccba"
```

示例 2：

```javascript
输入：s = "rat"
输出："art"
解释：单词 "rat" 在上述算法重排序以后变成 "art"
```

提示：

- 1 <= s.length <= 500
- s 只包含小写英文字母。

思路：

拿到这个题目，首先需要统计字符串中每个字符出现的次数，然后按照从小到大和从大到小的顺序交替地将字符添加到结果字符串中。选择这种方法的理由是可以清晰地控制字符的添加顺序，并且通过循环和条件判断来处理字符的选择和添加。

1. 首先创建一个长度为 26 的数组来统计每个字符出现的次数。
2. 初始化一个标志变量 `added` 用于判断在一轮循环中是否有字符被添加。
3. 进入一个循环，只要还有字符可以添加，就继续循环。
4. 在每次循环中，先尝试从小到大添加字符，如果有字符添加则将 `added` 置为 `true` 。
5. 然后再从大到小添加字符，如果有字符添加则将 `added` 置为 `true` 。

时间复杂度：O(n + m)，其中 n 是字符串 s 的长度，m 是循环的次数，最多为 n 次。主要的时间消耗在遍历字符串统计字符次数和交替添加字符的过程。
空间复杂度：O(1)，用于存储字符出现的次数，空间复杂度为常数级别。

```javascript
var sortString = function (s) {
  const count = new Array(26).fill(0);
  for (let c of s) {
    count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let result = '';
  let added = true;

  while (added) {
    added = false;
    for (let i = 0; i < 26; i++) {
      if (count[i] > 0) {
        result += String.fromCharCode('a'.charCodeAt(0) + i);
        count[i]--;
        added = true;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (count[i] > 0) {
        result += String.fromCharCode('a'.charCodeAt(0) + i);
        count[i]--;
        added = true;
      }
    }
  }
  return result;
};
```
