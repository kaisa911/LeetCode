# 数组的相对排序

给你两个数组，arr1 和  arr2，

- arr2  中的元素各不相同
- arr2 中的每个元素都出现在  arr1  中
  对 arr1  中的元素进行排序，使 arr1 中项的相对顺序和  arr2  中的相对顺序相同。未在  arr2  中出现过的元素需要按照升序放在  arr1  的末尾。

**示例：**

```js
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
```

**提示：**

- arr1.length, arr2.length <= 1000
- 0 <= arr1[i], arr2[i] <= 1000
- arr2  中的元素  arr2[i]  各不相同
- arr2 中的每个元素  arr2[i]  都出现在  arr1  中

**思路：**

- 循环 arr2，把 arr1 里的数据取出来，放进 res 里
- 返回的时候，把剩下的数组排序一下

```js
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let res = [];
  let arrTemp = arr1;
  for (let i = 0, len = arr2.length; i < len; ++i) {
    res = res.concat(arrTemp.filter(item => item === arr2[i]));
    arrTemp = arrTemp.filter(item => item !== arr2[i]);
  }
  return res.concat(arrTemp.sort((a, b) => a - b));
};
```
