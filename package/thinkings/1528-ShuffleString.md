# 重新排列字符串

给你一个字符串 s 和一个 长度相同 的整数数组 indices 。

请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。

返回重新排列后的字符串。

示例 1：
![1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/26/q1.jpg)

```javascript
输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
输出："leetcode"
解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。
```

示例 2：

```javascript
输入：s = "abc", indices = [0,1,2]
输出："abc"
解释：重新排列后，每个字符都还留在原来的位置上。
```

提示：

- s.length == indices.length == n
- 1 <= n <= 100
- s 仅包含小写英文字母
- 0 <= indices[i] < n
- indices 的所有的值都是 唯一 的

思路：

题目的整理分析
拿到这个题目，首先要明确需要根据给定的索引数组`indices`来重新排列字符串`s`。一种直观的思路是创建一个数据结构来存储字符和其对应的目标位置，然后按照目标位置依次取出字符组成新的字符串。

1. 首先创建一个与字符串`s`长度相同的空数组`result`，用于存储重新排列后的字符。
2. 通过遍历字符串`s`，对于每个字符，根据当前位置`i`获取对应的目标位置`indices[i]`，将字符存储在`result`数组的目标位置上。
3. 最后使用`join('')`方法将数组`result`转换为字符串并返回。

时间复杂度：O(n)，其中 n 是字符串的长度。需要遍历字符串一次进行字符的重新排列。
空间复杂度：O(n)，创建了一个长度为 n 的数组`result`来存储重新排列的结果。

```javascript
var restoreString = function (s, indices) {
  let result = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s.charAt(i);
  }
  return result.join('');
};
```
