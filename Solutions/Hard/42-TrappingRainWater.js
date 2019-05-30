/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  let left = 0,
    right = height.length - 1;
  let res = 0;
  let left_max = 0,
    right_max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= left_max
        ? (left_max = height[left])
        : (res += left_max - height[left]);
      ++left;
    } else {
      height[right] >= right_max
        ? (right_max = height[right])
        : (res += right_max - height[right]);
      --right;
    }
  }
  return res;
};
