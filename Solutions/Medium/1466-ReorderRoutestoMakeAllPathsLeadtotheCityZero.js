/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const toMap = new Map(),
    fromMap = new Map();
  for (let connection of connections) {
    if (!fromMap.has(connection[1])) {
      fromMap.set(connection[1], []);
    }
    fromMap.get(connection[1]).push(connection[0]);
    if (!toMap.has(connection[0])) {
      toMap.set(connection[0], []);
    }
    toMap.get(connection[0]).push(connection[1]);
  }

  let count = 0;
  const validCityRoad = new Array(n).fill(false);
  const dfs = function (currCity) {
    validCityRoad[currCity] = true;
    const fromCities = fromMap.get(currCity);
    if (fromCities) {
      for (let city of fromCities) {
        dfs(city);
      }
    }
    const toCities = toMap.get(currCity);
    if (toCities) {
      for (let city of toCities) {
        if (!validCityRoad[city]) {
          count++;
          dfs(city);
        }
      }
    }
  };

  dfs(0);
  return count;
};
