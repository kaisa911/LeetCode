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
