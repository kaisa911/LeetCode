# 独一无二的出现次数

给你一个整数数组 arr，如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。

示例 1：

```javascript
输入：arr = [1,2,2,1,1,3]
输出：true
解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
```

示例 2：

```javascript
输入：arr = [1,2]
输出：false
```

示例 3：

```javascript
输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
输出：true
```

提示：

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

思路：

拿到这个题目，首先需要统计数组中每个元素出现的次数，可以使用数据结构如哈希表（Map）来快速记录。然后需要判断这些出现次数是否唯一，为了去重可以使用集合（Set）。选择使用 Map 来统计次数是因为其能高效地进行键值对的存储和查找，时间复杂度接近 O(1)；选择使用 Set 来判断出现次数是否唯一，是因为其不允许重复元素，能方便地比较元素个数。

1. 首先创建一个 Map 数据结构 `occur` ，通过遍历数组 `arr` ，如果元素已经在 Map 中，就将其对应的值加 1；如果元素不在 Map 中，就将其初始化为 1 ，这一步完成了对每个元素出现次数的统计。
2. 然后创建一个 Set 数据结构 `times` ，将 Map 中每个元素的出现次数添加到 Set 中。由于 Set 不允许重复元素，所以如果添加进去的次数都是唯一的，那么 `times` 的大小就应该等于 `occur` 的大小。
3. 最后通过比较 `times` 和 `occur` 的大小来判断每个数的出现次数是否都是独一无二的。

时间复杂度：O(n)，其中 n 是数组 `arr` 的长度。遍历数组进行统计和后续的处理都是线性的操作。
空间复杂度：O(n)，主要用于存储 Map 和 Set 中的元素，最坏情况下，Map 和 Set 的大小都与数组的长度相等。

```javascript
var uniqueOccurrences = function (arr) {
  const occur = new Map();
  for (const x of arr) {
    if (occur.has(x)) {
      occur.set(x, occur.get(x) + 1);
    } else {
      occur.set(x, 1);
    }
  }
  const times = new Set();
  for (const [key, value] of occur) {
    times.add(value);
  }
  return times.size === occur.size;
};
```
