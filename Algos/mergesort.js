function mergesort() {
  if (this.length === 1) {
    return this;
  }
  const mid = this.length / 2;
  const left = this.slice(0, mid).mergesort();
  const right = this.slice(mid).mergesort();
  return merge(left, right);
}

function merge(arr1, arr2) {
  const result = [];
  let p1 = 0,
    p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1++]);
    } else {
      result.push(arr2[p2++]);
    }
  }
  while (p1 < arr1.length) {
    result.push(arr1[p1++]);
  }
  while (p2 < arr2.length) {
    result.push(arr2[p2++]);
  }
  return result;
}

Array.prototype.mergesort = mergesort;
console.log([7, 5, 8, 9, 3, 2, 4, 5, 1].mergesort());
