# 重新排列句子中的单词

「句子」是一个用空格分隔单词的字符串。给你一个满足下述格式的句子 text :

句子的首字母大写
text 中的每个单词都用单个空格分隔。
请你重新排列 text 中的单词，使所有单词按其长度的升序排列。如果两个单词的长度相同，则保留其在原句子中的相对顺序。

请同样按上述格式返回新的句子。

示例 1：

```javascript
输入：text = "Leetcode is cool"
输出："Is cool leetcode"
解释：句子中共有 3 个单词，长度为 8 的 "Leetcode" ，长度为 2 的 "is" 以及长度为 4 的 "cool" 。
输出需要按单词的长度升序排列，新句子中的第一个单词首字母需要大写。
```

示例 2：

```javascript
输入：text = "Keep calm and code on"
输出："On and keep calm code"
解释：输出的排序情况如下：
"On" 2 个字母。
"and" 3 个字母。
"keep" 4 个字母，因为存在长度相同的其他单词，所以它们之间需要保留在原句子中的相对顺序。
"calm" 4 个字母。
"code" 4 个字母。
```

示例 3：

```javascript
输入：text = "To be or not to be"
输出："To be or to be not"
```

提示：

- text 以大写字母开头，然后包含若干小写字母以及单词间的单个空格。
- 1 <= text.length <= 10^5

思路：

拿到这个题目，首先要明确需要对给定的句子中的单词进行重新排列。核心思路是先将句子拆分成单词数组，然后根据单词长度进行排序，对于长度相同的单词，按照其在原句子中的相对顺序保持不变。选择这种方法的理由是可以方便地处理单词，通过排序函数能够灵活地实现题目要求的排序规则。

1. 首先，使用 `split(' ')` 方法将输入的句子拆分成单词数组 `words` 。
2. 然后，使用 `sort` 方法对单词数组进行排序。排序的比较函数首先比较单词长度，如果长度相同，则使用 `localeCompare` 方法按照字典序进行比较，以保证长度相同的单词相对顺序不变。
3. 接着，将第一个单词的首字母转换为大写，通过获取第一个字符并转换为大写，然后与剩余部分拼接。
4. 最后，使用 `join(' ')` 方法将排序和处理后的单词数组重新组合成句子返回。

时间复杂度：主要操作是排序，时间复杂度为 O(nlogn)，其中 n 是单词的数量。其他操作的时间复杂度都为 O(n)，因此总的时间复杂度为 O(nlogn)。
空间复杂度：创建了一个单词数组来存储拆分后的单词，空间复杂度为 O(n)。

```javascript
/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  const words = text.split(' ');
  words.sort((a, b) => a.length - b.length || a.localeCompare(b));
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(' ');
};
```
