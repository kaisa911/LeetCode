var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0;
  for (let bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five < 1) {
        return false;
      }
      five--;
      ten++;
    } else {
      if (five >= 1 && ten >= 1) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
