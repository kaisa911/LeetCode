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
题目的整理分析
拿到这个题目，首先要明确需要根据 arr2 中元素的相对顺序来对 arr1 进行排序。由于数字的范围有限，可以考虑使用计数排序的思想，创建一个固定长度的数组来统计每个数字出现的次数，然后按照规则生成结果数组。选择这种方法是因为它在处理这种特定的排序需求时，能够有效地利用数字范围有限的特点，避免复杂的比较排序操作，从而提高效率。

1. 首先创建一个长度为 1001 的数组 count 来统计 arr1 中每个数字出现的次数。这一步为后续的排序操作准备了数据，通过一次遍历就能够得到每个数字的出现频率。
2. 遍历 arr2，根据 count 数组中对应数字的出现次数，将数字添加到结果数组 res 中，并减少对应数字的计数。这一步按照 arr2 中元素的顺序，准确地将其在 arr1 中出现的次数依次添加到结果数组中，保证了这些元素的相对顺序。
3. 再次遍历 count 数组，处理不在 arr2 中的数字，将其添加到 res 中。这一步处理了那些不在 arr2 中的数字，按照升序添加到结果数组的末尾。

时间复杂度：O(m + n)，其中 m 是 arr1 的长度，n 是 arr2 的长度。创建 count 数组和两次遍历的操作都与输入数组的长度成正比。
空间复杂度：O(1001)，用于创建 count 数组，是一个固定大小的额外空间，不随输入规模变化。

```js
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let count = new Array(1001).fill(0);
  let res = [];

  for (let num of arr1) {
    count[num]++;
  }

  for (let num of arr2) {
    while (count[num] > 0) {
      res.push(num);
      count[num]--;
    }
  }

  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      res.push(i);
      count[i]--;
    }
  }

  return res;
};
```
