# 平方数之和

给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

示例 1：

```js
输入：c = 5
输出：true
解释：1 *1 + 2* 2 = 5
```

示例 2：

```js
输入：c = 3
输出：false
```

提示：

- 0 <= c <= 2^31 - 1

思路：

拿到这个题目，首先想到的是通过双指针来遍历可能的平方数组合。选择双指针的方法是因为可以通过调整指针来逐步逼近目标值，而且可以有效地控制计算范围，避免不必要的计算。

1. 首先设置两个指针，left 从 0 开始，right 为 Math.floor(Math.sqrt(c))，这是因为两个平方数的和最大不会超过 c 的平方根。
2. 计算当前 left 和 right 对应的平方和 sum。
3. 如果 sum 等于 c，直接返回 true。
4. 如果 sum 小于 c，说明当前的和小了，left 向右移动增加和的值。
5. 如果 sum 大于 c，说明当前的和大了，right 向左移动减小和的值。

时间复杂度：O(sqrt(c))，因为双指针的移动最多不超过 c 的平方根次。
空间复杂度：O(1)，使用了固定的额外空间来存储几个变量。

```js
var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const sum = left * left + right * right;
    if (sum === c) {
      return true;
    } else if (sum < c) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};
```
