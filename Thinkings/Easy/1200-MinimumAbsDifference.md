# 最小绝对差

给你个整数数组 arr，其中每个元素都 不相同。

请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。

每对元素对 [a,b] 如下：

a , b 均为数组 arr 中的元素
a < b
b - a 等于 arr 中任意两个元素的最小绝对差

示例 1：
```javascript
输入：arr = [4,2,1,3]
输出：[[1,2],[2,3],[3,4]]
```
示例 2：

```javascript
输入：arr = [1,3,6,10,15]
输出：[[1,3]]
```
示例 3：

```javascript
输入：arr = [3,8,-10,23,19,-4,-14,27]
输出：[[-14,-10],[19,23],[23,27]]
```
提示：

- 2 <= arr.length <= 10^5
- -10^6 <= arr[i] <= 10^6

```javascript
var minimumAbsDifference = function (arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let best = Number.MAX_VALUE;
  let res = [];
  for (let i = 0; i < n - 1; ++i) {
    let delta = arr[i + 1] - arr[i];
    if (delta < best) {
      best = delta;
      res = [];
      const pair = [];
      pair.push(arr[i]);
      pair.push(arr[i + 1]);
      res.push(pair);
    } else if (delta === best) {
      const pair = [];
      pair.push(arr[i]);
      pair.push(arr[i + 1]);
      res.push(pair);
    }
  }
  return res;
};
```
