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

// var flatten = function (root) {
//   solve(root);
// };

// function solve(root) {
//   if (!root) return null;
//   if (!root.left && !root.right) return root;
//   const temp = solve(root.right);
//   root.right = solve(root.left);
//   root.left = null;
//   let node = root;
//   while (node.right) {
//     node = node.right;
//     print(node);
//     console.log("########################");
//   }
//   node.right = temp;
//   return root;
// }

function print(root) {
  if (!root) {
    console.log("end");
    return;
  }
  if (root) console.log(root.val);
  if (root.left) console.log(root.val + "--left--" + root.left.val);
  if (root.right) console.log(root.val + "--right--" + root.right.val);
  print(root.left);
  print(root.right);
}

var flatten = function (root) {
  let current = root;
  while (current) {
    if (current.left) {
      predecessor = findPredecessor(current);
      predecessor.right = current.right;
      current.right = current.left;
      current.left = null;
    }
    current = current.right;
  }
  return root;
};

function findPredecessor(root) {
  if (!root.left) return null;
  let node = root.left;
  while (node.right && node.right !== root) {
    node = node.right;
  }
  return node;
}
print(flatten(root));
