# 区域和检索 - 数组不可变

给定一个整数数组  nums，求出数组从索引  i  到  j  (i ≤ j) 范围内元素的总和，包含  i,  j  两点。

**示例：**

```
给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

说明:

你可以假设数组不可变。
会多次调用  sumRange  方法。

思路：
NumArray 类的构造函数：

1. 初始化：构造函数接收一个整数数组 nums 作为参数。
2. 创建累积和数组：创建一个名为 this.sum 的数组，用于存储累积和。this.sum[0] 初始化为 nums[0]，因为索引 0 到 0 的区间和就是 nums[0] 自身。
3. 填充累积和数组：使用一个 for 循环从索引 1 开始遍历 nums 数组。在每次迭代中，计算当前索引 i 的累积和，即 this.sum[i - 1] + nums[i]，并将结果存储在 this.sum[i] 中。

sumRange 方法：

1. 边界条件：sumRange 方法检查索引 i 是否为 0。如果是 0，则直接返回 this.sum[j]，因为累积和数组的第一个元素之后的所有元素都包含了从索引 0 到 j 的累积和。
2. 计算区间和：如果 i 不为 0，则返回 this.sum[j] - this.sum[i - 1]。这样计算的结果是从索引 i 到 j 的区间和，因为 this.sum[i - 1] 是从索引 0 到 i - 1 的累积和，从 this.sum[j] 中减去它就可以得到从 i 到 j 的和。

这种方法的空间复杂度为 O(n)，其中 n 是输入数组 nums 的长度，因为我们需要存储累积和数组。而 sumRange 方法的时间复杂度为 O(1)，因为它只需要返回累积和数组中两个元素的差值。

```js
/**
 * @param {number[]} nums
 */

var NumArray = function (nums) {
  this.sum = [];
  this.sum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    this.sum[i] = this.sum[i - 1] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */

NumArray.prototype.sumRange = function (i, j) {
  return i == 0 ? this.sum[j] : this.sum[j] - this.sum[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```
