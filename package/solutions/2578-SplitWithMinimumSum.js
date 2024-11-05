/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  const list = [...String(num)].map(Number).sort((a, b) => a - b);
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < list.length; i += 1) {
    if (i % 2 === 0) {
      num1 = num1 * 10 + list[i];
    } else {
      num2 = num2 * 10 + list[i];
    }
  }

  return num1 + num2;
};
