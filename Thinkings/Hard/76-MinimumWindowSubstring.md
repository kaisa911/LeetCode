# 最小覆盖子串

给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。

示例 1：

```js
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
```

示例 2：

```js
输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。
```

示例 3:

```js
输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
```

提示：

- m == s.length
- n == t.length
- 1 <= m, n <= 105
- s 和 t 由英文字母组成

进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？

思路：

这个问题可以通过滑动窗口的方法来解决。以下是算法的基本步骤：

1. 统计目标字符：使用哈希表 recordMap 记录字符串 t 中每个字符出现的次数，并计算 t 中不重复字符的总数 wordCount。
2. 初始化指针和结果：设置左右指针 left 和 right，用于表示当前考虑的子串范围，以及用于存储当前满足条件的最小子串 result 和临时子串 tempResult。
3. 扩展窗口：通过增加 right 指针来扩展窗口，将 s[right] 加入 tempResult，并更新字符计数。如果 s[right] 是 t 中的字符，则减少 recordMap 中对应的计数，并检查是否需要减少 wordCount。
4. 收缩窗口：当 wordCount 为 0 时，说明当前窗口包含了 t 中所有字符。尝试通过移动 left 指针来收缩窗口，找到满足条件的最小子串。更新 recordMap 和 wordCount，同时更新 result。
5. 更新结果：每次窗口包含 t 中所有字符时，检查并更新 result，以保持最小长度的子串。
6. 返回结果：如果最终没有找到满足条件的子串，返回空字符串 ""。

时间复杂度：O(m+n)，其中 m 是字符串 s 的长度，n 是字符串 t 的长度。算法只遍历了 s 和 t 一次。
空间复杂度：O(k)，其中 k 是 t 中不同字符的数量。这是因为我们使用了一个哈希表来存储字符计数。

```js
var minWindow = function (s, t) {
  let recordMap = new Map(),
    wordCount = 0;
  for (let i = 0; i < t.length; i++) {
    let val = recordMap.get(t[i]);
    if (val) {
      recordMap.set(t[i], val + 1);
    } else {
      recordMap.set(t[i], 1);
      wordCount += 1;
    }
  }
  let left = 0,
    right = 0,
    result = '',
    tempResult = '';

  while (right <= s.length) {
    if (wordCount > 0) {
      tempResult = tempResult + s[right];
      let temp = recordMap.get(s[right]);
      if (temp !== undefined) {
        recordMap.set(s[right], temp - 1);
        if (temp - 1 === 0) {
          wordCount -= 1;
        }
      }
      right++;
    } else {
      if (result === '' || tempResult.length < result.length) {
        result = tempResult;
      }
      let temp = recordMap.get(s[left]);
      if (temp !== undefined) {
        recordMap.set(s[left], temp + 1);
        if (temp === 0) {
          wordCount += 1;
        }
      }
      tempResult = tempResult.slice(1);
      left++;
    }
  }
  return result;
};
```
