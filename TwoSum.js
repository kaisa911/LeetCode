/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let i = 0,
		len = nums.length,
		hash = {},
		res = [],
		t1, t2;
	while (i < len) {
		t2 = len - i - 1;
		hash[nums[t2]] = t2;
		t1 = hash[target - nums[i]];
		if (t1 !== undefined && t1 !== i) {
			res.push(i);
			(i > t1) ? res.unshift(t1) : res.push(t1);
			break;
		}
		hash[nums[i]] = i;
		i++
	}
	return res;
};