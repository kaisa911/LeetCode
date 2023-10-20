const twoSum = require('../Solutions/Easy/1-TwoSum.js');

test('twoSum test', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test('twoSum test', () => {
  const nums = [2, 5, 7, 9, 11, 15];
  const target = 11;
  expect(twoSum(nums, target)).toEqual([0, 3]);
});

test('twoSum test', () => {
  const nums = [2, 5, 7, 8, 11, 15];
  const target = 14;
  expect(twoSum(nums, target)).toEqual([]);
});

test('twoSum test', () => {
  const nums = [];
  const target = 14;
  expect(twoSum(nums, target)).toEqual([]);
});
