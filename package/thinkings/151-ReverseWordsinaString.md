# 反转字符串中的单词

给你一个字符串 s ，请你反转字符串中 单词 的顺序。

单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

注意：输入字符串 s 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

示例 1：

```javascript
输入：s = "the sky is blue"
输出："blue is sky the"
```

示例 2：

```javascript
输入：s = "  hello world  "
输出："world hello"
解释：反转后的字符串中不能存在前导空格和尾随空格。
```

示例 3：

```javascript
输入：s = "a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
```

提示：

- 1 <= s.length <= 10^4
- s 包含英文大小写字母、数字和空格 ' '
- s 中 至少存在一个 单词

进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 O(1) 额外空间复杂度的 原地 解法。

思路：

1. 去除前导和尾随空格：使用 trim() 方法去除输入字符串 s 的前导和尾随空格。
2. 分割字符串：使用 split(/\s+/) 方法将字符串 s 按一个或多个空格分割成单词数组。
3. 反转单词顺序：使用两个指针 left 和 right 分别从数组的两端开始，交换元素直到 left 大于 right。
4. 连接单词：使用 join(' ') 方法将反转后的单词数组连接成一个字符串，并以单个空格分隔。

时间复杂度：O(n)，其中 n 是字符串 s 的长度。需要遍历整个字符串一次以分割单词，然后再遍历一次以反转单词顺序。
空间复杂度：O(n)，其中 n 是字符串 s 的长度。需要创建一个额外的数组来存储分割后的单词。

```js
var reverseWords = function (s) {
  let list = s.trim().split(/\s+/);
  let left = 0,
    right = list.length - 1;

  for (; left <= right; left++, right--) {
    [list[left], list[right]] = [list[right], list[left]];
  }

  return list.join(' ');
};
```