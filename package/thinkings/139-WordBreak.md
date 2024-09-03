# 单词拆分

给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

示例 1：

```javascript
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
```

示例 2：

```javascript
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。
```

示例 3：

```javascript
输入: (s = 'catsandog'), (wordDict = ['cats', 'dog', 'sand', 'and', 'cat']);
输出: false;
```

提示：

- 1 <= s.length <= 300
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 20
- s 和 wordDict[i] 仅由小写英文字母组成
- wordDict 中的所有字符串 互不相同

思路

1. 初始化：创建一个布尔数组 dp，其中 dp[i]表示字符串 s 的前 i 个字符是否可以用字典中的单词拼接而成。初始化 dp[0]为 true，表示空字符串可以被看作是已经成功拼接。
2. 填充动态规划数组：遍历字符串 s 的每个可能的子串：
   - 对于每个子串，检查它是否可以用字典中的单词拼接而成。
   - 如果可以，更新 dp 数组，将当前子串的结束位置标记为 true。
3. 检查子串：对于每个子串，使用内层循环检查它的所有可能的前缀：
   - 如果前缀可以被成功拼接，并且当前子串是字典中的单词，则将当前子串的结束位置在 dp 数组中标记为 true。
4. 返回结果：遍历结束后，返回 dp[s.length]，即整个字符串 s 是否可以被成功拼接。

时间复杂度：最坏情况下为 O(n^2)，其中 n 是字符串 s 的长度。在最坏情况下，需要检查所有可能的子串。
空间复杂度：O(n)，用于存储动态规划数组。

```javascript
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i] == true) break;
      if (dp[j] == false) continue;
      const suffix = s.slice(j, i);
      if (wordSet.has(suffix) && dp[j] == true) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
```
