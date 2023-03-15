/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (nums.length < 2) return 0;
  let count = 0;
  // 归并过程
  const merge = (left, right) => {
    let res = [],
      i,
      j;

    for (i = 0, j = 0; i < left.length && j < right.length; ) {
      if (left[i] > right[j]) {
        // 计算逆序对：如果左边数组元素大于右边，则表示该元素后面的所有元素都大于
        count += left.length - i;
        res.push(right[j++]);
      } else {
        res.push(left[i++]);
      }
    }
    while (i < left.length) {
      res.push(left[i++]);
    }
    while (j < right.length) {
      res.push(right[j++]);
    }
    return res;
  };

  const mergeSort = (arr) => {
    if (arr.length == 1) return arr;

    let mid = Math.floor(arr.length / 2);

    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  };
  mergeSort(nums);
  return count;
};
