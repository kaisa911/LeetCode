/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const len = nums.length
	const map = {}
	for (let i = 0; i < len; i++) {
		const curr = nums[i]
		const j = map[target - curr]
		if (j != null) {
			return [j, i]
		}
		map[curr] = i
	}
}