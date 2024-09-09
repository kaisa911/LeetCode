# 同构字符串

给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

示例 1:

```javascript
输入：s = "egg", t = "add"
输出：true
```

示例 2：

```javascript
输入：s = "foo", t = "bar"
输出：false
```

示例 3：

```javascript
输入：s = "paper", t = "title"
输出：true
```

提示：

- 1 <= s.length <= 5 \* 10^4
- t.length == s.length
- s 和 t 由任意有效的 ASCII 字符组成

思路：

1. 检查长度：首先检查两个字符串 s 和 t 的长度是否相等。如果长度不相等，则它们不可能是同构的。
2. 初始化映射：创建两个映射对象 s2t 和 t2s，分别用于存储从字符串 s 到 t 的映射和从 t 到 s 的映射。
3. 遍历字符串：遍历字符串 s（同时对应地遍历字符串 t），对于每个字符对 (x, y)：
   - 检查 x 是否已经在 s2t 中有映射，并且映射值是否等于 y。
   - 检查 y 是否已经在 t2s 中有映射，并且映射值是否等于 x。
   - 如果上述两个条件中任意一个不满足，则说明两个字符串不是同构的，返回 false。
   - 否则，将字符对 (x, y) 添加到两个映射中。
4. 返回结果：如果遍历完成后没有发现不满足同构条件的字符对，则返回 true。

时间复杂度：O(n)，其中 n 是字符串 s 的长度。需要遍历字符串一次。
空间复杂度：O(min(m, n))，其中 m 和 n 分别是字符串 s 和 t 的长度。在最坏的情况下，可能需要存储所有字符的映射关系。

```javascript
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const s2t = {};
  const t2s = {};
  const len = s.length;
  for (let i = 0; i < len; ++i) {
    const x = s[i],
      y = t[i];
    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
      return false;
    }
    s2t[x] = y;
    t2s[y] = x;
  }
  return true;
}
```
