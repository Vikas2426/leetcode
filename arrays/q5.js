var longestPalindrome = function (s) {
  let left = 0,
    l = 0;
  let right = s.length - 1,
    r = s.length - 1;
  while (l < r) {
    if (s.charAt(l) !== s.charAt(r)) {
      left = l + 1;
      right = r - 1;
    }
    l++;
    r--;
  }
  return s.substring(left, right + 1);
};
console.log(longestPalindrome("babad"));
