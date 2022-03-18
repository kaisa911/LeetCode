function longestWord(words: string[]): string {
  words.sort((a: string, b: string): number => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return b.localeCompare(a);
    }
  });
  let res: string = '';
  let candidates = new Set();
  candidates.add('');
  const n: number = words.length;
  for (let i: number = 0; i < n; i++) {
    const word = words[i];
    if (candidates.has(word.slice(0, word.length - 1))) {
      candidates.add(word);
      res = word;
    }
  }
  return res;
}
