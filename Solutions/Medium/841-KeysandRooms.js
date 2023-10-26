var canVisitAllRooms = function (rooms) {
  const dfs = (key, rooms, visited) => {
    if (visited[key]) return;
    visited[key] = 1;
    for (let k of rooms[key]) {
      // 深度优先搜索遍历 、
      dfs(k, rooms, visited);
    }
  };
  const visited = new Array(rooms.length).fill(false);
  dfs(0, rooms, visited);
  //检查是否都访问到了
  for (let i of visited) {
    if (!i) {
      return false;
    }
  }
  return true;
};
