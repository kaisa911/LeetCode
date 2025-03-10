# 猜数字大小

我们正在玩猜数字游戏。猜数字游戏的规则如下：

我会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。

如果你猜错了，我会告诉你，我选出的数字比你猜测的数字大了还是小了。

你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有三种可能的情况：

- -1：你猜的数字比我选出的数字大 （即 num > pick）。
- 1：你猜的数字比我选出的数字小 （即 num < pick）。
- 0：你猜的数字与我选出的数字相等。（即 num == pick）。
  返回我选出的数字。

示例 1：

```javascript
输入：n = 10, pick = 6
输出：6
```

示例 2：

```javascript
输入：n = 1, pick = 1
输出：1
```

示例 3：

```javascript
输入：n = 2, pick = 1
输出：1
```

提示：

- 1 <= n <= 2^31 - 1
- 1 <= pick <= n

思路：

这是一个经典的二分查找应用场景。因为要在 1 到 n 这个有序的范围内找到目标数字，每次猜测后能得到猜测数字与目标数字的大小关系，利用这种反馈信息，二分查找是一个非常合适的方法。通过不断缩小可能的数字范围，每次取中间值进行猜测，根据接口返回的结果来决定下一步搜索的区间，能够高效地找到目标数字。

1. 首先初始化搜索区间的左右端点，left 为 1，right 为 n，这是整个可能的数字范围。
2. 在循环中，计算当前区间的中间值 mid。
3. 如果 guess (mid) 返回的值小于等于 0，说明目标数字在 [left, mid] 区间内，于是将 right 更新为 mid，缩小搜索区间到左半部分。
4. 如果 guess (mid) 返回的值大于 0，说明目标数字在 [mid + 1, right] 区间内，于是将 left 更新为 mid + 1，缩小搜索区间到右半部分。
5. 不断重复这个过程，直到 left 和 right 相等，此时找到目标数字，返回 left（或 right，因为它们相等）。

时间复杂度：每次循环都将搜索区间缩小一半，最多需要进行log2(n)次循环就能找到目标数字，所以时间复杂度为O(logn)。
空间复杂度：代码中只使用了几个变量来记录区间端点和中间值，没有使用额外的数据结构来存储数据，所以空间复杂度为O(1)。

```javascript
var guessNumber = function (n) {
  let left = 1,
    right = n;
  while (left < right) {
    // 循环直至区间左右端点相同
    const mid = Math.floor(left + (right - left) / 2);
    if (guess(mid) <= 0) {
      right = mid; // 答案在区间 [left, mid] 中
    } else {
      left = mid + 1; // 答案在区间 [mid+1, right] 中
    }
  }
  // 此时有 left == right，区间缩为一个点，即为答案
  return left;
};
```
