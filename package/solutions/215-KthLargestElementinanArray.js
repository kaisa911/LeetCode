var findKthLargest = function(nums, k) {
  function partition(left, right, pivotIndex) {
    const pivotValue = nums[pivotIndex];
    swap(nums, pivotIndex, right); // 将枢纽元放到右侧
    let storeIndex = left;
    for (let i = left; i < right; i++) {
      if (nums[i] > pivotValue) {
        swap(nums, storeIndex, i);
        storeIndex++;
      }
    }
    swap(nums, storeIndex, right); // 将枢纽元放到其最终位置
    return storeIndex;
  }

  function quickSelect(left, right) {
    if (left === right) return nums[left];
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivotNewIndex = partition(left, right, pivotIndex);
    if (k - 1 === pivotNewIndex) return nums[pivotNewIndex];
    else if (k - 1 < pivotNewIndex) return quickSelect(left, pivotNewIndex - 1);
    else return quickSelect(pivotNewIndex + 1, right);
  }

  return quickSelect(0, nums.length - 1);
};

function swap(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}