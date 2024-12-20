给你一个仅由数字组成的字符串 s，在最多交换一次 相邻 且具有相同 奇偶性 的数字后，返回可以得到的
字典序最小的字符串。

如果两个数字都是奇数或都是偶数，则它们具有相同的奇偶性。例如，5 和 9、2 和 4 奇偶性相同，而 6 和 9 奇偶性不同。

示例 1：

```javascript
输入： s = "45320"
输出： "43520"

解释：
s[1] == '5' 和 s[2] == '3' 都具有相同的奇偶性，交换它们可以得到字典序最小的字符串。
```

示例 2：

```javascript
输入： s = "001"
输出： "001"

解释：
无需进行交换，因为 s 已经是字典序最小的。
```

提示：

- 2 <= s.length <= 100
- s 仅由数字组成。

思路：

这个题目要求我们给定一个字符串 s，我们可以进行最多一次相邻的数字交换，而交换条件是这两个数字必须具有相同的奇偶性。目标是通过这次交换（如果需要的话），返回字典序最小的字符串。

1. 我们首先将字符串转换为字符数组，方便后续操作。
2. 遍历数组，检查每一对相邻的数字。如果它们具有相同的奇偶性并且字典序较大，则交换它们。
3. 在遍历过程中，一旦找到满足条件的交换对，执行交换操作，并立即退出循环，因为题目中说明最多进行一次交换。
4. 交换后直接返回处理后的字符串。
5. 如果遍历过程中没有找到合适的交换对，则返回原字符串，因为已经是字典序最小的情况。

时间复杂度：遍历字符串的时间复杂度是 O(n)，其中 n 是字符串的长度。由于我们只进行一次遍历，不需要额外的嵌套循环，因此时间复杂度为 O(n)。
空间复杂度：由于我们将字符串转换为字符数组，所以需要 O(n) 的空间来存储数组，其他的操作只使用了常数空间。因此，空间复杂度为 O(n)。

```javascript
var getSmallestString = function (s) {
  let arr = s.split('');
  for (let i = 0; i + 1 < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i].charCodeAt(0) % 2 === arr[i + 1].charCodeAt(0) % 2) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      break;
    }
  }
  return arr.join('');
};
```
