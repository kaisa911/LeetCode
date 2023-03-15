/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const dq: number[] = [];
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (dq.length && dq[0] == i - k) dq.shift(); // 队头不在窗口范围内

    while (dq.length && nums[i] > nums[dq[dq.length - 1]]) {
      //待入队元素比队尾元素大
      dq.pop();
    }

    dq.push(i);
    if (i >= k - 1) res.push(nums[dq[0]]);
  }

  return res;
};
