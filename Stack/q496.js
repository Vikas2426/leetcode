//Brute force
// var nextGreaterElement = function (nums1, nums2) {
//     const result = nums1.map(n1 => {
//         let findMax = false;
//         for (let i = 0; i < nums2.length; i++) {
//             findMax = nums2[i] === n1
//             if (findMax && nums2[i] > n1) {
//                 return nums2[i];
//             }
//         }
//         return -1;
//     })
//     return result;
// };

// Using stack and map
var nextGreaterElement = function (nums1, nums2) {
    const stack = [-1];
    const map = new Map();
    nums2.forEach(n => {
        while (n > stack[stack.length - 1]) {
            map.set(stack.pop(), n);
        }
        stack.push(n);
    });
    return nums1.map(n => {
        if (map.has(n)) {
            return map.get(n);
        }
        return -1;
    })
}
const nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));