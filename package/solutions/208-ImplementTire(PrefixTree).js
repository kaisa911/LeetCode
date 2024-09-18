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
