function winnerOfGame(colors) {
  let result = 0,
    n = colors.length;
  for (let i = 1; i < n - 1; i++) {
    if (colors[i] === colors[i - 1] && colors[i] === colors[i + 1]) {
      result += colors[i] === 'A' ? 1 : -1;
    }
  }
  return result > 0;
}
