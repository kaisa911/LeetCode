# 赎金信

给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

**注意：**

你可以假设两个字符串均只含有小写字母。

```js
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

**思路：**
思路比较简单，就是把杂志变成数组，遍历信的每一个字符，有字符就把它剔除掉
如果遍历完了还有就都剔除了，那就是 true，否则就是 false

```js
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  magazine = magazine.split('');
  for (let i = 0, len = ransomNote.length; i < len; i++) {
    if (magazine.indexOf(ransomNote[i]) != -1) {
      magazine.splice(magazine.indexOf(ransomNote[i]), 1);
    } else return false;
  }
  return true;
};
```
