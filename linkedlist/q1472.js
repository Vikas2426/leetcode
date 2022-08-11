function ListNode(url, prev, next) {
  this.url = url;
  this.prev = prev ? prev : null;
  this.next = next ? next : null;
}

/**
 * @param {string} homepage
 */

var BrowserHistory = function (homepage) {
  this.head = new ListNode(homepage);
  this.current = this.head;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  if (this.current.url !== url) {
    const newPage = new ListNode(url, this.current, null);
    this.current.next = newPage;
    this.current = newPage;
  }
  return url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (steps && this.current.prev) {
    this.current = this.current.prev;
    steps--;
  }
  return this.current.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (steps && this.current.next) {
    this.current = this.current.next;
    steps--;
  }
  return this.current.url;
};

BrowserHistory.prototype.print = function () {
  let node = this.head;
  while (node.next) {
    console.log(node.url);
    node = node.next;
  }
  console.log(node.url);
};

// Your BrowserHistory object will be instantiated and called as such:
var obj = new BrowserHistory("leetcode.com");
obj.visit("google.com");
obj.visit("facebook.com");
obj.visit("youtube.com");
var param_2 = obj.back(1);
var param_3 = obj.back(1);
var param_4 = obj.forward(1);
obj.visit("linkedin.com");
var param_5 = obj.forward(2);
var param_6 = obj.back(2);
var param_7 = obj.back(7);
console.log({ param_2, param_3, param_4, param_5, param_6, param_7 });
obj.print();
