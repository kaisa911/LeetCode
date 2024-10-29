# Fizz Buzz

给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
answer[i] == "Fizz" 如果 i 是 3 的倍数。
answer[i] == "Buzz" 如果 i 是 5 的倍数。
answer[i] == i （以字符串形式）如果上述条件全不满足。

示例 1：

```javascript
输入：n = 3
输出：["1","2","Fizz"]
```

示例 2：

```javascript
输入：n = 5
输出：["1","2","Fizz","4","Buzz"]
```

示例 3：

```javascript
输入：n = 15
输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

提示：

- 1 <= n <= 10^4

思路：

这道题目的核心是对 1 到 n 的整数进行分类判断，根据是否能被 3、5 整除来确定对应的字符串。最直接的思路就是通过循环遍历 1 到 n 的每个整数，然后逐一判断其是否能被 3 和 5 整除，这种方法简单直接，易于理解和实现。

1. 首先创建一个空数组 answer，用于存储最终的结果。
2. 然后通过 for 循环从 1 遍历到 n：
   - 创建一个空数组 sb，用于临时存储当前整数对应的字符串。
   - 如果当前整数 i 能被 3 整除，将'Fizz'添加到 sb 中。
   - 如果当前整数 i 能被 5 整除，将'Buzz'添加到 sb 中。
   - 如果 sb 为空，说明当前整数既不能被 3 整除也不能被 5 整除，将整数 i 本身转换为字符串后添加到 sb 中。
   - 最后将 sb 中的元素连接成字符串并添加到 answer 数组中。
3. 循环结束后，返回 answer 数组。

时间复杂度：循环从 1 到 n，时间复杂度为 O(n)，其中 n 是输入的整数。
空间复杂度：创建了一个长度为 n 的数组 answer 来存储结果，空间复杂度为 O(n)。

```javascript
var fizzBuzz = function (n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    const sb = [];
    if (i % 3 === 0) {
      sb.push('Fizz');
    }
    if (i % 5 === 0) {
      sb.push('Buzz');
    }
    if (sb.length === 0) {
      sb.push(i);
    }
    answer.push(sb.join(''));
  }
  return answer;
};
```
