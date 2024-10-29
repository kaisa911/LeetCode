# 打乱数组

给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

实现 Solution class:

Solution(int[] nums) 使用整数数组 nums 初始化对象
int[] reset() 重设数组到它的初始状态并返回
int[] shuffle() 返回数组随机打乱后的结果

示例 1：

```js
输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
```

提示：

- 1 <= nums.length <= 50
- -10^6 <= nums[i] <= 10^6
- nums 中的所有元素都是 唯一的
- 最多可以调用 10^4 次 reset 和 shuffle

思路：

这道题要求实现一个能够打乱数组且所有排列等可能的类。对于初始化函数，直接保存原始数组和当前数组。对于重置函数，将当前数组恢复为原始数组。对于打乱函数，原解法采用了经典的 Fisher - Yates 洗牌算法，其思路是从数组末尾开始，逐步将当前位置的元素与随机选择的一个位置（包括当前位置及之后的位置）的元素进行交换，这样可以保证每个元素出现在每个位置的概率相同，从而实现随机打乱。

1. 在构造函数中：
   - 将传入的数组 nums 赋值给 this.nums，作为当前数组。
   - 通过 this.original = this.nums.slice()创建原始数组的副本并保存，用于重置操作。
2. 在 reset 函数中：
   - 通过 this.nums = this.original.slice()将当前数组恢复为原始数组的副本，然后返回当前数组。
3. 在 shuffle 函数中：
   - 通过循环遍历数组，对于每个位置 i：
     - 计算一个随机位置 j，范围是从 i 到数组末尾（Math.floor(Math.random() \* (this.nums.length - i))+ i）。
     - 交换当前位置 i 和随机位置 j 的元素，通过临时变量 temp 来辅助交换。
   - 最后返回打乱后的数组。

时间复杂度：在 shuffle 函数中，循环遍历数组一次，每次交换操作时间复杂度为 O(1)，所以时间复杂度为 O(n)，其中 n 是数组 nums 的长度。
空间复杂度：在构造函数中创建了一个与 nums 长度相同的原始数组副本，空间复杂度为 O(n)。在其他操作中，没有额外的空间使用（不考虑函数调用栈等固定开销），所以总的空间复杂度为 O(n)。

```js
var Solution = function (nums) {
  this.nums = nums;
  this.original = this.nums.slice();
};

Solution.prototype.reset = function () {
  this.nums = this.original.slice();
  return this.nums;
};

Solution.prototype.shuffle = function () {
  for (let i = 0; i < this.nums.length; ++i) {
    const j = Math.floor(Math.random() * (this.nums.length - i)) + i;
    const temp = this.nums[i];
    this.nums[i] = this.nums[j];
    this.nums[j] = temp;
  }
  return this.nums;
};
```
