# 课程表

你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程 bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

示例 1：

```javascript
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
```

示例 2：

```javascript
输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
```

提示：

- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= 5000
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- prerequisites[i] 中的所有课程对 互不相同

思路：

1. 构建入度数组：首先，构建一个数组 inDegree 来存储每个课程的先修课程数量（即入度）。同时，构建一个 map 作为邻接表，用于存储每个课程的后续课程列表。
2. 初始化队列：然后，将所有入度为 0 的课程（即没有先修课程的课程）加入队列中。
3. 拓扑排序：接着，使用一个循环进行拓扑排序。在每次迭代中，从队列中取出一个课程，并将其后续课程的入度减 1。如果某个后续课程的入度变为 0，则将其加入队列中。
4. 检查结果：最后，如果选出的课程数量等于总课程数，说明所有课程都可以按顺序完成，返回 true；否则，存在课程无法完成，返回 false。

时间复杂度：O(V+E)，其中 V 是课程的数量，E 是先修课程对的数量。这是因为每个课程和每条边在算法中都被遍历了一次。
空间复杂度：O(V+E)，用于存储邻接表和入度数组。

```javascript
const canFinish = (numCourses, prerequisites) => {
  const inDegree = new Array(numCourses).fill(0);
  // 入度数组
  const map = {};
  // 邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++; // 求课的初始入度值
    if (map[prerequisites[i][1]]) {
      // 当前课已经存在于邻接表
      map[prerequisites[i][1]].push(prerequisites[i][0]);
      // 添加依赖它的后续课
    } else {
      // 当前课不存在于邻接表
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }
  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    // 所有入度为0的课入列
    if (inDegree[i] == 0) queue.push(i);
  }
  let count = 0;
  while (queue.length) {
    const selected = queue.shift(); // 当前选的课，出列
    count++; // 选课数+1
    const toEnQueue = map[selected]; // 获取这门课对应的后续课
    if (toEnQueue && toEnQueue.length) {
      // 确实有后续课
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--; // 依赖它的后续课的入度-1
        if (inDegree[toEnQueue[i]] == 0) {
          // 如果因此减为0，入列
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return count == numCourses; // 选了的课等于总课数，true，否则false
};
```
