/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort();
  let list = [folder[0]];
  let pf = folder[0] + "/";
  for (let i = 1; i < folder.length; i++) {
    if (!folder[i].startsWith(pf)) {
      list.push(folder[i]);
      pf = folder[i] + "/";
    }
  }
  return list;
};
