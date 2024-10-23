# 4的幂

给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。

整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x

示例 1：

```javascript
输入：n = 16
输出：true
```

示例 2：

```javascript
输入：n = 5
输出：false
```

示例 3：

```javascript
输入：n = 1
输出：true
```

提示：

-2^31 <= n <= 2^31 - 1

进阶：你能不使用循环或者递归来完成本题吗？

```javascript
/**

* @param {number} num
* @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num == 0) return false;
  else {
    while (num % 4 == 0) {
      num = num / 4;
    }
    if (num == 1) return true;
    else return false;
  }
};
```
