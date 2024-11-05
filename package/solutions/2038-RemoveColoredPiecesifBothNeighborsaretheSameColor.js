function winnerOfGame(colors) {
  let countA = 0;
  let countB = 0;
  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i - 1] === 'A' && colors[i] === 'A' && colors[i + 1] === 'A') {
      countA++;
    }
    if (colors[i - 1] === 'B' && colors[i] === 'B' && colors[i + 1] === 'B') {
      countB++;
    }
  }
  return countA > countB;
}
