# 可怜的小猪

有 buckets 桶液体，其中 正好有一桶 含有毒药，其余装的都是水。它们从外观看起来都一样。为了弄清楚哪只水桶含有毒药，你可以喂一些猪喝，通过观察猪是否会死进行判断。不幸的是，你只有 minutesToTest 分钟时间来确定哪桶液体是有毒的。

喂猪的规则如下：

- 选择若干活猪进行喂养
- 可以允许小猪同时饮用任意数量的桶中的水，并且该过程不需要时间。
- 小猪喝完水后，必须有 minutesToDie 分钟的冷却时间。在这段时间里，你只能观察，而不允许继续喂猪。
- 过了 minutesToDie 分钟后，所有喝到毒药的猪都会死去，其他所有猪都会活下来。
- 重复这一过程，直到时间用完。

给你桶的数目 buckets ，minutesToDie 和 minutesToTest ，返回 在规定时间内判断哪个桶有毒所需的 最小 猪数 。

示例 1：

```js
输入：buckets = 1000, minutesToDie = 15, minutesToTest = 60
输出：5
```

示例 2：

```js
输入：buckets = 4, minutesToDie = 15, minutesToTest = 15
输出：2
```

示例 3：

```js
输入：buckets = 4, minutesToDie = 15, minutesToTest = 30
输出：2
```

提示：

1 <= buckets <= 1000
1 <= minutesToDie <= minutesToTest <= 100

思路：

拿到这个题目，首先要明确我们的目标是在给定的时间和条件下，通过合理安排喂猪的策略，用最少的猪来确定哪桶液体有毒。由于每头猪在每次实验中都可以同时喝多桶水，且有冷却时间，所以可以考虑利用进制编码的思想来解决问题。选择这种方法的理由是能够有效地将桶的数量与猪的实验结果建立对应关系，通过猪的生死状态组合来确定有毒的桶。

1. 首先计算在给定的总测试时间内，每头猪能够进行实验的次数，即 `times = minutesToTest / minutesToDie` 。
2. 每次实验加上猪存活这一情况，所以每头猪能表示的状态数为 `base = times + 1` 。
3. 接下来将桶的数量转换为以 `base` 为底的对数，即 `temp = Math.log(buckets) / Math.log(base)` ，得到理论上需要的猪的数量。
4. 最后使用 `Math.ceil` 向上取整，得到最终需要的最少猪的数量，以确保能够涵盖所有可能的情况。

时间复杂度：主要的计算是对数运算和简单的算术运算，时间复杂度为 O(1) ，因为这些操作的执行时间不随输入规模（桶的数量）的增加而显著增加。
空间复杂度：使用了几个固定大小的变量来存储中间结果，空间复杂度为 O(1) 。

```js
const poorPigs = (buckets, minutesToDie, minutesToTest) => {
  const times = minutesToTest / minutesToDie;
  const base = times + 1;

  const temp = Math.log(buckets) / Math.log(base);
  const res = Math.ceil(temp);
  return res;
};
```
