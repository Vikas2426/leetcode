/**
 * Definition for a binary tree node.
 *
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(5, null, new TreeNode(6))
);

var flatten = function (root) {
  let current = root;
  while (current) {
    if (!current.left) {
      console.log(current.val);
      current = current.right;
    } else {
      predecessor = findPredecessor(current);
      if (predecessor.right === null) {
        predecessor.right = current;
        current = current.left;
      } else {
        predecessor.right = null;
        console.log(current.val);
        current = current.right;
      }
    }
  }
};

function findPredecessor(root) {
  if (!root.left) return null;
  let node = root.left;
  while (node.right && node.right !== root) {
    node = node.right;
  }
  return node;
}

flatten(root);
