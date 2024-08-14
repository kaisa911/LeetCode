/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = (version1, version2) => {
  const list1 = version1.split('.');
  const list2 = version2.split('.');
  const len = Math.max(list1.length, list2.length);

  for (let i = 0; i < len; i += 1) {
    const num1 = i < list1.length ? parseInt(list1[i]) : 0;
    const num2 = i < list2.length ? parseInt(list2[i]) : 0;

    if (num1 > num2) {
      return 1;
    }
    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};
