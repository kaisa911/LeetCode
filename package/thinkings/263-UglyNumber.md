# 丑数

编写一个程序判断给定的数是否为丑数。

丑数就是只包含质因数  2, 3, 5  的正整数。

**示例 1:**

```
输入: 6
输出: true
解释: 6 = 2 × 3
```

**示例 2:**

```
输入: 8
输出: true
解释: 8 = 2 × 2 × 2
```

**示例  3:**

```
输入: 14
输出: false
解释: 14 不是丑数，因为它包含了另外一个质因数 7。
```

**说明：**

- 1  是丑数。
- 输入不会超过 32 位有符号整数的范围: [−2^31,  2^31 − 1]。

**思路：**

1. 输入检查：首先检查num是否小于或等于0。如果小于或等于0，直接返回false，因为丑数是正整数。
2. 循环处理：使用while循环，当num大于或等于2时，执行循环体。
3. 去除质因数：在循环中，我们检查num能否被2、3或5整除：
  - 如果能被2整除，就用2去除num。
  - 如果不能被2整除，但能被3整除，就用3去除num。
  - 如果不能被2或3整除，但能被5整除，就用5去除num。
4. 非丑数判断：如果在任何时候num不能被2、3或5整除，那么它包含除了2、3、5之外的质因数，因此不是丑数，函数返回false。
4. 结束条件：当num小于2时，循环结束。此时，如果num等于1，说明所有因子都是2、3或5，因此原数是丑数，函数返回true；如果num不等于1，则原数不是丑数，函数返回false。


时间复杂度是O(log n)，其中n是输入的数值，因为每次循环都将num除以一个小于或等于num的数，所以循环次数不会超过num的对数。
空间复杂度是O(1)，因为只使用了常数级别的额外空间。

```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num <= 0) {
    return false; // 丑数是正整数，所以非正数不是丑数
  }
  // 循环去除2, 3, 5
  while (num >= 2) {
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 3 === 0) {
      num = num / 3;
    } else if (num % 5 === 0) {
      num = num / 5;
    } else {
      // 如果不能被2, 3, 5整除，则不是丑数
      return false;
    }
  }
  // 如果最终结果是1，则是丑数
  return num === 1;
};
```
