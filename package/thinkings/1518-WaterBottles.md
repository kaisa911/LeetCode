# 换水问题

超市正在促销，你可以用 numExchange 个空水瓶从超市兑换一瓶水。最开始，你一共购入了 numBottles 瓶水。

如果喝掉了水瓶中的水，那么水瓶就会变成空的。

给你两个整数 numBottles 和 numExchange ，返回你 最多 可以喝到多少瓶水。

示例 1：
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/sample_1_1875.png)

```javascript
输入：numBottles = 9, numExchange = 3
输出：13
解释：你可以用 3 个空瓶兑换 1 瓶水。
所以最多能喝到 9 + 3 + 1 = 13 瓶水。
```

示例 2：
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/sample_2_1875.png)

```javascript
输入：numBottles = 15, numExchange = 4
输出：19
解释：你可以用 4 个空瓶兑换 1 瓶水。
所以最多能喝到 15 + 3 + 1 = 19 瓶水。
```

提示：

- 1 <= numBottles <= 100
- 2 <= numExchange <= 100

思路：

这个问题要求我们计算，在给定的空水瓶数量 numBottles 和兑换规则 numExchange 下，最多可以喝多少瓶水。每次你喝掉一瓶水，水瓶就变成空瓶，而这些空瓶可以用来兑换新的水瓶。初始水瓶：你首先可以喝掉 numBottles 瓶水，得到 numBottles 个空瓶。兑换过程：每次你用 numExchange 个空瓶兑换 1 瓶水。兑换后，喝掉新水瓶的水，得到新的空瓶。持续兑换：直到空瓶数量小于 numExchange，无法再进行兑换为止。

1. 初始化 totalDrank 为 numBottles，表示你开始时喝掉了所有的水瓶。
2. 初始化 emptyBottles 为 numBottles，表示你一开始有这么多空瓶。
3. 兑换过程：
   - 只要空瓶数量 emptyBottles 大于等于 numExchange，就进行兑换。
   - 每次兑换可以得到 Math.floor(emptyBottles / numExchange) 瓶水。
   - 喝掉新水后，空瓶数量会变为 emptyBottles % numExchange + newBottles，即剩余的空瓶加上新获得的空瓶。
4. 当空瓶数量小于 numExchange 时，无法再进行兑换，循环结束。
5. 返回你总共喝掉的水瓶数 totalDrank。

时间复杂度：O (log (numBottles))，因为在循环中，每次空瓶数量至少会减少 numExchange 倍，所以循环的次数最多为对数级别。
空间复杂度：O (1)，使用了固定的几个变量，空间消耗不随输入规模变化

```javascript
var numWaterBottles = function (numBottles, numExchange) {
  let totalDrank = numBottles;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    // 兑换水瓶
    let newBottles = Math.floor(emptyBottles / numExchange);
    totalDrank += newBottles;

    // 计算剩余的空瓶
    emptyBottles = (emptyBottles % numExchange) + newBottles;
  }

  return totalDrank;
};
```
