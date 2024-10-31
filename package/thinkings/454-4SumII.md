# 四数相加 II

给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：

- 0 <= i, j, k, l < n
- nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

示例 1：

```javascript
输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：

1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```

示例 2：

```javascript
输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
```

提示：

- n == nums1.length
- n == nums2.length
- n == nums3.length
- n == nums4.length
- 1 <= n <= 200
- -2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28

思路：

对于这个问题，我们可以通过将四个数组的组合问题拆分为两部分来解决。首先计算前两个数组中所有元素两两组合的和，并统计每种和出现的次数，存储在一个哈希表（Map）中。然后遍历后两个数组，对于每一种组合，判断其和的相反数是否在哈希表中，如果存在，则将对应的次数累加到结果中。这种方法利用了哈希表的快速查找特性，有效地解决了四个数组的组合问题。

1. 首先创建一个哈希表ABmap，用于存储前两个数组中元素两两组合的和以及对应的出现次数。
2. 遍历前两个数组A和B，对于每一对元素i和j，计算它们的和i + j。
    - 如果ABmap中已经存在这个和，将对应的次数加1。
    - 如果ABmap中不存在这个和，将其存入ABmap，并将次数初始化为1。
3. 初始化结果变量res为0。
4. 遍历后两个数组C和D，对于每一对元素k和l，计算它们的和k + l，并取其相反数 -k - l。
    - 如果ABmap中存在这个相反数，将对应的次数累加到res中。
5. 最后返回res，即满足条件的元组数量。

- 时间复杂度：遍历前两个数组的时间复杂度为O(n²)，其中n是数组的长度。遍历后两个数组的时间复杂度也是O(n²)。哈希表的查找和插入操作可以认为是常数时间，所以总的时间复杂度为O(n²)。
- 空间复杂度：取决于哈希表中存储的元素数量，最坏情况下，前两个数组的所有组合都不同，哈希表中存储n²个元素，所以空间复杂度为O(n²)。

```javascript
var fourSumCount = function (A, B, C, D) {
  const ABmap = new Map();
  const len = A.length;
  for (let i of A) {
    for (let j of B) {
      // 统计AB之和及对应的数量
      if (ABmap.has(i + j)) {
        ABmap.set(i + j, ABmap.get(i + j) + 1);
      } else {
        ABmap.set(i + j, 1);
      }
    }
  }
  let res = 0;
  for (let k of C) {
    for (let l of D) {
      // 若A[i] + B[j] === -(C[k] + D[l])，则将数量加入到结果中
      if (ABmap.has(-k - l)) {
        res += ABmap.get(-k - l);
      }
    }
  }
  return res;
};
```
