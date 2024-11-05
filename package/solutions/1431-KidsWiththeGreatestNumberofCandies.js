const kidsWithCandies = (candies, extraCandies) => {
  let max = candies[0];
  for (let candy of candies) {
    if (candy > max) {
      max = candy;
    }
  }
  const res = [];
  for (let candy of candies) {
    res.push(candy + extraCandies >= max);
  }
  return res;
};
