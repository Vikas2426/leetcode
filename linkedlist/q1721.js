//  Definition for singly-linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(0);
let tail = head;
const nodes = [1, 2, 3, 4, 5];
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

var swapNodes = function (head, k) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head;

  let n = 1;
  while (fast.next) {
    fast = fast.next;
    n++;
  }

  let step = 1;
  while (step < k && slow.next) {
    slow = slow.next;
    step++;
  }

  step = n - k;
  fast = head;
  while (step > 0 && fast.next) {
    fast = fast.next;
    step--;
  }

  let temp = slow.val;
  slow.val = fast.val;
  fast.val = temp;

  return head;
};

print(swapNodes(head.next, 2));
