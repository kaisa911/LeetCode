# 翻转单词顺序

输入一个英文句子，单词之间用一个空格隔开，且句首和句尾没有多余空格。

翻转句子中单词的顺序，但单词内字符的顺序不变。

为简单起见，标点符号和普通字母一样处理。

例如输入字符串"I am a student."，则输出"student. a am I"。

数据范围

- 输入字符串长度 [0,1000]。

样例

```js
输入："I am a student."

输出："student. a am I"
```
思路：
1. 分割句子：使用split(' ')根据空格将输入字符串s分割成单词组成的数组。
2. 反转数组：使用reverse方法将单词数组中的元素顺序反转。
3. 重新连接字符串：使用join(' ')将反转后的单词数组元素通过空格连接成一个字符串。
4. 返回结果：返回重新连接后的字符串。

```ts
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .reverse()
    .join(' ');
};
```
