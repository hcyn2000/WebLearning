/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  let n = grid.length;
  let len1 = n - 1;
  let list = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));

  for (let i = 0; i + 2 <= len1; i++) {
    let list1 = grid.slice(i, i + 3);
    for (let j = 0; j + 2 <= len1; j++) {
      let matrixList = [];
      let j1 = j + 3;
      for (let x = 0; x < 3; x++) {
        matrixList.push(...list1[x].slice(j, j1));
      }
      list[i][j] = Math.max(...matrixList);
    }
  }
  return list;
};
