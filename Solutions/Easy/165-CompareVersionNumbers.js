/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const list1 = version1.split('.');
  const list2 = version2.split('.');
  const len = Math.max(list1.length, list2.length);

  for (let i = 0; i < len; i += 1) {
    if (!list1[i]) list1[i] = 0;
    if (!list2[i]) list2[i] = 0;

    if (parseInt(list1[i]) > parseInt(list2[i])) {
      return 1;
      break;
    }
    if (parseInt(list1[i]) < parseInt(list2[i])) {
      return -1;
      break;
    }
    if (parseInt(list1[i]) === parseInt(list2[i]) && i !== len - 1) {
      continue;
    } else {
      return 0;
    }
  }
};
