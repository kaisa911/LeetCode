/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
	let base = 1;
	let res = 0;
	let temp = n;

	while (n / base > 0) {
		let b = Math.floor(n / base) % 10;
		if (b < 1) {
			res += Math.floor(n / (base * 10)) * base;
		} else if (b == 1) {
			res += Math.floor(n / (base * 10)) * base + (n % base) + 1;
		} else {
			res += Math.floor(n / (base * 10) + 1) * base;
		}

		base *= 10;
	}

	return res;
};
