# 压缩字符串

给你一个字符数组 chars ，请使用下述算法压缩：

从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：

- 如果这一组长度为 1 ，则将字符追加到 s 中。
- 否则，需要向 s 追加字符，后跟这一组的长度。
- 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。

请在 修改完输入数组后 ，返回该数组的新长度。

你必须设计并实现一个只使用常量额外空间的算法来解决此问题。

示例 1：

```javascript
输入：chars = ["a","a","b","b","c","c","c"]
输出：返回 6 ，输入数组的前 6 个字符应该是：["a","2","b","2","c","3"]
解释："aa" 被 "a2" 替代。"bb" 被 "b2" 替代。"ccc" 被 "c3" 替代。
```

示例 2：

```javascript
输入：chars = ["a"]
输出：返回 1 ，输入数组的前 1 个字符应该是：["a"]
解释：唯一的组是“a”，它保持未压缩，因为它是一个字符。
```

示例 3：

```javascript
输入：chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
输出：返回 4 ，输入数组的前 4 个字符应该是：["a","b","1","2"]。
解释：由于字符 "a" 不重复，所以不会被压缩。"bbbbbbbbbbbb" 被 “b12” 替代。
```

提示：

- 1 <= chars.length <= 2000
- chars[i] 可以是小写英文字母、大写英文字母、数字或符号

思路：

对于压缩字符串问题，我们可以通过双指针的方法来遍历字符数组。一个指针用于标记字符重复段的起始位置，另一个指针用于寻找重复段的结束位置。当找到一段重复字符后，根据重复次数决定如何压缩并添加到结果字符串中。这种方法能够按要求对连续重复字符进行处理，且逻辑较为清晰。

1. 首先初始化两个指针，write 用于记录压缩后字符在原数组中的写入位置，初始为 0；count 用于记录当前字符的重复次数，初始为 0。
2. 使用 read 指针遍历原字符数组 chars。
3. 每遍历一个字符，count 就加 1。
4. 当满足以下两个条件之一时进行压缩操作：一是 read 到达数组末尾（read + 1 === chars.length），二是下一个字符与当前字符不同（chars[read + 1]!== chars[read]）。
5. 先将当前字符写入压缩后的位置（chars[write++] = chars[read]）。
6. 如果重复次数 count 大于 1，需要将重复次数也写入。将 count 转换为字符依次写入，并记录写入数字部分的起始位置 start。写入完后，由于数字是从低位到高位写入的，需要将数字部分反转。
7. 最后将 count 重置为 0，继续下一轮的遍历和压缩。
8. 最终返回 write，即压缩后字符数组的长度。

- 时间复杂度：只遍历字符数组一次，虽然在处理重复次数大于 1 时需要一些额外操作，但总体时间复杂度仍为 O(n)，n 是字符数组 chars 的长度。
- 空间复杂度：所有操作都在原字符数组上进行，只使用了几个额外的变量，空间复杂度为 O(1)。

```javascript
var compress = function (chars) {
  let write = 0;
  let count = 0;
  for (let read = 0; read < chars.length; read++) {
    count++;
    if (read + 1 === chars.length || chars[read + 1] !== chars[read]) {
      chars[write++] = chars[read];
      if (count > 1) {
        let start = write;
        while (count > 0) {
          chars[write++] = '' + Math.floor(count % 10);
          count = Math.floor(count / 10);
        }
        // 反转数字部分
        for (let i = start; i < (write + start) / 2; i++) {
          let temp = chars[i];
          chars[i] = chars[write - 1 - (i - start)];
          chars[write - 1 - (i - start)] = temp;
        }
      }
      count = 0;
    }
  }
  return write;
};
```
