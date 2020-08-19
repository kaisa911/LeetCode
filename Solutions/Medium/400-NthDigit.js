/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
	if (n == 0) return n;
	n--;
	let index = 1;
	let base = 9;
	while (n > index * base) {
		n -= index * base;
		index++;
		base *= 10;
	}
	let num = Math.floor(n / index) + base / 9;
	let len = n % index;
	return num.toString()[len];
};
