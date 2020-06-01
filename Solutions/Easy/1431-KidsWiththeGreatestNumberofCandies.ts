const kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {
  const tempArr = [...candies];
  const max:number = tempArr.sort((a,b)=>b-a)[0];
  const res:boolean[] = [];
  for (let i:number = 0;i < candies.length; i++) {
    res.push(candies[i]+extraCandies>=max)
  }
  return res;
};