//  Definition for singly-linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const nodes = [7, 2, 4, 3];
const nodes1 = [5, 6, 4];
const head = new ListNode(0);
let tail = head;
// const nodes = [7, 2, 4, 3];
nodes.forEach((nodeVal) => {
  const node = new ListNode(nodeVal);
  tail.next = node;
  tail = node;
});

const head1 = new ListNode(0);
let tail1 = head1;
// const nodes1 = [5, 6, 4];
nodes1.forEach((nodeVal) => {
  const node = new ListNode(nodeVal);
  tail1.next = node;
  tail1 = node;
});

function print(head) {
  let temp = head;
  while (temp != null) {
    console.log(temp.val);
    temp = temp.next;
  }
}

var addTwoNumbers = function (l1, l2) {
  const num1 = getNumber(l1);
  const num2 = getNumber(l2);
  const sum = [];
  let carry = 0;
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  while (p1 >= 0 && p2 >= 0) {
    let temp = num1[p1--] + num2[p2--] + carry;
    carry = parseInt(temp / 10);
    temp = temp % 10;
    sum.unshift(temp);
  }
  while (p1 >= 0) {
    let temp = num1[p1--] + carry;
    carry = parseInt(temp / 10);
    temp = temp % 10;
    sum.unshift(temp);
  }

  while (p2 >= 0) {
    let temp = num2[p2--] + carry;
    carry = parseInt(temp / 10);
    temp = temp % 10;
    sum.unshift(temp);
  }

  if (carry) {
    sum.unshift(carry);
  }

  const head1 = new ListNode(0);
  let tail1 = head1;
  sum.forEach((nodeVal) => {
    const node = new ListNode(nodeVal);
    tail1.next = node;
    tail1 = node;
  });

  print(head.next);
};

function getNumber(head) {
  let number = [];
  while (head) {
    number.push(head.val);
    head = head.next;
  }
  return number;
}

addTwoNumbers(head.next, head1.next);
