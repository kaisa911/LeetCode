const getRow = (rowIndex) => {
  let [prev, curr] = [[], []];
  for (let i = 0; i <= rowIndex; i++) {
    curr.fill(0);
    for (let j = 0; j <= i; j++) {
      curr[j] = (j === 0 || j === i) ? 1 : prev[j - 1] + prev[j];
    }
    [prev, curr] = [curr, prev];
  }
  return prev;
};