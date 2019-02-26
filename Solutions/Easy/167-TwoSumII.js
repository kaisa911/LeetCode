const twoSum = (numbers, target) => {
  for (let i = 0, j = numbers.length - 1; i < j; ) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    } else if (numbers[i] + numbers[j] > target) {
      --j;
    } else {
      ++i;
    }
  }
};

// 自己用了twoSum的算法
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  const len = numbers.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    const cur = numbers[i];
    const j = map[target - cur];
    if (j != null) {
      return [j + 1, i + 1];
    }
    map[cur] = i;
  }
};
