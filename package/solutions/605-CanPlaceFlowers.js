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
