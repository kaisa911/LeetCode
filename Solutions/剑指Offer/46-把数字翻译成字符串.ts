/**
 * @param {number} num
 * @return {number}
 */
const translateNum = (num) => {
  const str = num.toString();

  function trans(str, index) {
    if (index >= str.length - 1) return 1;
    let temp = Number(str[index] + str[index + 1]);
    if (temp >= 10 && temp <= 25) {
      return trans(str, index + 1) + trans(str, index + 2);
    } else {
      return trans(str, index + 1);
    }
  }
  return trans(str, 0);
};
