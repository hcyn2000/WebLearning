/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function (root) {
  const compareNode = function (left, right) {
    if (!left && !right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }
    if (left.val != right.val) {
      return false;
    }
    return compareNode(left.left, right.right) && compareNode(left.right, right.left);
  };
  if (root == null) {
    return true;
  }
  return compareNode(root.left, root.right);
};
