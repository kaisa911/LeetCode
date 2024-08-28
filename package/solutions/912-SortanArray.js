var sortArray = function (nums) {
  // 快速排序
  function quickSort(start, end, arr) {
    if (start < end) {
      let mid = sort(start, end, arr);
      // 注意，一定要是 start mid , mid+1 end 这种组合
      // 否则当首位最大的时候(mid返回0)，将会无限循环
      quickSort(start, mid, arr);
      quickSort(mid + 1, end, arr);
    }
    return arr;
  }

  function sort(start, end, arr) {
    // 取基准值
    let base = arr[start];

    let low = start;
    let high = end;

    while (low !== high) {
      // 从后往前，寻找比基准值小的值，赋给low位置(也就是取base值的位置)
      while (arr[high] >= base && high > low) {
        high--;
      }
      arr[low] = arr[high];
      // 从前往后，寻找比基准值大的值，赋给high位置
      while (arr[low] <= base && high > low) {
        low++;
      }
      arr[high] = arr[low];
    }
    arr[low] = base;
    return low;
  }
  return quickSort(0, nums.length - 1, nums);
};
