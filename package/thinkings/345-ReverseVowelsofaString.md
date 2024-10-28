# 反转字符串中的元音字母

给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

示例 1：

```javascript
输入：s = "IceCreAm"
输出："AceCreIm"
解释：
s 中的元音是 ['I', 'e', 'e', 'A']。反转这些元音，s 变为 "AceCreIm".
```

示例 2：

```javascript
输入：s = "leetcode"
输出："leotcede"
```

提示：

- 1 <= s.length <= 3 \* 10^5
- s 由 可打印的 ASCII 字符组成

思路：
这道题的解题思路是通过双指针法来实现。首先将字符串转换为字符数组，方便操作。然后使用两个指针，一个从字符串头部开始，一个从字符串尾部开始，分别寻找元音字母。当两个指针都找到元音字母时，交换它们的位置。不断重复这个过程，直到两个指针相遇。这种方法利用了双指针的特性，能够在一次遍历中解决问题。

1. 首先将字符串 s 转换为字符数组 arr，方便后续操作。
2. 初始化两个指针 i 为 0，j 为字符串长度 n - 1。
3. 在 while 循环中：
   - 第一个内层 while 循环用于让指针 i 找到一个元音字母。只要 i 小于 n 且 arr [i] 不是元音字母，就将 i 加 1。
   - 第二个内层 while 循环用于让指针 j 找到一个元音字母。只要 j 大于 0 且 s [j] 不是元音字母，就将 j 减 1。
   - 当 i 小于 j 时，如果两个指针都找到了元音字母，就调用 swap 函数交换它们在字符数组中的位置，然后将 i 加 1，j 减 1，继续寻找下一对元音字母进行交换。
4. 最后将处理后的字符数组通过 join 方法转换回字符串并返回。

时间复杂度：在最坏情况下，需要遍历整个字符串两次（两个指针分别遍历），时间复杂度为 O (n)，其中 n 是字符串的长度。
空间复杂度：将字符串转换为字符数组，需要额外的空间来存储字符数组，空间复杂度为 O (n)。不过由于这是原地修改操作，没有额外的大规模数据结构，所以实际的空间复杂度可以认为是 O (1)（不考虑字符数组本身的存储）。

```javascript
var reverseVowels = function (s) {
  const n = s.length;
  const arr = Array.from(s);
  let i = 0,
    j = n - 1;
  while (i < j) {
    while (i < n && !isVowel(arr[i])) {
      ++i;
    }
    while (j > 0 && !isVowel(s[j])) {
      --j;
    }
    if (i < j) {
      swap(arr, i, j);
      ++i;
      --j;
    }
  }
  return arr.join('');
};

const isVowel = (ch) => {
  return 'aeiouAEIOU'.indexOf(ch) >= 0;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
```
