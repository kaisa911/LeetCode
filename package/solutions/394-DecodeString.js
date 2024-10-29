/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	let stack = [];
	let num = '';
	let str = '';
	for (c of s) {
		if (c >= 0) {
			num += c;
		} else if (c === '[') {
			stack.push([str, +num]);
			str = '';
			num = '';
		} else if (c === ']') {
			const [last_str, last_num] = stack.pop();
			str = last_str + str.repeat(last_num);
		} else {
			str += c;
		}
	}
	return str;
};
