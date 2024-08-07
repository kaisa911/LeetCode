# 整数反转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

**示例  1:**

```js
输入: 123;
输出: 321;
```

**示例 2:**

```js
输入: -123;
输出: -321;
```

**示例 3:**

```
输入: 120
输出: 21
```

**注意:**

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为  [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

**思路：**

1. 初始化结果：res 初始化为 0，用于存储反转后的整数。
2. 循环反转：使用 while 循环，只要 x 不为 0，执行以下操作：

- 取出 x 的最低位数字（x % 10）并加到 res 的末尾。
- 将 x 除以 10 （使用 parseInt 来实现整数除法），去掉最低位数字。

3. 检查溢出：循环结束后，检查 res 是否超出了 32 位有符号整数的范围。如果 res 大于 2^31 - 1 或者 -res 大于 2^31 - 1（即 res 小于 -2^31），则表示反转后的整数溢出。
4. 处理溢出：如果检测到溢出，将 res 设置为 0。
5. 返回结果：返回 res。

```js
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let res = 0;
  while (x) {
    res = res * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (res > Math.pow(2, 31) || -res > Math.pow(2, 31)) {
    res = 0;
  }
  return res;
};
```

思路：

1. 检查符号：首先检查整数是否为负数，如果是，则记住这个符号，并取其绝对值以便处理。
2. 反转数字：将整数转换为字符串，然后反转字符串。
3. 转换回整数：将反转后的字符串转换回整数。
4. 检查溢出：检查转换回的整数是否在 32 位有符号整数的范围内，即是否在 -2^31 到 2^31 - 1 之间。
5. 处理溢出：如果反转后的整数超出范围，返回 0。
6. 恢复符号：如果原始整数是负数，将反转后的整数转换为负数。

```js
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  // 检查符号并取绝对值
  const isNegative = x < 0;
  let num = isNegative ? -x : x;

  // 反转数字
  let reversed = parseInt(num.toString().split('').reverse().join(''), 10);

  // 检查溢出
  if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  // 恢复符号
  return isNegative ? -reversed : reversed;
};
```

两种实现各有优缺点：

- 字符串转换方法：易于理解和实现，但在处理非常大的数字时可能会有性能开销。
- 数学运算方法：避免了字符串操作的开销，可能在某些情况下更高效，但需要更多的逻辑来处理整数除法和溢出检查。
