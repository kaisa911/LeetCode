/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (hash[num] != undefined && i - hash[num] <= k) {
      return true;
    } else {
      hash[num] = i;
    }
  }
  return false;
};

// 大佬的写法
let containsNearbyDuplicate = function(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    let pos = map.get(nums[i]);
    if (pos !== undefined && i - pos <= k) {
      return true;
    }
    map.set(nums[i], i);
  }

  return false;
};
