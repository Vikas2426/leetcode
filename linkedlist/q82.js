function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(0);
let tail = head;
const nodes = [1, 2, 3, 3, 4, 4, 5];
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

var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  const dummy = new ListNode(0, head);
  let prev = dummy;
  while (head.next) {
    if (head.val !== head.next.val) {
      prev = prev.next;
      head = head.next;
    } else {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      prev.next = head.next;
      head = head.next;
    }
  }
  return dummy.next;
};

print(deleteDuplicates(head.next));
