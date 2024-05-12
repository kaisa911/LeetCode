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

- 1 <= arr.length <= 105
- 1 <= k <= 105
- -104 <= arr[i] <= 104

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
    let len = arr.length, arrSum = 0; 
    //res最后的结果
    let tempSum = 0, res = 0; 
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
                res = (res + arrSum);
            }
        }
        return res % 1000000007;
};
```
