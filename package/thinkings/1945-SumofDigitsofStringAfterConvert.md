# 字符串转化后的各位数字之和

给你一个由小写字母组成的字符串 s ，以及一个整数 k

首先，用字母在字母表中的位置替换该字母，将 s 转化 为一个整数（也就是，'a' 用 1 替换，'b' 用 2 替换，... 'z' 用 26 替换）。接着，将整数 转换 为其 各位数字之和 。共重复 转换 操作 k 次 。

例如，如果 s = "zbax" 且 k = 2 ，那么执行下述步骤后得到的结果是整数 8 ：

转化："zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
转换 #1：262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
转换 #2：17 ➝ 1 + 7 ➝ 8
返回执行上述操作后得到的结果整数。

**示例 1：**

```js
输入：s = "iiii", k = 1
输出：36
解释：操作如下：

- 转化："iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
- 转换 #1：9999 ➝ 9 + 9 + 9 + 9 ➝ 36
因此，结果整数为 36 。
```

**示例 2：**

```js
输入：s = "leetcode", k = 2
输出：6
解释：操作如下：

- 转化："leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
- 转换 #1：12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
- 转换 #2：33 ➝ 3 + 3 ➝ 6
因此，结果整数为 6 。
```

**提示：**

- 1 <= s.length <= 100
- 1 <= k <= 10
- s 由小写英文字母组成

**思路：**

首先，我们需要将字符串中的每个字母根据其在字母表中的位置转换为数字，并将这些数字拼接成一个数字字符串。然后，对这个数字进行多次的各位数字求和操作。解题的关键在于准确地进行字母到数字的转换，并高效地计算各位数字之和。选择这种逐步处理的方法是因为它直观且易于理解和实现。

1. 首先遍历输入字符串 `s`，将每个字母转换为对应的数字。对于小于 10 的数字直接拼接，大于 10 的数字转换为字符串再拼接，得到数字字符串 `numStr`。
2. 初始化当前数字 `curNum` 为 `numStr` 转换后的整数。
3. 进行 `k` 次循环，每次循环计算当前数字的各位数字之和，更新当前数字。通过取余运算获取个位数字累加到 `sum` 中，然后通过整除运算去掉个位数字，直到当前数字为 0。
4. 循环结束后，返回最终的数字。

时间复杂度：O(nk)，其中 `n` 是字符串 `s` 的长度。外层循环 `k` 次，每次循环中对数字的处理时间与数字的位数有关，平均情况下数字的位数与 `n` 成正比。
空间复杂度：O(n)，主要用于存储转换后的数字字符串。

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = (s, k) => {
  let numStr = '';
  for (let char of s) {
    let num = char.charCodeAt() - 96;
    numStr += num < 10 ? num : num.toString();
  }

  let curNum = parseInt(numStr);
  for (let i = 0; i < k; i++) {
    let sum = 0;
    while (curNum > 0) {
      sum += curNum % 10;
      curNum = Math.floor(curNum / 10);
    }
    curNum = sum;
  }
  return curNum;
};
```