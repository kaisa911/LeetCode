# 删除排序数组中的重复项 II

给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

_示例  1:_

```
给定 nums = [1,1,1,2,2,3],

函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。

你不需要考虑数组中超出新长度后面的元素。
```

**示例  2:**

```
给定 nums = [0,0,1,1,1,1,2,3,3],

函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。

你不需要考虑数组中超出新长度后面的元素。
```

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

**思路：**

这个问题可以通过遍历数组并使用贪心算法来解决。以下是算法的基本步骤：

1. 初始化：设置一个计数器 count 来记录当前元素的重复次数，以及一个指针 i 从数组的第二个元素开始遍历。
2. 遍历数组：使用 while 循环遍历数组 nums，从第二个元素开始。
3. 检查重复：如果当前元素 nums[i] 与前一个元素 nums[i-1] 相同，则增加 count。
4. 删除重复元素：
  - 如果 count 大于 2，说明当前元素的重复次数超过了限制，使用 splice 方法删除当前元素，并减少 i 的值以重新检查当前位置的元素。
  - 如果当前元素与前一个元素不同，重置 count 为 1。
5. 更新指针：无论是否删除元素，都增加 i 的值以继续遍历。
6. 返回新长度：遍历结束后，返回数组的新长度。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。因为算法只遍历了数组一次。
空间复杂度：O(1)，除了输入数组本身，没有使用额外的空间。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1; // 用于记录当前元素的重复次数
  let i = 1; // 从数组的第二个元素开始遍历
  while (i < nums.length) {
    if (nums[i] === nums[i - 1]) {
      count++;
      if (count > 2) {
        nums.splice(i, 1); // 删除重复元素
        i--; // 重新检查当前位置
      } else {
        i++; // 继续检查下一个元素
      }
    } else {
      count = 1; // 重置计数器
      i++; // 继续检查下一个元素
    }
  }
  return nums.length; // 返回新数组的长度
};
```
