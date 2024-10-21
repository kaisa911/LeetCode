# 重新安排行程

给你一份航线列表 tickets ，其中 tickets[i] = [fromi, toi] 表示飞机出发和降落的机场地点。请你对该行程进行重新规划排序。

所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。如果存在多种有效的行程，请你按字典排序返回最小的行程组合。

- 例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前。
  假定所有机票至少存在一种合理的行程。且所有的机票 必须都用一次 且 只能用一次。

示例 1：
![image](https://assets.leetcode.com/uploads/2021/03/14/itinerary1-graph.jpg)

```javascript
输入：tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
输出：["JFK","MUC","LHR","SFO","SJC"]
```

示例 2：
![image](https://assets.leetcode.com/uploads/2021/03/14/itinerary2-graph.jpg)

```javascript
输入：tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
输出：["JFK","ATL","JFK","SFO","ATL","SFO"]
解释：另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"] ，但是它字典排序更大更靠后。
```

提示：

- 1 <= tickets.length <= 300
- tickets[i].length == 2
- fromi.length == 3
- toi.length == 3
- fromi 和 toi 由大写英文字母组成
- fromi != toi

思路：
这道题可以通过构建图来解决，思路是先将机票信息转化为邻接表来表示图结构。选择这种方法是因为题目本质上是在一个有向图中寻找一条经过所有边且字典序最小的路径，构建邻接表可以方便地表示节点之间的连接关系。使用深度优先搜索（DFS）来遍历图，尝试不同的路径，找到符合要求的行程。

1. 首先初始化结果数组 res，将起点 'JFK' 放入其中，并创建一个空对象 map 来存储邻接表。
2. 遍历机票列表 tickets：
   - 对于每张机票，获取出发地 from 和目的地 to，若 map 中还没有 from 对应的数组，则初始化一个空数组，然后将 to 添加到 from 对应的数组中，这样就构建了邻接表。
3. 对邻接表中的每个城市的目的地数组进行排序，以保证按字典序选择路径。
4. 定义 dfs 函数：
   - 传入当前城市 city 和已使用的机票数量 used。
   - 当 used 等于机票总数 tickets.length 时，表示找到了一条完整的行程，返回 true。
   - 获取当前城市的下一站城市列表 nextCities，若不存在下一站城市或者下一站城市列表为空，则返回 false，因为还没使用完所有机票却没有可去的地方了。
   - 遍历下一站城市列表：
     - 选择一个下一站 next，将其从列表中移除（模拟已使用这张机票），并将其添加到 res 中。
     - 调用 dfs (next, used + 1) 进行递归，如果在这个递归分支中能找到完整行程，则返回 true；否则，将移除的城市重新插入到列表中，并将其从 res 中移除，尝试其他分支。
5. 从 'JFK' 开始调用 dfs 函数，最后返回 res。

时间复杂度：构建邻接表的时间复杂度为 O (n)，其中 n 是机票数量。在最坏情况下，对于每个城市可能需要遍历所有的机票来构建路径，由于有 n 张机票，且每次递归可能需要遍历剩余的机票，时间复杂度接近 O (n!)，但实际由于有剪枝操作（找不到路径时会回溯），时间复杂度会低于这个理论值。
空间复杂度：使用了一个邻接表来存储图结构，空间复杂度为 O (n)，另外还有递归调用栈的空间，在最坏情况下，递归深度可能达到 n，所以总的空间复杂度为 O (n)。

```javascript
const findItinerary = (tickets) => {
  const res = ['JFK']; // 初始放入起点'JFK'
  const map = {}; // 邻接表

  for (const ticket of tickets) {
    // 遍历tickets，建表
    const [from, to] = ticket; // 每一张机票，读出起点和终点
    if (!map[from]) {
      map[from] = []; // 初始化
    }
    map[from].push(to); // 建立映射
  }

  for (const city in map) {
    // 按照字母顺序，小的在前
    map[city].sort();
  }

  const dfs = (city, used) => {
    // city是当前访问的城市、used是已用掉的机票数
    if (used == tickets.length) {
      // 用光了所有机票，路径找到了
      return true;
    }
    const nextCities = map[city]; // 获取下一站能去的城市list
    if (!nextCities || nextCities.length == 0) {
      // 没有邻接城市了
      return false; // 还没用光机票，就没有下一站了，返回false
    }
    for (let i = 0; i < nextCities.length; i++) {
      // 设置出各种选项（递归分支）
      const next = nextCities[i]; // 当前选择的下一站
      nextCities.splice(i, 1); // 飞出地的list中删掉这一站
      res.push(next); // 将该选择推入res
      if (dfs(next, used + 1)) {
        // 在该递归分支中能找到一个用完所有机票的路径
        return true;
      } else {
        nextCities.splice(i, 0, next); // 将删掉的这一站重新插回去
        res.pop(); // 推入res的选择，也撤销
      }
    }
  };

  dfs('JFK', 0); // 从'JFK'城市开始遍历，当前用掉0张机票
  return res;
};
```
