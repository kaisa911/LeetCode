# 搜索推荐系统

给你一个产品数组 products 和一个字符串 searchWord ，products  数组中每个产品都是一个字符串。

请你设计一个推荐系统，在依次输入单词 searchWord 的每一个字母后，推荐 products 数组中前缀与 searchWord 相同的最多三个产品。如果前缀相同的可推荐产品超过三个，请按字典序返回最小的三个。

请你以二维列表的形式，返回在输入 searchWord 每个字母后相应的推荐产品的列表。

示例 1：

```javascript
输入：products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
输出：[
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
解释：按字典序排序后的产品列表是 ["mobile","moneypot","monitor","mouse","mousepad"]
输入 m 和 mo，由于所有产品的前缀都相同，所以系统返回字典序最小的三个产品 ["mobile","moneypot","monitor"]
输入 mou， mous 和 mouse 后系统都返回 ["mouse","mousepad"]
```

示例 2：

```javascript
输入：products = ["havana"], searchWord = "havana"
输出：[["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
```

示例 3：

```javascript
输入：products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
输出：[["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
```

示例 4：

```javascript
输入：products = ["havana"], searchWord = "tatiana"
输出：[[],[],[],[],[],[],[]]
```

提示：

- 1 <= products.length <= 1000
- 1 <= Σ products[i].length <= 2 * 10^4
- products[i] 中所有的字符都是小写英文字母。
- 1 <= searchWord.length <= 1000
- searchWord 中所有字符都是小写英文字母。

思路：

对于这个题目，首先需要理解题目要求是根据输入的搜索词的每个字母，找到具有相同前缀的最多三个产品，并按字典序排列。初步思路可以考虑使用数据结构来高效地存储和查找具有相同前缀的产品，比如前缀树（Trie）。选择前缀树的理由是它能够快速地根据前缀进行查找，并且可以方便地存储和管理产品字符串。

1. 首先，创建了一个 Trie 类来构建前缀树的数据结构。
2. 在 `insert` 方法中，遍历输入的单词，为每个字母创建节点，如果当前节点没有对应的子节点，则创建新的节点。同时，如果当前节点的产品列表长度小于 3，就将该单词添加进去。
3. 在 `search` 方法中，根据输入的搜索词的每个字母逐步在 Trie 中查找节点，如果找到则获取节点的产品列表，否则使用空的根节点。
4. 在 `suggestedProducts` 函数中，先对产品列表进行排序，然后创建 Trie 对象，将每个产品插入到 Trie 中，最后根据搜索词进行查找并返回结果。

时间复杂度：

- 对产品列表进行排序的时间复杂度为 O(n log n)，其中 n 是产品的数量。
- 构建 Trie 的时间复杂度为 O(m * n)，m 是单词的平均长度，n 是产品数量。
- 搜索的时间复杂度为 O(k)，k 是搜索词的长度。
总的时间复杂度为 O(n log n + m * n + k)。

空间复杂度：主要取决于 Trie 的存储空间，大约为 O(m * n)，用于存储 Trie 节点和产品信息。

```javascript
var Trie = function () {
  this.root = {
    child: {},
    pro: [],
  };
};
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let c of word) {
    if (!node.child[c]) {
      node.child[c] = {
        child: {},
        pro: [],
      };
    }
    node = node.child[c];
    if (node.pro.length < 3) {
      node.pro.push(word);
    }
  }
};
Trie.prototype.search = function (word) {
  let res = [];
  let node = this.root;
  let empty = new Trie().root;
  for (let c of word) {
    if (node.child[c]) {
      node = node.child[c];
      res.push(node.pro.slice());
    } else {
      node = empty;
      res.push([]);
    }
  }
  return res;
};

var suggestedProducts = function (products, searchWord) {
  products.sort();
  const t = new Trie();
  for (let p of products) {
    t.insert(p);
  }
  return t.search(searchWord);
};
```
