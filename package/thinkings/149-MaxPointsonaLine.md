# 直线上最多的点数

给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。求最多有多少个点在同一条直线上。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg)

```js
输入：points = [[1,1],[2,2],[3,3]]
输出：3
```

示例 2：
![1](https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg)

```js
输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
输出：4
```

提示：

- 1 <= points.length <= 300
- points[i].length == 2
- -10^4 <= xi, yi <= 10^4
- points 中的所有点 互不相同

思路：

1. 特殊情况处理：如果点的数量小于等于 2，那么最大点数就是点的总数。
2. 遍历每个点：对于每个点作为起点，计算它与其他点的斜率，并将这些斜率存储在哈希表中。
3. 计算斜率：对于每一对点，计算它们之间的斜率。如果斜率无法确定（即垂直线），则可以给定一个特殊值。
4. 使用最大公约数（GCD）：为了确保相同的斜率被认为是相等的，需要对斜率的分子和分母求最大公约数，并进行约简。
5. 更新最大点数：对于每个点，计算与它在同一直线上的点的数量，并更新最大点数。

时间复杂度：O(n^2)，其中 n 是点的数量。需要遍历每个点，并对于每个点，再次遍历所有其他点来计算斜率。
空间复杂度：O(n^2)，在最坏的情况下，每个点都可能与其他所有点共线，因此哈希表中可能需要存储所有的斜率。

```javascript
var maxPoints = function (points) {
  const n = points.length;
  if (n <= 2) {
    return n;
  }
  let ret = 0;
  for (let i = 0; i < n; i++) {
    if (ret >= n - i || ret > n / 2) {
      break;
    }
    const map = new Map();
    for (let j = i + 1; j < n; j++) {
      let x = points[i][0] - points[j][0];
      let y = points[i][1] - points[j][1];
      if (x === 0) {
        y = 1;
      } else if (y === 0) {
        x = 1;
      } else {
        if (y < 0) {
          x = -x;
          y = -y;
        }
        const gcdXY = gcd(Math.abs(x), Math.abs(y));
        x /= gcdXY;
        y /= gcdXY;
      }
      const key = y + x * 20001;
      map.set(key, (map.get(key) || 0) + 1);
    }
    let maxn = 0;
    for (const num of map.values()) {
      maxn = Math.max(maxn, num + 1);
    }
    ret = Math.max(ret, maxn);
  }
  return ret;
};
const gcd = (a, b) => {
  return b != 0 ? gcd(b, a % b) : a;
};
```
