# n 个骰子的点数

将一个骰子投掷 n 次，获得的总点数为 s，s 的可能范围为 n∼6n。

掷出某一点数，可能有多种掷法，例如投掷 2 次，掷出 3 点，共有 [1,2],[2,1] 两种掷法。

请求出投掷 n 次，掷出 n∼6n 点分别有多少种掷法。

数据范围

- 1≤n≤10

样例 1

```js
输入：n=1

输出：[1, 1, 1, 1, 1, 1]

解释：投掷1次，可能出现的点数为1-6，共计6种。每种点数都只有1种掷法。所以输出[1, 1, 1, 1, 1, 1]。
```

样例 2

```js
输入：n=2

输出：[1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]

解释：投掷2次，可能出现的点数为2-12，共计11种。每种点数可能掷法数目分别为1,2,3,4,5,6,5,4,3,2,1。所以输出[1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]。
```

```ts
function twoSum(n: number): number[] {
  const dp: number[] = new Array(70).fill(0);
  for (let i = 1; i <= 6; i++) {
    dp[i] = 1;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = i * 6; j >= i; j--) {
      dp[j] = 0;
      for (let cur = 1; cur <= 6; cur++) {
        if (j - cur < i - 1) break;
        dp[j] += dp[j - cur];
      }
    }
  }
  const ans: number[] = [];
  const sum = Math.pow(6, n);
  for (let i = n; i <= 6 * n; i++) {
    ans.push(dp[i] / sum);
  }
  return ans;
}
```
