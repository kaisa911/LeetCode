# 快乐数

编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例:

```js
输入: 19;
输出: true;
解释: 12 + 92 = 82;
82 + 22 = 68;
62 + 82 = 100;
12 + 02 + 02 = 1;
```

**思路：**

以下是使用快慢指针检测快乐数的步骤：

1. 初始化两个指针：一个快指针fast和一个慢指针slow，都指向初始的输入值n。
2. 计算下一个值：对于慢指针，计算n的各位数字平方和，更新slow的值为这个平方和。
3. 移动指针：慢指针slow移动到下一个数（即计算n的平方和后得到的数）。
4. 使用快指针：对于快指针fast，执行两次更新操作，即计算两次平方和，然后移动到得到的数。
5. 检测循环：如果在任何时候slow和fast相遇（即slow和fast指向同一个数），则表示存在循环，这个数不是快乐数。
6. 检查终止条件：如果慢指针slow指向的数变为1，那么这个数是快乐数。
7. 继续或停止：如果快指针fast指向的数变为1，或者检测到循环，则停止迭代。

使用快慢指针的好处是，如果存在循环，我们可以更快地检测到它，而不是使用集合来记录所有访问过的数。这种方法在最坏情况下的时间复杂度是O(k)，其中k是到达循环或数字1的步数。空间复杂度是O(1)，因为我们只使用了常数级别的额外空间。
```js
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  let slow = n;
  let fast = n;
  do {
    // Calculate the next value for slow pointer
    slow = nextNumber(slow);
    // Calculate the next two values for fast pointer
    fast = nextNumber(nextNumber(fast));
  } while (slow !== fast); // If they meet, there's a cycle

  return slow === 1;
};

const nextNumber = (x) => {
  let sum = 0;
  while (x) {
    sum += (x % 10) ** 2;
    x = Math.floor(x / 10);
  }
  return sum;
};
```
