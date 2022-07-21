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

const trap2 = height => {
  let res = 0;
  const n = height.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);

  if (n == 0) {
    return 0;
  }

  left[0] = height[0];
  right[n - 1] = height[n - 1];

  for (let i = 1; i < n; i += 1) {
    left[i] = Math.max(left[i - 1], height[i]);
  }

  for (let i = n - 2; i >= 0; i -= 1) {
    right[i] = Math.max(right[i + 1], height[i]);
  }

  for (let i = 0; i < n; i += 1) {
    res += Math.min(left[i], right[i]) - height[i];
  }
  return res;
}