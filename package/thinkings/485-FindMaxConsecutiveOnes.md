# 最大连续 1 的个数

给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

示例 1：

```javascript
输入：nums = [1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
```

示例 2:

```javascript
输入：nums = [1,0,1,1,0,1]
输出：2
```

提示：

- 1 <= nums.length <= 10^5
- nums[i] 不是 0 就是 1.

思路：

对于求二进制数组中最大连续1的个数这个问题，最直接的思路是遍历数组。
选择这种方法是因为通过一次线性遍历就可以统计出连续1的个数。在遍历过程中，每当遇到1就增加计数变量，遇到0就将计数变量重置为0，同时不断比较当前连续1的计数和之前记录的最大连续1的计数，更新最大计数。

1. 首先初始化两个变量，`count`用于记录当前连续1的个数，`number`用于记录最大连续1的个数，初始值都为0。
2. 然后开始遍历数组`nums`，从索引0开始到数组末尾，每次索引增加1。
   - 当`nums[h]`等于1时，说明遇到了1，将`count`加1。
   - 当`nums[h]`等于0时，说明遇到了0，将`count`重置为0，因为连续1被中断了。
   - 每次更新`count`后，都比较`count`和`number`的大小。如果`count`大于`number`，就将`number`更新为`count`，这样`number`始终记录着最大连续1的个数。
3. 最后返回`number`，即为最大连续1的个数。


时间复杂度：只进行了一次对数组`nums`的遍历，数组长度为`n`（`1 <= n <= 10^5`），所以时间复杂度为O(n)。
空间复杂度：只使用了`count`和`number`两个额外变量，没有使用额外的数据结构来存储数据，所以空间复杂度为O(1)。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var count = 0;
  var number = 0;
  for (var h = 0; h < nums.length; h = h + 1) {
    if (nums[h] == 1) {
      count = count + 1;
    } else {
      count = 0;
    }
    if (count > number) {
      number = count;
    }
  }
  return number;
};
```
