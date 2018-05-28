/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const len = nums.length
	const map = {}
	for (let i = 0; i < len; i++) {
		const cur = nums[i]
		const j = map[target - cur]
		if (j != null) {
			return [j, i]
		}
		map[cur] = i
	}
}