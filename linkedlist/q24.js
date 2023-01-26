//  Definition for singly-linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(0);
let tail = head;
const nodes = [1, 2, 3, 4];
nodes.forEach((nodeVal) => {
  const node = new ListNode(nodeVal);
  tail.next = node;
  tail = node;
});

function print(head) {
  let temp = head;
  while (temp != null) {
    console.log(temp.val);
    temp = temp.next;
  }
}

//  #########  ITERATIVE ##########

// var swapPairs = function (head) {
//   let ans = head;
//   if (head && head.next) {
//     ans = head.next;
//   }

//   let prevPair;
//   while (head && head.next) {
//     const temp = head.next;
//     head.next = temp.next;
//     temp.next = head;
//     if (prevPair) {
//       prevPair.next = temp;
//     }
//     prevPair = head;
//     head = head.next;
//   }

//   return ans;
// };

//  #########  RECURSIVE ##########
var swapPairs = function (first) {
  if (!first || !first.next) return first;

  let second = first.next;
  let third = second.next;
  first.next = swapPairs(third);
  second.next = first;
  return second;
};

print(swapPairs(head.next));
