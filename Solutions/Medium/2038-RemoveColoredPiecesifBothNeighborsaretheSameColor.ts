function winnerOfGame(colors: string): boolean {
  let result: number = 0,
    n: number = colors.length;
  for (let i: number = 1; i < n - 1; i++) {
    if (colors[i] === colors[i - 1] && colors[i] === colors[i + 1]) {
      result += colors[i] === 'A' ? 1 : -1;
    }
  }
  return result > 0;
}
