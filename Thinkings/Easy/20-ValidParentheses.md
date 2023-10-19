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

思路：

用栈的后进先出来解决左括号和右括号对应的问题

1. 首先，定义一个栈 bracketStack 用来存储未匹配的左括号。
2. 然后，遍历输入的字符串 s。对于每一个字符 char，如果它是左括号（‘(’、‘[’ 或 ‘{’），那么将它压入栈中。
3. 如果 char 是右括号，那么需要检查栈是否为空。如果栈为空，那么说明没有对应的左括号与当前的右括号匹配，所以返回 false。
4. 如果栈不为空，那么取出栈顶的左括号 oldChar，并检查它是否与当前的右括号匹配。如果不匹配，那么返回 false。
5. 最后，如果所有的字符都已经遍历完，那么检查栈是否为空。如果栈为空，那么说明所有的左括号都已经被匹配，所以返回 true。否则，返回 false。

这段代码的时间复杂度是 O(n)，其中 n 是字符串的长度。这是因为每个字符只会被遍历一次。空间复杂度是 O(n)，因为在最坏的情况下，所有的字符都会被压入栈中。

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
