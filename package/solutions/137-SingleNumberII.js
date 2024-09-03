var singleNumber = function(nums) {
  let one = 0, two = 0, three = 0;
  for (const num of nums) {
    one = (one ^ num) & ~two;
    two = (two ^ num) & ~three;
    three = (three ^ num) & ~one;
  }
  return one;
};