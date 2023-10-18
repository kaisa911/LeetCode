# 替换空格

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：

```js
输入：s = "We are happy."
输出："We%20are%20happy."
```

限制：

- 0 <= s 的长度 <= 10000

**思路：**

看到这道题，我就想用正则把字符串直接转换了就行，23333

正常的思路：

- 先拿到空格的数目
- 根据空格的数目求出新字符串的长度
- 创建一个数组，长度等于新字符串的长度，用来存放字符
- 创建两个指针，分别指向旧字符串和新字符串的末尾
- 从后往前，把旧字符串的内容都填入到数组中，遇到旧字符串的空格，就添加"%20"
- 把数组转成字符串

```ts
function replaceSpace(s: string): string {
  if (!s.length || !s) return '';

  const originLength: number = s.length; // 原始长度
  let blankNum: number = 0; // 空格的数量

  // 求空格的长度
  for (let i: number = 0; i < originLength; i += 1) {
    if (s[i] === ' ') {
      blankNum += 1;
    }
  }

  const newLength: number = originLength + 2 * blankNum; // 新字符串的长度
  let originTail: number = originLength - 1; // P1指针
  let newTail: number = newLength - 1; // P2指针
  const res: string[] = new Array(newLength);

  if (newLength <= originLength) {
    return s;
  }

  while (originTail >= 0) {
    if (s[originTail] === ' ') {
      res[newTail--] = '0';
      res[newTail--] = '2';
      res[newTail--] = '%';
    } else {
      res[newTail--] = s[originTail];
    }
    --originTail;
  }
  return res.join('');
}
```

```js
function replaceSpace(s: string): string {
  let list = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      list.push('%20');
    } else {
      list.push(s[i]);
    }
  }
  return list.join('');
}
```
