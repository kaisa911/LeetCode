const kidsWithCandies = (candies, extraCandies) => {
  const tempArr = [...candies];
  const max = tempArr.sort((a, b) => b - a)[0];
  const res = [];
  for (let i = 0; i < candies.length; i++) {
    res.push(candies[i] + extraCandies >= max);
  }
  return res;
};
