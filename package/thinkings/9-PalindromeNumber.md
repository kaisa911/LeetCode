# 回文数

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

**示例 1:**

```js
输入: 121;
输出: true;
```

**示例  2:**

```js
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例 3:**

```js
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

**进阶:**
你能不将整数转为字符串来解决这个问题吗？

**思路：**
这个题和第 7 个题差不多嘛，就是反转数字之后然后对比。
这个也是可以转成字符串然后变成数组，折半对换。
也可以直接用数学的方法除 10 求余。

```js
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  let ori = x,
    pal = 0;
  if (x < 0) {
    return false;
  }
  while (x) {
    pal = pal * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return pal == ori;
};
```