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

拿到这个题目，首先需要理解“快乐数”的定义，核心在于不断计算每个数位数字的平方和，并观察这个过程能否最终得到 1。解题思路可以考虑使用某种方式来追踪计算过程中的数字，以判断是最终能得到 1 还是陷入循环。选择快慢指针的方法，是因为它能够高效地检测循环，避免了使用大量额外空间来存储已经计算过的数字。

1. 初始化快慢指针指向输入值 n，为后续的循环检测做准备。
2. 慢指针每次计算一次下一个数字的平方和，快指针计算两次，这样可以更快地检测到循环。
3. 通过 do-while 循环不断更新快慢指针的值，直到它们相等，从而判断是否存在循环。
4. 最终根据慢指针的值是否为 1 来确定输入的数是否为快乐数。

时间复杂度：O(k)，其中 k 是到达循环或数字 1 的步数。因为在每次循环中，计算下一个数字的操作时间复杂度是与数字的位数相关的，是一个常数级别，而循环的次数取决于到达循环或 1 的步数。
空间复杂度：O(1)，只使用了固定数量的变量，不随输入规模的变化而变化。

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
