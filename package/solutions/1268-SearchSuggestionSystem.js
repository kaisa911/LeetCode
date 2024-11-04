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
