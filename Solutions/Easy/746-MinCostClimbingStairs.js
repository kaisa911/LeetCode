/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = cost => {
  const len = cost.length;
  if (len === 0) return 0;
  if (len === 1) return cost[0];
  for (let i = len - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }
  return Math.min(cost[0], cost[1]);
};
