const countSmaller = (nums) => {
  const counts = new Array(nums.length).fill(0);
  let indexedNums = new Array(nums.length); // indexedNums[i]包含元素的位置信息
  for (let i = 0; i < indexedNums.length; i++) {
    // 让大家都能看懂 就没用JS的map
    indexedNums[i] = {
      value: nums[i],
      index: i,
    };
  }
  const mergeSort = (left, right) => {
    if (right - left <= 1) return indexedNums.slice(left, right); // 不用sort了
    const pivot = (left + right) >>> 1;
    const leftPart = mergeSort(left, pivot);
    const rightPart = mergeSort(pivot, right);
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < leftPart.length) {
      // 遍历左边部分的元素
      while (j < rightPart.length && rightPart[j].value < leftPart[i].value) {
        // 考察右边部分的元素，遇到小于当前左边元素的，推入merged数组
        merged.push(rightPart[j]);
        j++; // 统计当前右边元素中，比当前左边元素小的元素个数
      }
      counts[leftPart[i].index] += j; // 在递归中累加j，统计出右边元素比它小的个数
      merged.push(leftPart[i]); // 较小的进来后，自己也进去了
      i++; // 考察下一个左边元素
    }
    // rightPart[j]比左边元素都大，while结束，将它和它后面的元素推入merged数组，继续递归
    merged.push(...rightPart.slice(j));
    return merged;
  };
  mergeSort(0, indexedNums.length);
  return counts;
};

const countSmaller = (nums) => {
  const n = nums.length;
  const counts = new Array(n).fill(0);
  const sortedNums = new Array(n);
  const bit = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    sortedNums[i] = nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    const num = sortedNums[i];
    counts[i] = bit[0];
    let j = num;
    while (j > 0) {
      counts[i] += bit[j];
      j -= j & -j;
    }
    let j = num;
    while (j <= n) {
      bit[j]++;
      j += j & -j;
    }
  }

  return counts;
};
