# 数组中的逆序对

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

示例 1:

```js
输入: [7,5,6,4]
输出: 5
```

限制：

- 0 <= 数组长度 <= 50000

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (nums.length < 2) return 0;
  let count = 0;
  // 归并过程
  const merge = (left, right) => {
    let res = [],
      i,
      j;

    for (i = 0, j = 0; i < left.length && j < right.length; ) {
      if (left[i] > right[j]) {
        // 计算逆序对：如果左边数组元素大于右边，则表示该元素后面的所有元素都大于
        count += left.length - i;
        res.push(right[j++]);
      } else {
        res.push(left[i++]);
      }
    }
    while (i < left.length) {
      res.push(left[i++]);
    }
    while (j < right.length) {
      res.push(right[j++]);
    }
    return res;
  };

  const mergeSort = (arr) => {
    if (arr.length == 1) return arr;

    let mid = Math.floor(arr.length / 2);

    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  };
  mergeSort(nums);
  return count;
};

```
