# K 次串联后最大子数组之和

给定一个整数数组 arr 和一个整数 k ，通过重复 k 次来修改数组。

例如，如果 arr = [1, 2] ， k = 3 ，那么修改后的数组将是 [1, 2, 1, 2, 1, 2] 。

返回修改后的数组中的最大的子数组之和。注意，子数组长度可以是 0，在这种情况下它的总和也是 0。

由于 结果可能会很大，需要返回的 109 + 7 的 模 。

示例 1：

```js
输入：arr = [1,2], k = 3
输出：9
```

示例 2：

```js
输入：arr = [1,-2,1], k = 5
输出：2
```

示例 3：

```js
输入：arr = [-1,-2], k = 7
输出：0
```

提示：

- 1 <= arr.length <= 10^5
- 1 <= k <= 10^5
- -10^4 <= arr[i] <= 10^4

思路：

1. 计算数组总和：首先计算原数组的总和 arrSum。
2. 初始化结果：初始化 tempSum 为 0，用于存储遍历时的最大子数组和，res 为 0，用于存储最终结果。
3. 遍历数组：遍历数组，每次遍历时都考虑数组连接的情况。由于数组会重复 k 次，我们实际上只需要遍历最多两轮（即 2 \* len），因为超过两轮后，剩余的部分总和不会超过两轮内的总和。
4. 更新最大子数组和：在遍历过程中，使用 Kadane 算法的思想来更新 tempSum 和 res。Kadane 算法是一种用来求解最大子数组和的算法，它通过维护一个到当前位置为止的最大子数组和来实现。
5. 处理剩余的重复：如果 arrSum 大于 0，说明数组中所有元素都是正数，那么重复更多次只会使总和更大。因此，如果 arrSum 大于 0 且 k 大于 2，我们可以简单地将 arrSum 乘以 (k - 2) 加到 res 上。
6. 取模：由于结果可能很大，需要对结果取 10^9 + 7 的模。

时间复杂度：O(n)，其中 n 是数组 arr 的长度。在最坏的情况下，需要遍历数组两次。
空间复杂度：O(1)，算法只使用了常量级别的额外空间。

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
  let len = arr.length,
    arrSum = 0;
  //res最后的结果
  let tempSum = 0,
    res = 0;
  let loopCount = Math.min(2, k) * len;
  //数组总和
  for (let i = 0; i < len; ++i) arrSum += arr[i];
  // [1,-2,1,1,-2,1]
  for (let i = 0; i < loopCount; ++i) {
    // 取值
    let val = arr[i % len];
    tempSum = tempSum + val > 0 ? tempSum + val : 0;
    res = Math.max(res, tempSum);
  }
  // arrSum > 0就证明都要，这时res === arrSum
  if (arrSum > 0) {
    while (k-- > 2) {
      res = res + arrSum;
    }
  }
  return res % 1000000007;
};
```
