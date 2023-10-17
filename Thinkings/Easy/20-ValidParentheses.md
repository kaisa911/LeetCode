# 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

示例 1：

```js
输入：s = "()"
输出：true
```

示例 2：

```js
输入：s = "()[]{}"
输出：true
```

示例 3：

```js
输入：s = "(]"
输出：false
```

提示：

- 1 <= s.length <= 104
- s 仅由括号 '()[]{}' 组成

```js
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  let bracketStack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (char === '(' || char === '[' || char === '{') {
      bracketStack.push(char);
    } else {
      if (bracketStack.length === 0) {
        return false;
      }

      let oldChar = bracketStack.pop();
      if (oldChar === '(' && char !== ')') {
        return false;
      } else if (oldChar === '[' && char !== ']') {
        return false;
      } else if (oldChar === '{' && char !== '}') {
        return false;
      }
    }
  }

  return bracketStack.length === 0;
};
```
