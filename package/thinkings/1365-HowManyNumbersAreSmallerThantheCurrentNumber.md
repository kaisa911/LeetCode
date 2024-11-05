# 有多少小于当前数字的数字

给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

以数组形式返回答案。

示例 1：

```javascript
输入：nums = [8,1,2,2,3]
输出：[4,0,1,1,3]
解释：
对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。
对于 nums[1]=1 不存在比它小的数字。
对于 nums[2]=2 存在一个比它小的数字：（1）。
对于 nums[3]=2 存在一个比它小的数字：（1）。
对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
```

示例 2：

```javascript
输入：nums = [6,5,4,8]
输出：[2,1,0,3]
```

示例 3：

```javascript
输入：nums = [7,7,7,7]
输出：[0,0,0,0]
```

提示：

- 2 <= nums.length <= 500
- 0 <= nums[i] <= 100

思路：

1. 首先创建一个长度为 101 的数组 `count`，并初始化为 0，用于统计每个数字出现的次数。
2. 遍历输入的 `nums` 数组，将每个数字出现的次数累加到 `count` 数组的对应位置。
3. 对 `count` 数组计算前缀和，这样 `count[i]` 就表示小于等于 `i` 的数字的总数。
4. 再次遍历 `nums` 数组，对于每个数字，如果是 0，那么小于它的数字个数就是 0；否则，小于它的数字个数就是 `count[num - 1]`。

时间复杂度：O(n + m)，其中 n 是 `nums` 数组的长度，m 是数字的范围（这里是 101）。遍历 `nums` 数组两次，以及对 `count` 数组的操作，都是线性时间复杂度。
空间复杂度：O(m)，创建了一个长度为 101 的 `count` 数组来存储统计信息。

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 * hash表
 */
var smallerNumbersThanCurrent = function (nums) {
  const count = new Array(101).fill(0); // 因为数字范围是 0 到 100
  const res = [];

  for (let num of nums) {
    count[num]++; // 统计每个数字出现的次数
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]; // 计算前缀和
  }

  for (let num of nums) {
    if (num === 0) {
      res.push(0);
    } else {
      res.push(count[num - 1]); // 直接获取小于当前数字的个数
    }
  }

  return res;
};
```
