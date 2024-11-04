var losingPlayer = function (x, y) {
  let turn = 1;
  while (x >= 1 && y >= 4) {
    turn ^= 1;
    x--;
    y -= 4;
  }
  return turn === 0 ? 'Alice' : 'Bob';
};
