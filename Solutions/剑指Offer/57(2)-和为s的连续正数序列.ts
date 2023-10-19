/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let res: Array<number>[] = [];
  //滑动窗口左右界， 闭区间
  let left = 1;
  let right = 2;
  let sum = left + right; //滑动窗口内所有值的和

  while (right < target / 2 + 1) {
    if (sum === target) {
      res.push(range(left, right));
      right++;
      sum += right;
    } else if (sum < target) {
      right++;
      sum += right;
    } else if (sum > target) {
      sum -= left;
      left++;
    }
  }
  return res;
};

function range(left: number, right: number): Array<number> {
  let res: Array<number> = [];
  for (let i = left; i <= right; i++) {
    res.push(i);
  }
  return res;
}
