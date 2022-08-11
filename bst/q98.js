function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(0);
var isValidBST = function (root) {
  return inOrderTraversal(root, -Infinity, Infinity);
};

function inOrderTraversal(root, low, high) {
  if (!root) return true;
  if (root.val <= low || root.val >= high) return false;
  return (
    inOrderTraversal(root.left, low, root.val) &&
    inOrderTraversal(root.right, root.val, high)
  );
}
console.log(isValidBST(root));
