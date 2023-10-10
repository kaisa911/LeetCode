function longestWord(words) {
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return b.localeCompare(a);
    }
  });
  let res = '';
  let candidates = new Set();
  candidates.add('');
  const n = words.length;
  for (let i = 0; i < n; i++) {
    const word = words[i];
    if (candidates.has(word.slice(0, word.length - 1))) {
      candidates.add(word);
      res = word;
    }
  }
  return res;
}
