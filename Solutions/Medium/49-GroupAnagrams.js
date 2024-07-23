const groupAnagrams = (strs) => {
  const hash = {};
  for (const item of strs) {
    const sortedStr = Array.from(item)
      .sort((a, b) => a.localeCompare(b))
      .join('');
    hash[sortedStr] = hash[sortedStr] || [];
    hash[sortedStr].push(item);
  }
  return Object.values(hash);
};
