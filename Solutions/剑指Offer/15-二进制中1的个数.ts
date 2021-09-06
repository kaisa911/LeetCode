const hammingWeight = (n: number): number => {
  return n.toString(2).split('1').length - 1;
};
