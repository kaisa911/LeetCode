/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
	const res = [];
	if (!S.length) return res;

	const backTrack = (index, current) => {
		if (current.length === S.length) {
			res.push(current);
			return;
		}
		if (isNaN(+S[index])) {
			const lower = current + S[index].toLowerCase();
			const upper = current + S[index].toUpperCase();

			backTrack(index + 1, lower);
			backTrack(index + 1, upper);
		} else {
			current += S[index];
			backTrack(index + 1, current);
		}
	};

	backTrack(0, '');
	return res;
};
