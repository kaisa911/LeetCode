/**
 * @param {number} num
 * @return {string}
 */
const toHex = num => {
  let hex;
  if (num >= 0) {
    hex = num.toString(16);
  } else {
    hex = (+num + Math.pow(2, 32)).toString(16);
  }

  return hex;
};
