// #### With HashMap ####

// var findDisappearedNumbers = function (nums) {
//   const len = nums.length;
//   const map = {};
//   const result = [];
//   for (let i = 1; i <= len; i++) {
//     map[i] = 0;
//   }
//   for (let i = 0; i < len; i++) {
//     map[nums[i]] = map[nums[i]] + 1;
//   }
//   for (const [key, value] of Object.entries(map)) {
//     if (value === 0) result.push(key);
//   }
//   return result;
// };

var findDisappearedNumbers = function (nums) {
  const len = nums.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    const n = Math.abs(nums[i]);
    if (nums[n - 1] > 0) nums[n - 1] = -nums[n - 1];
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
