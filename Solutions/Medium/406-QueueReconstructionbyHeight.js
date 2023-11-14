/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    //如果身高不相等，按照身高从大到小排列
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    } else {
      //如果身高相等，按照k从小到大排列
      return a[1] - b[1];
    }
  });
  const queue = [];
  for (let i = 0; i < people.length; i++) {
    //people[i][1] = 当前人的k，下面这句意思为在queue队列中k位置添加people[i]
    queue.splice(people[i][1], 0, people[i]);
  }
  return queue;
};
