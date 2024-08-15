# 第一个错误的版本

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用  bool isBadVersion(version)  接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

**示例:**

```js
给定 n = 5，并且 version = 4 是第一个错误的版本。

调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true

所以，4 是第一个错误的版本。 
```

思路：

使用二分查找算法，它是一种高效的查找算法，特别是在这种需要查找满足特定条件的第一个元素的场景中。通过每次将搜索区间缩小一半，算法能够以对数时间复杂度找到第一个错误的版本。

1. 初始化：定义两个变量low和high，分别初始化为1和n，代表当前的搜索区间。
2. 二分查找：使用while循环实现二分查找，循环条件是low小于high。
3. 计算中间索引：在循环体内部，计算中间索引mid，使用low + Math.floor((high - low) / 2)。
4. 判断中间版本：调用isBadVersion(mid)判断中间版本是否错误。
5. 更新搜索区间：
  - 如果mid是错误的版本，则将high更新为mid，因为错误的版本之后的所有版本也都是错误的，因此搜索区间的上限可以缩小到mid。
  - 如果mid不是错误版本，则将low更新为mid + 1，因为我们知道从mid + 1到high之间的某个版本是错误的。
6. 返回结果：当low和high相遇时，即low == high，循环结束。此时low（或high）即为第一个错误的版本，返回low。

这种方法的时间复杂度是O(log n)，空间复杂度是O(1)。

```js
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let low = 1;
    let high = n;
    while (low < high) {
      let mid = low + Math.floor((high - low) / 2);
      if (isBadVersion(mid)) {
        // 如果mid是错误版本，则第一个错误版本在[low, mid]
        high = mid;
      } else {
        // 如果mid不是错误版本，则第一个错误版本在[mid + 1, high]
        low = mid + 1;
      }
    }
    // 当low和high相遇时，即是第一个错误版本
    return low;
  };
};
```
