/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	const n = s.length;
	let count = 0;
	for (let i = 0; i < 2 * n - 1; i++) {
		let left = Math.floor(i / 2);
		let right = left + (i % 2);
		while (left >= 0 && right < n && s[left] === s[right]) {
			count++;
			left--;
			right++;
		}
	}
	return count;
};
