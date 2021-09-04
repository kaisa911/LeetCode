function minArray(numbers: number[]): number {
  for (let i: number = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) return numbers[i + 1];
  }
  return numbers[0];
}
