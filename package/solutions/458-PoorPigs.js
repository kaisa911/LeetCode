const poorPigs = (buckets, minutesToDie, minutesToTest) => {
  const times = minutesToTest / minutesToDie;
  const base = times + 1;

  const temp = Math.log(buckets) / Math.log(base);
  const res = Math.ceil(temp);
  return res;
};
