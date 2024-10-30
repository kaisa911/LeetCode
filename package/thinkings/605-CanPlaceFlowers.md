# 种花问题

假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。

示例 1：

```javascript
输入：flowerbed = [1,0,0,0,1], n = 1
输出：true
```

示例 2：

```javascript
输入：flowerbed = [1,0,0,0,1], n = 2
输出：false
```

提示：

- 1 <= flowerbed.length <= 2 \* 10^4
- flowerbed[i] 为 0 或 1
- flowerbed 中不存在相邻的两朵花
- 0 <= n <= flowerbed.length

思路：
对于种花问题，上述代码采用了一种遍历花坛数组并计算可种花位置的方法。通过依次检查花坛中的每个位置，根据已种花的位置来计算中间可种花的数量，能够直接判断是否能种下指定数量的花。

1. 首先在花坛数组的开头和结尾分别添加一个 0，表示虚拟的未种花位置，这样可以简化边界处理。
2. 然后初始化可种花数量`count`为 0，并开始遍历花坛数组（从索引 1 到倒数第 2 个位置，因为两端是虚拟位置）：
   - 当发现当前位置及其左右相邻位置都为 0 时（`flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0`）：
     - 在当前位置种花（`flowerbed[i] = 1`），并将`count`加 1。
     - 如果`count`大于等于`n`，直接返回`true`，因为已经可以种下足够数量的花。
3. 最后返回`count`是否大于等于`n`，判断是否能种下`n`朵花。

时间复杂度：对花坛数组进行了一次遍历，加上在数组两端添加虚拟元素的操作时间复杂度也是与数组长度相关，所以时间复杂度为 O(m)，其中`m`是花坛长度。
空间复杂度：由于在原花坛数组两端添加了元素，在最坏情况下，空间复杂度为 O(m)。不过实际上只是增加了两个元素的空间，相比原数组长度增长可忽略不计，近似为 O(1)。

```javascript
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed.unshift(0);
  flowerbed.push(0);
  let count = 0;
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      count++;
    }
    if (count >= n) return true;
  }
  return count >= n;
};
```
