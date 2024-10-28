var findWinningPlayer = function (skills, k) {
  const n = skills.length;
  let cnt = 0;
  let i = 0,
    last_i = 0;

  while (i < n) {
    let j = i + 1;
    while (j < n && skills[j] < skills[i] && cnt < k) {
      j++;
      cnt++;
    }
    if (cnt === k) {
      return i;
    }
    cnt = 1;
    last_i = i;
    i = j;
  }
  return last_i;
};
