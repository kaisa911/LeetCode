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
