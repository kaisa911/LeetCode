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

1. 数字到字母的映射：首先，定义了一个对象 digitToLetters，它作为从单个数字键到相应字母字符串的映射。这个映射基于电话按键上的数字与字母的对应关系。
2. 函数定义：letterCombinations 函数接收一个字符串 digits 作为参数，这个字符串只包含数字 2 到 9。
3. 边界条件处理：如果输入的字符串 digits 为空或长度为 0，直接返回一个空数组，因为没有字母组合可以生成。
4. 初始化结果数组：定义一个数组 res 来存储生成的所有可能的字母组合。
5. 定义回溯函数：backtrace 是一个内部定义的递归函数，它用于生成字母组合。它接收两个参数：index 表示当前处理的 digits 字符串中的索引位置，path 表示到目前为止构建的字母组合。
6. 递归终止条件：如果 index 等于 digits 的长度，说明已经处理完所有数字，此时将当前的字母组合 path 添加到结果数组 res 中。
7. 获取当前数字对应的字母：使用 digitToLetters 映射获取 digits 中当前索引 index 对应的数字键的字母字符串 letters。
8. 递归生成组合：通过一个 for 循环遍历 letters 中的每个字母，并将每个字母添加到当前的字母组合 path 中，然后递归调用 backtrace 函数，索引加 1，继续生成剩余数字的字母组合。
9. 初始递归调用：在 letterCombinations 函数的底部，以索引 0 和空字符串 '' 作为初始参数调用 backtrace 函数，开始递归过程。
10. 返回结果：递归完成后，返回结果数组 res，其中包含了所有可能的字母组合。

这个算法使用了回溯法，它是一种深度优先搜索策略，用于生成所有候选解决方案。在这个问题中，回溯法用于探索所有可能的字母组合，直到找到所有满足条件的组合。这种方法可以确保找到所有可能的组合，而不会重复或遗漏。

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
const digitToLetters = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

const letterCombinations = (digits) => {
  if (digits.length === 0) return [];

  const res = [];
  const backtrace = (index, path) => {
    if (index === digits.length) {
      res.push(path);
      return;
    }

    const letters = digitToLetters[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backtrace(index + 1, path + letters[i]);
    }
  };

  backtrace(0, '');
  return res;
};
```
