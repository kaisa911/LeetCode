# 划分字母区间

给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。

返回一个表示每个字符串片段的长度的列表。

示例 1：

```js
输入：s = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。
```

示例 2：

```js
输入：s = "eccbbbbdec"
输出：[10]
```

提示：

- 1 <= s.length <= 500
- s 仅由小写英文字母组成

思路：

拿到这个题目，首先需要明确目标是将字符串划分为尽可能多的片段，使得同一字母只出现在一个片段中。我们可以通过记录每个字母最后出现的位置，来确定每个片段的结束位置。从左到右遍历字符串，不断更新当前片段可能的结束位置，当遍历到结束位置时，就将当前片段的长度加入结果数组，并更新起始位置，继续下一个片段的寻找。

1. 首先创建一个长度为 26 的数组 `last` 来记录每个字母最后出现的位置。通过遍历字符串 `s` ，初始化这个数组。
2. 设定两个指针 `start` 和 `end` ，分别表示当前片段的起始位置和可能的结束位置。
3. 遍历字符串，对于每个字符，更新 `end` 为当前字符最后出现位置和当前 `end` 的最大值。
4. 当遍历到的位置 `i` 等于 `end` 时，说明找到了一个完整的片段，将其长度 `end - start + 1` 加入结果数组 `partition` ，并更新 `start` 为 `end + 1` ，准备寻找下一个片段。

时间复杂度：O(n)，其中 n 是字符串 `s` 的长度。需要对字符串进行一次遍历。
空间复杂度：O(1)，虽然创建了一个长度为 26 的数组 `last` ，但这是一个固定大小的额外空间，不随输入规模变化而变化。

```js
var partitionLabels = function (s) {
  const last = new Array(26);
  const length = s.length;
  const codePointA = 'a'.codePointAt(0);
  for (let i = 0; i < length; i++) {
    last[s.codePointAt(i) - codePointA] = i;
  }
  const partition = [];
  let start = 0,
    end = 0;
  for (let i = 0; i < length; i++) {
    end = Math.max(end, last[s.codePointAt(i) - codePointA]);
    if (i == end) {
      partition.push(end - start + 1);
      start = end + 1;
    }
  }
  return partition;
};
```
