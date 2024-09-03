# 单词接龙 II

按字典 wordList 完成从单词 beginWord 到单词 endWord 转化，一个表示此过程的 转换序列 是形式上像 beginWord -> s1 -> s2 -> ... -> sk 这样的单词序列，并满足：

每对相邻的单词之间仅有单个字母不同。
转换过程中的每个单词 si（1 <= i <= k）必须是字典 wordList 中的单词。注意，beginWord 不必是字典 wordList 中的单词。
sk == endWord
给你两个单词 beginWord 和 endWord ，以及一个字典 wordList 。请你找出并返回所有从 beginWord 到 endWord 的 最短转换序列 ，如果不存在这样的转换序列，返回一个空列表。每个序列都应该以单词列表 [beginWord, s1, s2, ..., sk] 的形式返回。

示例 1：

```js
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
解释：存在 2 种最短的转换序列：
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"
```

示例 2：

```js
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：[]
解释：endWord "cog" 不在字典 wordList 中，所以不存在符合要求的转换序列。
```

提示：

- 1 <= beginWord.length <= 5
- endWord.length == beginWord.length
- 1 <= wordList.length <= 500
- wordList[i].length == beginWord.length
- beginWord、endWord 和 wordList[i] 由小写英文字母组成
- beginWord != endWord
- wordList 中的所有单词 互不相同

思路
1. 初始化：将beginWord添加到wordList的集合中，如果endWord不在集合中，则无法找到路径，直接返回空数组。
2. 构建图：使用一个映射levelMap来存储每个单词所在的层级，wordMap来存储每个单词的邻接单词。
3. 广度优先搜索：使用队列queue进行广度优先搜索，同时使用集合visited记录已访问过的单词。
4. 检查终点词：在搜索过程中，如果遇到endWord，则设置finished为true。
5. 回溯路径：使用深度优先搜索（DFS）来回溯从beginWord到endWord的所有可能路径。
6. 返回结果：返回所有找到的路径。

时间复杂度：最坏情况下为O((L⋅N)⋅(L+logN))，其中 L 是单词长度，N 是wordList中单词的数量。L 来自每个单词的遍历，N 来自队列中的单词数量，logN 来自集合操作。
空间复杂度：O(N)，用于存储wordSet、levelMap、wordMap、visited和queue。

```js
const findLadders = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  wordSet.add(beginWord); // 这个其实要不要都行
  if (!wordSet.has(endWord)) return []; // 单词表中没有终点词，无法变到终点词

  const levelMap = new Map(); // 存放图中的单词所在的层
  const wordMap = new Map(); // 存放图中的单词的邻接单词
  const visited = new Set(); // 记录访问过的节点
  const queue = [beginWord]; // 维护一个队列，初始放入起点词
  visited.add(beginWord); // 入列即访问，存入visited

  let finished = false; // 是否存在变化到终点词的路径
  let level = 0;
  levelMap.set(beginWord, 0); // 起始词的level为0

  while (queue.length) {
    // 队列空了，所有邻接节点就遍历完了
    const levelSize = queue.length; // 当前level的单词个数
    level++; // 遍历当前层的单词，level+1
    for (let i = 0; i < levelSize; i++) {
      // 当前层的单词逐个出列考察
      const word = queue.shift(); // 当前出列的单词

      for (let i = 0; i < word.length; i++) {
        // 遍历单词的所有字符
        for (let c = 97; c <= 122; c++) {
          // 遍历26个字母字符
          const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
          if (!wordSet.has(newWord)) continue; // 不是单词表中的单词就忽略
          if (wordMap.has(newWord))
            // 已经存在于wordMap
            wordMap.get(newWord).push(word); // 对应的数组推入出列的单词
          // 初始化一个数组
          else wordMap.set(newWord, [word]); // 并放入“父单词”

          if (visited.has(newWord)) continue; // 该新单词已经访问过就忽略
          if (newWord == endWord)
            // 遇到了终点词
            finished = true; // 存在抵达终点词的路径

          levelMap.set(newWord, level); // 记录这个单词的level
          queue.push(newWord); // 该新单词是下一层的，入列
          visited.add(newWord); // 入列即访问，记录一下
        }
      }
    }
  }
  if (!finished) return []; // 无法到达终点词，返回[]

  const res = [];
  const dfs = (path, beginWord, word) => {
    if (word == beginWord) {
      // 当前遍历的word，和起始词相同
      res.push([beginWord, ...path]); // 将当前路径推入res数组，加上起始词
      return;
    }
    path.unshift(word); // 将当前单词加入到path数组的开头
    if (wordMap.get(word)) {
      // 当前单词有对应的“父单词”们
      for (const parent of wordMap.get(word)) {
        // 遍历“父单词”们
        if (levelMap.get(parent) + 1 == levelMap.get(word)) {
          // 满足要求的
          dfs(path, beginWord, parent); // 递归dfs
        }
      }
    }
    path.shift(); // 回溯，撤销选择，将path数组开头的单词弹出
  };
  dfs([], beginWord, endWord); // dfs的入口
  return res;
};
```
