var minArray = function (numbers): number {
  let left: number = 0;
  let right: number = numbers.length - 1;
  while (left < right) {
    const pivot: number = left + Math.floor((right - left) / 2);
    if (numbers[pivot] < numbers[right]) {
      right = pivot;
    } else if (numbers[pivot] > numbers[right]) {
      left = pivot + 1;
    } else {
      right -= 1;
    }
  }
  return numbers[left];
};
