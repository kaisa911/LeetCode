# 最小的 k 个数

输入整数数组 arr ，找出其中最小的 k 个数。例如，输入 4、5、1、6、2、7、3、8 这 8 个数字，则最小的 4 个数字是 1、2、3、4。

示例 1：

```js
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
```

示例 2：

```js
输入：arr = [0,1,2,1], k = 1
输出：[0]
```


限制：

- 0 <= k <= arr.length <= 10000
- 0 <= arr[i] <= 10000

**思路：**

排序，取前k个就行吧

```ts
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  arr.sort((a, b) => a - b);
  arr.length = k;
  return arr;
};
```
