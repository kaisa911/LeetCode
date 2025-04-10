# 水壶问题

有两个水壶，容量分别为 x 和 y 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 target 升。

你可以：

- 装满任意一个水壶
- 清空任意一个水壶
- 将水从一个水壶倒入另一个水壶，直到接水壶已满，或倒水壶已空。

示例 1:

```javascript
输入: x = 3,y = 5,target = 4
输出: true
解释：
按照以下步骤操作，以达到总共 4 升水：

1. 装满 5 升的水壶(0, 5)。
2. 把 5 升的水壶倒进 3 升的水壶，留下 2 升(3, 2)。
3. 倒空 3 升的水壶(0, 2)。
4. 把 2 升水从 5 升的水壶转移到 3 升的水壶(2, 0)。
5. 再次加满 5 升的水壶(2, 5)。
6. 从 5 升的水壶向 3 升的水壶倒水直到 3 升的水壶倒满。5 升的水壶里留下了 4 升水(3, 4)。
7. 倒空 3 升的水壶。现在，5 升的水壶里正好有 4 升水(0, 4)。
参考：来自著名的 "Die Hard"
```

示例 2:

```javascript
输入: (x = 2), (y = 6), (target = 5);
输出: false;
```

示例 3:

```javascript
输入: x = 1, y = 2, target = 3
输出: true
解释：同时倒满两个水壶。现在两个水壶中水的总量等于 3。
```

提示:

- 1 <= x, y, target <= 10^3

思路：
拿到这个题目后，首先可以想到这是一个关于操作组合来达到目标值的问题。因为可以对两个水壶进行装满、清空和倒水操作，最直接的思路可能是通过模拟这些操作来判断是否能达到目标值，但这种方法可能会比较繁琐且效率不高。而给定的解法利用了数学原理，考虑到两个水壶的容量和目标值之间的关系，特别是通过最大公约数来判断是否能达到目标值，这种方法的选择是很巧妙的，因为它避免了复杂的操作模拟，从数学本质上寻找答案。

1. 首先判断两个水壶容量之和是否小于目标值，如果是，那无论怎么操作都不可能达到目标值，所以直接返回 false。这是基于实际操作的一个简单判断。
2. 接着判断如果其中一个水壶容量为 0，那么只有目标值为 0 或者等于另一个非 0 水壶容量时才能达到目标值，这是对特殊情况的处理。
3. 最后通过判断目标值是否能被两个水壶容量的最大公约数整除来确定是否能达到目标值。因为通过装满、倒空和倒水操作能得到的水量必然是两个水壶容量最大公约数的倍数。

时间复杂度：

- 计算最大公约数的函数 gcd 使用了辗转相除法，时间复杂度为 O(log(min(x,y)))。
- 在 canMeasureWater 函数中，除了 gcd 函数调用外，其他操作都是常数时间。所以总的时间复杂度为 O(log(min(x,y)))。

空间复杂度：代码中除了函数调用栈的空间外，没有额外的数据结构占用空间，空间复杂度为 O(1)。

```javascript
var canMeasureWater = function (x, y, z) {
  if (x + y < z) {
    return false;
  }
  if (x === 0 || y === 0) {
    return z === 0 || x + y === z;
  }
  return z % gcd(x, y) === 0;
};
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
```
