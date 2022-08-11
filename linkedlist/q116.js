// Approach 1: Perform BFS. It uses O(n) space and O(n) time
// var connect = function (root) {
//   return bfs(root);
// };

// function bfs(root) {
//   if (!root) return null;
//   const queue = [root];

//   while (queue.length) {
//     const node = queue.shift();
//     if (node.left) {
//       queue.push(node.left);
//     }
//     if (node.right) {
//       queue.push(node.right);
//     }
//     if (queue.length) node.next = queue[0];
//     else node.next = null;
//   }
//   return setNull(root);
// }

// function setNull(root) {
//   let node = root;
//   while (node && node.right) {
//     node.next = null;
//     node = node.right;
//   }
//   return root;
// }

// Approach 2: Space O(1) and Time (n)

var connect = function (root) {
  if (!root) return null;

  let current = root;
  while (current.left) {
    let node = current;

    while (node) {
      node.left.next = node.right;
      if (node.right && node.next && node.next.left) {
        node.right.next = node.next.left;
      }
      node = node.next;
    }

    current = current.left;
  }
  return root;
};
