# 删除有序数组中的重复项

给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：

更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
返回 k 。

判题标准:

系统会用下面的代码来测试你的题解:

```c++
int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

如果所有断言都通过，那么您的题解将被通过。

示例 1：

```js
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

示例 2：

```js
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

提示：

- 1 <= nums.length <= 3 \* 104
- -104 <= nums[i] <= 104
- nums 已按 非严格递增 排列

思路：

因为要求原地修改数组，且前面的 K 个数是不重复的。所以可以采用双指针来做这道题：
一个指针用来表示数组 index，一个指针来记录不重复的 index

1. 如果数组为空（即长度为 0），则直接返回 0。
2. 初始化两个指针 i 和 j，都设置为 0，以及一个变量 len，用于存储数组的长度。
3. 遍历数组
4. 在循环中，如果 nums[j]（当前非重复元素的最后一个）和 nums[i]（当前元素）不相等，那么就把 nums[i] 赋值给 nums[++j]。这里的 ++j 表示先将 j 加 1，然后进行赋值操作。
5. 循环结束后，返回 j + 1，这是因为 j 是从 0 开始的，所以实际的长度应该是 j + 1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0,
    j = 0,
    len = nums.length;
  for (i; i < len; i++) {
    if (nums[j] !== nums[i]) nums[++j] = nums[i];
  }
  return j + 1;
};
```