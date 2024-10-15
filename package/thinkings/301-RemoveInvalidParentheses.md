# 删除无效的括号

给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。

返回所有可能的结果。答案可以按 任意顺序 返回。

示例 1：

```javascript
输入：s = "()())()"
输出：["(())()","()()()"]
```

示例 2：

```javascript
输入：s = "(a)())()"
输出：["(a())()","(a)()()"]
```

示例 3：

```javascript
输入：s = ")("
输出：[""]
```

提示：

1 <= s.length <= 25
s 由小写英文字母以及括号 '(' 和 ')' 组成
s 中至多含 20 个括号

思路：

删除无效的括号问题是一个组合问题，我们需要找到所有可能的删除方式，使得字符串中的括号有效。这个问题可以通过广度优先搜索（BFS）来解决。

1. 初始化：使用一个集合 currSet 来存储当前层的状态，以及一个数组 res 来存储所有有效的解。
2. BFS 循环：在循环中，我们不断从 currSet 中取出状态，检查是否有效，如果有效则加入到 res 中。然后，对于每个状态，我们尝试删除每个位置的括号，生成新的状态，并加入到下一层的状态集合 nextSet 中。
3. 避免重复：为了避免生成重复的状态，我们使用集合来存储状态，因为集合会自动去除重复元素。
4. 结束条件：当 res 中已经有有效解时，我们可以结束循环，因为这意味着我们已经找到了至少一个有效的解。

时间复杂度：最坏情况下，时间复杂度是 O(2^n \* n)，其中 n 是字符串的长度。这是因为我们可能需要枚举所有可能的删除方式（2^n 种可能），并且对于每种可能，我们需要 O(n)的时间来生成新的状态。
空间复杂度：O(2^n)，这是因为在最坏情况下，我们可能需要存储所有可能的状态。

```javascript
var removeInvalidParentheses = function (s) {
  const res = [];
  let currSet = new Set();

  currSet.add(s);
  while (true) {
    for (const str of currSet) {
      if (isValid(str)) {
        res.push(str);
      }
    }
    if (res.length > 0) {
      return res;
    }
    const nextSet = new Set();
    for (const str of currSet) {
      for (let i = 0; i < str.length; i++) {
        if (i > 0 && str[i] === str[i - 1]) {
          continue;
        }
        if (str[i] === '(' || str[i] === ')') {
          nextSet.add(str.substring(0, i) + str.substring(i + 1));
        }
      }
    }
    currSet = nextSet;
  }
};

const isValid = (str) => {
  let count = 0;

  for (const c of str) {
    if (c === '(') {
      count++;
    } else if (c === ')') {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }

  return count === 0;
};
```
