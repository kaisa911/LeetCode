/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
	let i = 0;
	let len = nums.length - 1;
	while (i < len) {
		const m = parseInt((i + len) / 2);
		const n = nums[m];
		if (target === n) {
			return true;
		}
		if (nums[i] === n) {
			i++;
			continue;
		}
		if ((nums[i] <= n) ^ (target > n) ^ (target < nums[i])) {
			len = m;
		} else {
			i = m + 1;
		}
	}
	return len === i && nums[i] === target;
};
