# 前 K 个高频单词

给定一个单词列表 words 和一个整数 k ，返回前 k 个出现次数最多的单词。

返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率， 按字典顺序 排序。

示例 1：

```js
输入: words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
输出: ["i", "love"]
解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
    注意，按字母顺序 "i" 在 "love" 之前。
```

示例 2：

```js
输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
输出: ["the", "is", "sunny", "day"]
解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
    出现次数依次为 4, 3, 2 和 1 次。
```

注意：

- 1 <= words.length <= 500
- 1 <= words[i] <= 10
- words[i] 由小写英文字母组成。
- k 的取值范围是 [1, 不同 words[i] 的数量]

进阶：尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。

思路

1. 统计频率：使用 Map 对象 cnt 统计每个单词出现的次数。
2. 创建候选列表：将 cnt 中的键（即单词）收集到数组 rec 中。
3. 排序：对 rec 数组进行排序，排序规则是：
   - 首先根据单词出现的频率降序排序，使用 cnt.get(word1) - cnt.get(word2)比较。
   - 如果频率相同，则按字典序升序排序，使用 word1.localeCompare(word2)。
4. 返回结果：返回排序后的数组 rec 的前 k 个元素。

时间复杂度：O(nlogn)，其中 n 是 words 的长度。排序操作的时间复杂度为 (nlogn)。
空间复杂度：O(n)，因为我们需要存储每个单词及其计数。

```js
var topKFrequent = function (words, k) {
  const cnt = new Map();
  for (const word of words) {
    cnt.set(word, (cnt.get(word) || 0) + 1);
  }
  const rec = [];
  for (const entry of cnt.keys()) {
    rec.push(entry);
  }
  rec.sort((word1, word2) => {
    return cnt.get(word1) === cnt.get(word2)
      ? word1.localeCompare(word2)
      : cnt.get(word2) - cnt.get(word1);
  });
  return rec.slice(0, k);
};
```
