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
