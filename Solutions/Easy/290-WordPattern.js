/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = (pattern, str) => {
  let words = str.split(' ');
  if (pattern.length !== words.length) return false;

  let charToWord = {};
  let wordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (charToWord[char]) {
      if (charToWord[char] !== word) return false;
    } else {
      charToWord[char] = word;
    }

    if (wordToChar[word]) {
      if (wordToChar[word] !== char) return false;
    } else {
      wordToChar[word] = char;
    }
  }

  return true;
};
