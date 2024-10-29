# 除法求值

给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。

另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。

返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0 替代这个答案。

注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

注意：未在等式列表中出现的变量是未定义的，因此无法确定它们的答案。

示例 1：

```js
输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
解释：
条件：a / b = 2.0, b / c = 3.0
问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
注意：x 是未定义的 => -1.0
```

示例 2：

```js
输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
输出：[3.75000,0.40000,5.00000,0.20000]
```

示例 3：

```js
输入：equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
输出：[0.50000,2.00000,-1.00000,-1.00000]
```

提示：

- 1 <= equations.length <= 20
- equations[i].length == 2
- 1 <= Ai.length, Bi.length <= 5
- values.length == equations.length
- 0.0 < values[i] <= 20.0
- 1 <= queries.length <= 20
- queries[i].length == 2
- 1 <= Cj.length, Dj.length <= 5
- Ai, Bi, Cj, Dj 由小写英文字母与数字组成

思路：

## 题目的整理分析

这道题目的关键在于根据给定的变量对之间的除法等式，求解其他变量对之间的除法结果。可以将变量看作节点，等式看作有向边，值看作边的权重，从而构建一个图结构。采用深度优先搜索（DFS）的方法来遍历这个图，通过构建邻接表来表示图，在搜索过程中计算从源节点到目标节点的路径权重乘积，以此得到除法结果。

1. 首先初始化一个 Map 对象 map 用于存储邻接表，一个空数组 res 用于存储结果，以及一个 Map 对象 visit 用于标记在搜索过程中节点是否被访问过。
2. 定义深度优先搜索函数 dfs(src, dst)：
   - 如果 src 等于 dst，说明找到了目标节点，返回 1.0，表示成功到达。
   - 获取 src 的邻接节点列表 adjs。
   - 遍历 adjs 中的每个邻接节点 next：
     - 如果 next[0]没有被访问过，则将其标记为已访问（visit.set(next[0], true)），然后对 next[0]递归调用 dfs 函数，获取从 next[0]到 dst 的路径权重乘积 ret。
     - 将 next[0]的访问标记恢复为未访问（visit.set(next[0], false)）。
     - 如果 ret 不等于 - 1.0，说明找到了从 src 到 dst 的路径，返回当前边权重 next[1]与 ret 的乘积。
   - 如果没有找到从 src 到 dst 的路径，返回 - 1.0。
3. 构建邻接表：
   - 遍历 equations 数组，对于每个等式 equations[i]和对应的值 values[i]：
     - 如果 map 中不存在当前变量 e[0]，则在 map 和 visit 中添加该变量，并初始化其邻接表为空数组。
     - 如果 map 中不存在当前变量 e[1]，则在 map 和 visit 中添加该变量，并初始化其邻接表为空数组。
     - 获取 e[0]和 e[1]的邻接表 adj1 和 adj2，将[e[1], v]添加到 adj1 中，将[e[0], 1 / v]添加到 adj2 中。
4. 求解查询：
   - 遍历 queries 数组中的每个查询 q：
     - 如果 map 中存在 n0 和 n1，则将 n0 标记为已访问，调用 dfs(n0, n1)并将结果添加到 res 中，然后将 n0 的访问标记恢复为未访问。
     - 如果 map 中不存在 n0 或 n1，则将 - 1.0 添加到 res 中。
5. 最后返回 res，即所有查询的结果。

时间复杂度：在最坏情况下，对于每个查询，都需要遍历图中的大部分节点。构建邻接表的时间复杂度为 O(e)，其中 e 是 equations 的长度。对于每个查询，深度优先搜索的时间复杂度最坏情况下为 O(v + e)，其中 v 是变量的数量（最多为 100，因为每个变量长度最多为 5 且总共有 20 个等式），e 是边的数量。总的时间复杂度为 O(q(v + e)+ e)，近似为 O(qv + qe)，其中 q 是 queries 的长度。
空间复杂度：需要存储邻接表和访问标记，空间复杂度为 O(v + e)，其中 v 是变量的数量，e 是边的数量。

```js
var calcEquation = function (equations, values, queries) {
  let map = new Map(),
    res = [];
  let visit = new Map();
  // visit 数组标记在搜索过程中是否访问过
  const dfs = (src, dst) => {
    // 若可达，且找到了目的节点，返回 1.0 表示成功到达
    if (src === dst) {
      return 1.0;
    }
    let adjs = map.get(src);
    // 遍历 src 的所有边，若未访问过，则对其调用 dfs 获取路径积
    for (let i = 0; i < adjs.length; ++i) {
      let next = adjs[i];
      if (!visit.get(next[0])) {
        visit.set(next[0], true);
        let ret = dfs(next[0], dst);
        visit.set(next[0], false);
        // 若可达 dst，则返回当前边权与后续的边权积 ret 的乘积
        if (ret !== -1.0) {
          return next[1] * ret;
        }
      }
    }
    // 否则，不可达，返回 -1.0
    return -1.0;
  };
  // 创建邻接表
  for (let i = 0; i < equations.length; ++i) {
    let e = equations[i],
      v = values[i];
    if (!map.has(e[0])) {
      map.set(e[0], []);
      visit.set(e[0], false);
    }
    if (!map.has(e[1])) {
      map.set(e[1], []);
      visit.set(e[1], false);
    }
    let adj1 = map.get(e[0]);
    let adj2 = map.get(e[1]);
    adj1.push([e[1], v]);
    adj2.push([e[0], 1 / v]);
  }
  for (let q of queries) {
    let n0 = q[0],
      n1 = q[1];
    if (map.has(n0) && map.has(n1)) {
      visit.set(n0, true);
      res.push(dfs(n0, n1));
      visit.set(n0, false);
    } else {
      res.push(-1.0);
    }
  }
  return res;
};
```
