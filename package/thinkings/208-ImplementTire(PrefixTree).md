# 实现 Trie (前缀树)

Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。

请你实现 Trie 类：

Trie() 初始化前缀树对象。
void insert(String word) 向前缀树中插入字符串 word 。
boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

示例：

```js
输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
```

提示：

1. 1 <= word.length, prefix.length <= 2000
2. word 和 prefix 仅由小写英文字母组成
3. insert、search 和 startsWith 调用次数 总计 不超过 3 \* 10^4 次

思路：

1. 初始化 Trie：使用一个对象 children 来存储子节点。这个对象的键是字符，值是另一个 Trie 节点。
2. 插入字符串：通过遍历字符串的每个字符，逐步构建 Trie。如果字符对应的子节点不存在，则创建一个新的节点。
3. 搜索字符串：通过遍历字符串的每个字符，检查是否存在这样的路径。如果路径存在且最后一个节点的 isEnd 属性为 true，则表示字符串存在于 Trie 中。
4. 检查前缀：与搜索字符串类似，但不需要检查 isEnd 属性。只要路径存在即可。

时间复杂度：

- insert 方法：O(m)，其中 m 是插入单词的长度。
- search 方法：O(m)，其中 m 是搜索单词的长度。
- startsWith 方法：O(m)，其中 m 是前缀的长度。

空间复杂度：O(n)，其中 n 是所有插入单词的总字符数。在最坏的情况下，每个字符都不同，每个字符都可能成为 Trie 的一个节点。

```javascript
var Trie = function () {
  this.children = {};
};

Trie.prototype.insert = function (word) {
  let node = this.children;
  for (const ch of word) {
    if (!node[ch]) {
      node[ch] = {};
    }
    node = node[ch];
  }
  node.isEnd = true; // 标记单词结束
};

Trie.prototype.search = function (word) {
  let node = this.searchPrefix(word);
  return node !== undefined && node.isEnd;
};

Trie.prototype.startsWith = function (prefix) {
  return this.searchPrefix(prefix) !== undefined;
};

Trie.prototype.searchPrefix = function (str) {
  let node = this.children;
  for (const ch of str) {
    if (!node[ch]) {
      return undefined;
    }
    node = node[ch];
  }
  return node;
};
```
