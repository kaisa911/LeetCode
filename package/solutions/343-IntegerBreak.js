/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
	if (n == 3 || n == 2) return n - 1;

	let sum = 1;
	while (n > 4) {
		sum *= 3;
		n -= 3;
	}

	return sum * n;
};
