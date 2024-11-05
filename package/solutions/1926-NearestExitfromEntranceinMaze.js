/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  var walkableArr = [[...entrance, 0]];
  var pos = [
    {
      x: -1,
      y: 0,
    },
    {
      x: 1,
      y: 0,
    },
    {
      x: 0,
      y: -1,
    },
    {
      x: 0,
      y: 1,
    },
  ];
  while (walkableArr.length) {
    var [row, col, step] = walkableArr.shift();
    for (var i = 0; i < pos.length; i++) {
      var { x, y } = pos[i];
      var nextX = row + x;
      var nextY = col + y;
      var nextRow = maze[nextX];
      if (nextRow) {
        if (nextRow[nextY] === '.') {
          if (
            nextX === 0 ||
            nextX === maze.length - 1 ||
            nextY === 0 ||
            nextY === maze[nextX].length - 1
          ) {
            return step + 1;
          }
          maze[nextX][nextY] = '+';
          walkableArr.push([nextX, nextY, step + 1]);
        }
      }
    }
    maze[row][col] = '+';
  }
  return -1;
};
