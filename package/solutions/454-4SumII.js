var fourSumCount = function (A, B, C, D) {
  const ABmap = new Map();
  const len = A.length;
  for (let i of A) {
    for (let j of B) {
      // 统计AB之和及对应的数量
      if (ABmap.has(i + j)) {
        ABmap.set(i + j, ABmap.get(i + j) + 1);
      } else {
        ABmap.set(i + j, 1);
      }
    }
  }
  let res = 0;
  for (let k of C) {
    for (let l of D) {
      // 若A[i] + B[j] === -(C[k] + D[l])，则将数量加入到结果中
      if (ABmap.has(-k - l)) {
        res += ABmap.get(-k - l);
      }
    }
  }
  return res;
};
