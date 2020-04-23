# 电话号码的字母组合

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png">

**示例:**

```
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**说明:**
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

**思路：**
使用了回溯思想，先把数据整理一遍，整理出一个 map
创建一个回溯方法，针对字符的长度，如果字符长度===传进来的数字的长度，就退出
否则就继续一层一层的进行

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const strMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const length = digits.length;
  const res = [];
  if (length === 0) return res;

  const backtrace = (combine, len) => {
    if (combine.length === length) {
      res.push(combine);
      return;
    }

    let strNum = digits[len];
    let strWrap = strMap[strNum];
    if (strWrap) {
      for (let i = 0; i < strWrap.length; i++) {
        const letter = strWrap[i];
        backtrace(combine + letter, len + 1);
      }
    }
  };
  backtrace('', 0);
  return res;
};
```
