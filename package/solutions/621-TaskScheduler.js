var leastInterval = function (tasks, n) {
  const freq = _.countBy(tasks);
  const counts = Object.values(freq).sort((a, b) => b - a);
  let maxExec = counts[0];
  let maxCount = 1;

  for (let i = 1; i < counts.length && counts[i] === maxExec; i++) {
    maxCount++;
  }

  return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length);
};
