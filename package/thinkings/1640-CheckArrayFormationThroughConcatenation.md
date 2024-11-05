# 能否连接形成数组

给你一个整数数组 arr ，数组中的每个整数 互不相同 。另有一个由整数数组构成的数组 pieces，其中的整数也 互不相同 。请你以 任意顺序 连接 pieces 中的数组以形成 arr 。但是，不允许 对每个数组 pieces[i] 中的整数重新排序。

如果可以连接 pieces 中的数组形成 arr ，返回 true ；否则，返回 false 。

示例 1：

```javascript
输入：arr = [15,88], pieces = [[88],[15]]
输出：true
解释：依次连接 [15] 和 [88]
```

示例 2：

```javascript
输入：arr = [49,18,16], pieces = [[16,18,49]]
输出：false
解释：即便数字相符，也不能重新排列 pieces[0]
```

示例 3：

```javascript
输入：arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
输出：true
解释：依次连接 [91]、[4,64] 和 [78]
```

提示：

- 1 <= pieces.length <= arr.length <= 100
- sum(pieces[i].length) == arr.length
- 1 <= pieces[i].length <= arr.length
- 1 <= arr[i], pieces[i][j] <= 100
- arr 中的整数 互不相同
- pieces 中的整数 互不相同（也就是说，如果将 pieces 扁平化成一维数组，数组中的所有整数互不相同）

思路：

拿到这个题目，首先需要明确我们要判断给定的不允许重新排序的整数数组 pieces 是否能够以任意顺序连接形成目标数组 arr 。选择使用哈希表（Map）来存储 pieces 中每个数组的第一个元素以及对应的整个数组，这样在遍历 arr 时，可以快速找到起始元素对应的数组，然后依次对比后续元素是否匹配。

1. 首先创建一个 Map 数据结构来存储 pieces 中每个子数组的首元素及其对应的整个子数组。
2. 遍历 arr 数组，通过 Map 快速查找当前元素是否是某个子数组的首元素。
3. 如果是，再依次对比后续元素是否与对应的子数组元素匹配。
4. 如果在匹配过程中发现不匹配，立即返回 false 。
5. 如果能够顺利遍历完 arr 数组都没有出现不匹配的情况，则返回 true 。

时间复杂度：O(n)，其中 n 是 arr 数组的长度。因为我们对 arr 进行了一次遍历，并且在查找和比较过程中，Map 的操作平均时间复杂度也是 O(1)。
空间复杂度：O(m)，其中 m 是 pieces 中不同首元素的数量。主要是用于存储 Map 结构。

```javascript
var canFormArray = function (arr, pieces) {
  let map = new Map();
  pieces.forEach((item) => {
    map.set(item[0], item);
  });

  let i = 0;
  while (i < arr.length) {
    if (!map.has(arr[i])) {
      return false;
    }
    let item = map.get(arr[i]);
    for (let j = 0; j < item.length; j++) {
      if (arr[i++] !== item[j]) {
        return false;
      }
    }
  }
  return true;
};
```
