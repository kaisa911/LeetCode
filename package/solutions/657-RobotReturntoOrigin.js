// 时间复杂度：O(n)
// 空间复杂度：O(1)
var judgeCircle = function (moves) {
  var x = 0; // 记录当前位置
  var y = 0;
  for (var i = 0; i < moves.length; i++) {
    if (moves[i] == 'U') y++;
    if (moves[i] == 'D') y--;
    if (moves[i] == 'L') x++;
    if (moves[i] == 'R') x--;
  }
  return x == 0 && y == 0;
};
