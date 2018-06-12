/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let arr1,
    arr2,
    carry,
    char1,
    char2,
    sum,
    index,
    product,
    tag,
    res = [];

  if (
    !num1 ||
    !num2 ||
    !num1.length ||
    !num2.length ||
    num1 === '0' ||
    num2 === '0'
  ) {
    return '0';
  }

  arr1 = num1.split('').reverse();
  arr2 = num2.split('').reverse();

  for (let i = 0; i < arr1.length; i++) {
    carry = 0;
    char1 = parseInt(arr1[i]);

    for (var j = 0; j < arr2.length; j++) {
      char2 = parseInt(arr2[j]);
      product = char1 * char2 + carry;
      tag = res[i + j] || 0;
      sum = product + tag;
      index = sum % 10;
      carry = Math.floor(sum / 10);
      res[i + j] = index; 
    }
    if (carry > 0) {
      res[i + j] = carry;
    }
  }

  res.reverse();
  res = res.join('');

  return res;
};
