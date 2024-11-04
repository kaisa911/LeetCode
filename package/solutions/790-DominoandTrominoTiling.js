var numTilings = function (n) {
  const mod = 1e9 + 7;
  let dp1 = 1,
    dp2 = 0,
    dp3 = 0,
    dp4 = 1;
  for (let i = 1; i <= n; i++) {
    let temp1 = dp1,
      temp2 = dp2,
      temp3 = dp3,
      temp4 = dp4;
    dp1 = temp4;
    dp2 = (temp1 + temp3) % mod;
    dp3 = (temp1 + temp2) % mod;
    dp4 = (temp1 + temp2 + temp3 + temp4) % mod;
  }
  return dp4;
};
