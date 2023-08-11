const minFallingPathSum = (grid) => {
  const n = grid.length;
  let first_min_sum = 0;
  let second_min_sum = 0;
  let first_min_Index = -1;

  for (let i = 0; i < n; i++) {
    let cur_first_min_sum = Infinity;
    let cur_Second_min_sum = Infinity;
    let cur_first_min_Index = -1;

    for (let j = 0; j < n; j++) {
      let cur_sum = grid[i][j];
      if (j !== first_min_Index) {
        cur_sum += first_min_sim;
      } else {
        cur_sum += second_min_sim;
      }

      if (cur_sum < cur_first_min_sum) {
        cur_Second_min_sum = cur_first_min_sum;
        cur_first_min_sum = cur_sum;
        cur_first_min_Index = j;
      } else if (cur_sum < cur_Second_min_sum) {
        cur_Second_min_sum = cur_sum;
      }
    }
    first_min_sum = cur_first_min_sum;
    second_min_sum = cur_Second_min_sum;
    first_min_Index = cur_first_min_Index;
  }
  return first_min_sum;
};
