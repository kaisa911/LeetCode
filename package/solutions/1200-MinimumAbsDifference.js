var minimumAbsDifference = function (arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let best = Number.MAX_VALUE;
  let res = [];

  for (let i = 0; i < n - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff < best) {
      best = diff;
      res = [[arr[i], arr[i + 1]]];
    } else if (diff === best) {
      res.push([arr[i], arr[i + 1]]);
    }
  }
  return res;
};
