# 比较版本号

给你两个版本号 version1 和 version2 ，请你比较它们。

版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由 多位数字 组成，可能包含 前导零 。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，2.5.33 和 0.1 都是有效的版本号。

比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 忽略任何前导零后的整数值 。也就是说，修订号 1 和修订号 001 相等 。如果版本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1 ，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 < 1 。

返回规则如下：

- 如果  version1 > version2  返回  1，
- 如果  version1 < version2 返回 -1，
- 除此之外返回 0。

**示例 1：**

```js
输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
```

**示例 2：**

```js
输入：version1 = "1.0", version2 = "1.0.0"
输出：0
解释：version1 没有指定下标为 2 的修订号，即视为 "0"
```

**示例 3：**

```js
输入：version1 = "0.1", version2 = "1.1"
输出：-1
解释：version1 中下标为 0 的修订号是 "0"，version2 中下标为 0 的修订号是 "1" 。0 < 1，所以 version1 < version2
```

**示例 4：**

```js
输入：version1 = "1.0.1", version2 = "1"
输出：1
```

**示例 5：**

```js
输入：version1 = "7.5.2.4", version2 = "7.5.3"
输出：-1
```

**提示：**

- 1 <= version1.length, version2.length <= 500
- version1 和 version2 仅包含数字和 '.'
- version1 和 version2 都是 有效版本号
- version1 和 version2 的所有修订号都可以存储在 32 位整数 中

**思路：**

就 split 成数组，然后对每一位 `parseInt()` 比较大小，该位没有值赋值为 0


1. 分割版本号：使用split('.')方法将version1和version2分割成数组。
2. 确定最长长度：使用Math.max()确定两个数组中较长的长度。
3. 逐个比较：使用for循环从0到最长长度的索引进行比较。
4. 处理缺失修订号：如果某个索引上的修订号不存在，则将其设置为0。
5. 比较修订号：使用parseInt()将字符串转换为整数进行比较。
6. 返回结果：在比较过程中，一旦发现某个修订号较大或较小，返回相应的1或-1。
7. 处理相等情况：如果所有已比较的修订号都相等，继续比较下一个修订号。

这种方法的时间复杂度是O(n)，其中n是版本号中修订号的数量。空间复杂度是O(1)，因为只使用了常数级别的额外空间来存储中间结果

```js
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = (version1, version2) => {
  const list1 = version1.split('.');
  const list2 = version2.split('.');
  const len = Math.max(list1.length, list2.length);

  for (let i = 0; i < len; i += 1) {
    const num1 = i < list1.length ? parseInt(list1[i]) : 0;
    const num2 = i < list2.length ? parseInt(list2[i]) : 0;

    if (num1 > num2) {
      return 1;
    }
    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};
```
