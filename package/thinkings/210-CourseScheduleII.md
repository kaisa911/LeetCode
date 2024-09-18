# 课程表 II

现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。

例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。

示例 1：

```javascript
输入：numCourses = 2, prerequisites = [[1,0]]
输出：[0,1]
解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
```

示例 2：

```javascript
输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
输出：[0,2,1,3]
解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
```

示例 3：

```javascript
输入：numCourses = 1, prerequisites = []
输出：[0]
```

提示：

- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= numCourses \* (numCourses - 1)
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- ai != bi
- 所有[ai, bi] 互不相同

思路：

1. 构建图：首先，使用邻接表（hash）来表示图，其中键是课程，值是以其为先修课的课程列表。同时，使用数组（indeg）来记录每个课程的入度，即需要先修的课程数量。
2. 初始化队列：然后，找出所有入度为 0 的课程，即没有先修课或所有先修课都已学习的课程，将它们加入队列中。
3. 拓扑排序：接下来，使用一个循环进行拓扑排序。在每次迭代中，从队列中取出一个课程，并将其后续课程的入度减 1。如果某个后续课程的入度变为 0，则将其加入队列中。
4. 检查结果：最后，如果选出的课程数量等于总课程数，说明所有课程都可以按顺序完成，返回学习顺序数组；否则，存在课程无法完成，返回空数组。

时间复杂度：O(V+E)，其中 V 是课程的数量，E 是先修课程对的数量。这是因为每个课程和每条边在算法中都被遍历了一次。
空间复杂度：O(V+E)，用于存储邻接表和入度数组。

```javascript
// 拓扑运算 - 广度优先遍历
// 时间: O(m+2n)
// 空间: O(m+2n)
// n 为课程数(numCourses)，m 为先修课程的要求数(prerequisites.length)
function findOrder(numCourses, prerequisites) {
  // 保存key课程为先修课的所有课程
  const hash = new Map();
  // 保存下标index课程，有多少先修课程
  const indeg = new Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
    // a课程的先修课程是b

    // 1. a课程的先修课程+1
    indeg[a]++;
    // 2. 以b课程为先修课程的数组push(a)
    if (hash.has(b)) {
      hash.get(b)?.push(a);
    } else {
      hash.set(b, [a]);
    }
  }

  // 一个保存可以学习，并且等待学习的课程的队列（没有先修课程或者先修课程已经学习了，这个课程就是可以学习的课程）
  const queue = [];
  const ans = [];

  for (let i = 0; i < numCourses; i++) {
    // 首先把没有先修课程的课程加入可学习课程队列中
    if (indeg[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    // 不断的将队列顶部课程shift出
    // 再根据顶部课程，将只以该课程为先修课程的课程push进队列（因为这部分课程也是可以学习的课程了）
    const b = queue.shift();
    // b已经学习了，加入答案
    ans.push(b);
    // 将b作为先修课程的课程的先修课程数量减1
    // 并且把减完之后先修课程为0的课程push进队列
    if (hash.has(b)) {
      for (const a of hash.get(b)) {
        // a就是先修课程包含b的所有课程
        // 将a的先修课程数量减1
        indeg[a]--;
        if (indeg[a] === 0) {
          // 如果a课程的先修课程为0，表示a的先修课程都已经学习了，那么a也可以学习了
          // 加入待学习队列中
          queue.push(a);
        }
      }
    }
  }

  // 如果ans.length等于所有课程的数量，那么表示所有课程都可以被学习到
  // 否则，表示存在环，无法学习到所有的课程
  return ans.length === numCourses ? ans : [];
}
```
