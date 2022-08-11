//  Definition for singly-linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(0);
let tail = head;
const nodes = [0, 1, 2, 3, 4, 5];

nodes.forEach((nodeVal) => {
  const node = new ListNode(nodeVal);
  tail.next = node;
  tail = node;
});

const head2 = new ListNode(0);
let tail2 = head2;
const nodes2 = [1000000, 1000001, 1000002];
nodes2.forEach((nodeVal) => {
  const node = new ListNode(nodeVal);
  tail2.next = node;
  tail2 = node;
});

function print(head) {
  let temp = head;
  while (temp != null) {
    console.log(temp.val);
    temp = temp.next;
  }
}

// var mergeInBetween = function (list1, a, b, list2) {
//   b = b - a;
//   const head2 = list2;
//   const head1 = list1;

//   while (list2.next) {
//     list2 = list2.next;
//   }

//   list1 = getNode(a - 1, list1);
//   let list1_copy = list1.next;
//   list1.next = head2;

//   list1_copy = getNode(b, list1_copy);
//   list2.next = list1_copy.next;

//   return head1;
// };

// function getNode(index, head) {
//   while (index) {
//     head = head.next;
//     index--;
//   }
//   return head;
// }

var mergeInBetween = function (list1, a, b, list2) {
  let aNode = list1;
  let bNode = null;
  let list2_end = list2;
  while (list2_end.next) {
    list2_end = list2_end.next;
  }
  const head = list1;
  let i = 0;
  while (list1.next) {
    list1 = list1.next;
    i++;
    if (i === a - 1) {
      aNode = list1;
    }
    if (i === b + 1) {
      bNode = list1;
    }
  }
  aNode.next = list2;
  list2_end.next = bNode;
  return head;
};
print(mergeInBetween(head.next, 3, 4, head2.next));
