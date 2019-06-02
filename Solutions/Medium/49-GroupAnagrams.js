/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  let hash = {};
  for (item of strs) {
    let str = item
      .split('')
      .sort()
      .join('');
    !hash[str] ? (hash[str] = [item]) : hash[str].push(item);
  }
  return Object.values(hash);
};
