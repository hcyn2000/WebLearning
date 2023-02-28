/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const map1 = new Map(items1);
  const map2 = new Map(items2);
  for (let [key, value] of map1.entries()) {
    if (!map2.has(key)) {
      map2.set(key, value);
      continue;
    }
    map2.set(key, map2.get(key) + value);
  }
  return [...map2.entries()].sort((a, b) => a[0] - b[0]);
};
