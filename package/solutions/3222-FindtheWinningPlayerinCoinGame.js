var losingPlayer = function (x, y) {
  let totalValue = 75 * x + 10 * y;
  if (totalValue % 115 === 0) {
    return 'Bob';
  } else {
    return 'Alice';
  }
};
