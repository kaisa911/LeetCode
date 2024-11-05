# 钥匙和房间

有 n 个房间，房间按从 0 到 n - 1 编号。最初，除 0 号房间外的其余所有房间都被锁住。你的目标是进入所有的房间。然而，你不能在没有获得钥匙的时候进入锁住的房间。

当你进入一个房间，你可能会在里面找到一套 不同的钥匙，每把钥匙上都有对应的房间号，即表示钥匙可以打开的房间。你可以拿上所有钥匙去解锁其他房间。

给你一个数组 rooms 其中 rooms[i] 是你进入 i 号房间可以获得的钥匙集合。如果能进入 所有 房间返回 true，否则返回 false。

示例 1：

```javascript
输入：rooms = [[1],[2],[3],[]]
输出：true
解释：
我们从 0 号房间开始，拿到钥匙 1。
之后我们去 1 号房间，拿到钥匙 2。
然后我们去 2 号房间，拿到钥匙 3。
最后我们去了 3 号房间。
由于我们能够进入每个房间，我们返回 true。
```

示例 2：

```javascript
输入：rooms = [[1,3],[3,0,1],[2],[0]]
输出：false
解释：我们不能进入 2 号房间。
```

提示：

- n == rooms.length
- 2 <= n <= 1000
- 0 <= rooms[i].length <= 1000
- 1 <= sum(rooms[i].length) <= 3000
- 0 <= rooms[i][j] < n
- 所有 rooms[i] 的值 互不相同

思路：

拿到这个题目，首先要明确我们的目标是判断是否能够通过给定的房间钥匙关系进入所有房间。由于每个房间可能有通向其他房间的钥匙，这很自然地引导我们使用图或者类似图的遍历方式来解决。通过标记已访问的房间来避免重复访问，并逐步探索所有可能的路径，以确定是否能够访问到所有房间。

1. 首先创建一个`Set`数据结构`visited`来记录已经访问过的房间，创建一个`stack`来模拟深度优先搜索的栈。
2. 将初始房间 0 放入栈中。
3. 当栈不为空时，取出栈顶的房间号。
4. 如果该房间号未被访问过，将其加入`visited`，并将该房间所能打开的房间号放入栈中。
5. 最后判断`visited`的大小是否等于房间总数，来确定是否能访问所有房间。

时间复杂度：O(n + m)，其中 n 是房间的数量，m 是钥匙的总数。在最坏情况下，需要遍历所有的房间和钥匙。
空间复杂度：O(n)，用于存储已访问的房间信息和栈的空间。

```javascript
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const stack = [0];

  while (stack.length > 0) {
    const key = stack.pop();
    if (!visited.has(key)) {
      visited.add(key);
      for (let k of rooms[key]) {
        stack.push(k);
      }
    }
  }
  return visited.size === rooms.length;
};
```