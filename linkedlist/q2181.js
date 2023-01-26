//  Definition for singly-linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const head = new ListNode(0);
let tail = head;
const nodes = [3, 1, 0, 4, 5, 2, 0];
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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var mergeNodes = function (head) {
  while (head.val === 0) {
    head = head.next;
  }

  const node = new ListNode();
  let tail = node;
  let sum = 0;

  while (head != null) {
    if (head.val === 0) {
      tail.next = new ListNode(sum);
      tail = tail.next;
      sum = 0;
    } else {
      sum += head.val;
    }
    head = head.next;
  }
  return node.next;
};

print(mergeNodes(head));
