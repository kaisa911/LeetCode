/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  magazine = magazine.split('');
  for (let i = 0, len = ransomNote.length; i < len; i++) {
    if (magazine.indexOf(ransomNote[i]) != -1) {
      magazine.splice(magazine.indexOf(ransomNote[i]), 1);
    } else return false;
  }
  return true;
};
