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

```js
var judgeSquareSum = function(c) {
    for (let a = 0; a * a <= c; a++) {
        const b = Math.sqrt(c - a * a);
        if (b === parseInt(b)) {
            return true;
        }
    }
    return false;
};
```
