# 和为 S 的连续正数序列

输入一个非负整数 S，打印出所有和为 S 的连续正数序列（至少含有两个数）。

例如输入 15，由于 1+2+3+4+5=4+5+6=7+8=15，所以结果打印出 3 个连续序列 1∼5、4∼6 和 7∼8。

数据范围

- 0≤S≤1000

样例

```js
输入：15

输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```

```ts
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let res: Array<number>[] = [];
  //滑动窗口左右界， 闭区间
  let left = 1;
  let right = 2;
  let sum = left + right; //滑动窗口内所有值的和

  while (right < target / 2 + 1) {
    if (sum === target) {
      res.push(range(left, right));
      right++;
      sum += right;
    } else if (sum < target) {
      right++;
      sum += right;
    } else if (sum > target) {
      sum -= left;
      left++;
    }
  }
  return res;
};

function range(left: number, right: number): Array<number> {
  let res: Array<number> = [];
  for (let i = left; i <= right; i++) {
    res.push(i);
  }
  return res;
}
```
