function isNumber(s: string): boolean {
  return !Number.isNaN(Number(s)) && s !== ' ';
}
