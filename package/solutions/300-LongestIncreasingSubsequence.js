/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }
  var dp = [];
  for (var i = 0; i < nums.length; i++) {
    var index = binarySearch(dp, nums[i]);
    if (index === dp.length) {
      dp.push(nums[i]);
    } else {
      dp[index] = nums[i];
    }
  }
  return dp.length;
};

function binarySearch(arr, target) {
  var start = 0,
    end = arr.length;
  while (start < end) {
    var mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}
