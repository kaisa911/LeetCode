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
一开始拿到这个题，我就想，在当前方法里，就把数组拷贝一下就可以了，然后在 sumRange 里通过 slice（）方法获取 i，j 这两个索引内的值，然后 reduce()求和。结果报错了。。说是超时了。。

后来就想到，要不把每个索引以前的和都求出来放到 sum 里，在 sumRange 里只需要取索引做差就好了。

```js
/**
 * @param {number[]} nums
 */

var NumArray = function(nums) {
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

NumArray.prototype.sumRange = function(i, j) {
  return i == 0 ? this.sum[j] : this.sum[j] - this.sum[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```

附上超时版本

```js
/**
 * @param {number[]} nums
 */

var NumArray = function(nums) {
  this.arr = [...nums];
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */

NumArray.prototype.sumRange = function(i, j) {
  return this.arr.slice(i, j + 1).reduce((sum, current) => (sum += current), 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```
