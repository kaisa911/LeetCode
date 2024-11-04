# 删掉一个元素以后全为 1 的最长子数组

给你一个二进制数组 nums ，你需要从中删掉一个元素。

请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。

如果不存在这样的子数组，请返回 0 。

示例 1：

```javascript
输入：nums = [1,1,0,1]
输出：3
解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
```

示例 2：

```javascript
输入：nums = [0,1,1,1,0,1,1,0,1]
输出：5
解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。
```

示例 3：

```javascript
输入：nums = [1,1,1]
输出：2
解释：你必须要删除一个元素。
```

提示：

- 1 <= nums.length <= 10^5
- nums[i] 要么是 0 要么是 1 。

```javascript
var longestSubarray = function (nums) {
  //右边为[0, 0, 0, 0]的简写
  let [left, right, cur, max] = new Array(4).fill(0);
  // 滑动窗口
  while (right < nums.length) {
    cur += nums[right];
    while (right - left > cur) {
      cur -= nums[left++];
    }
    // 判断是否含有0 解释: 若子数组全为1, 其总和等于right - left + 1 举例 [1,1,1]
    max = Math.max(max, cur - (right - left === cur - 1 ? 1 : 0));
    right++;
  }
  return max;
};

```
