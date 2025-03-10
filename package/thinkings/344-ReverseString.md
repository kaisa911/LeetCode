# 反转字符串

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

示例 1：

```javascript
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

示例 2：

```javascript
输入：s = ["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

提示：

- 1 <= s.length <= 10^5
- s[i] 都是 ASCII 码表中的可打印字符

思路：
这道题目的解题思路是对字符数组进行反转操作。使用数组的 reverse 方法来实现，这种方法比较简洁直接。它利用了语言内置的功能来完成反转操作。

1. 对于给定的字符数组 s，直接调用其 reverse 方法。
2. 该方法会在原数组上进行操作，将数组中的元素顺序进行反转，不需要额外的空间来存储数据，符合题目要求。

时间复杂度：数组的 reverse 方法通常具有线性时间复杂度，它需要遍历数组中的元素来进行交换操作，时间复杂度为 O (n)，其中 n 是数组 s 的长度。
空间复杂度：由于是在原数组上进行操作，没有使用额外的空间，空间复杂度为 O (1)。

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  return s.reverse();
};
```
