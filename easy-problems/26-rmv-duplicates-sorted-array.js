/*

Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

Understand the Problem
---------------------------
Input: `nums` (array of integers)
Output: integer
  - # of unique elements in `nums`
Notes:
  - Must remove duplicates in place - mutate input `nums`
  - Order must be kept the same minus the removed duplicates [2, 3, 3, 5, 7] -> [2 , 3, 5, 7, -]
    - but must fill the first k uniuqe values
  - Does not matter what you leave behind the `nums` as long as the duplicates are removed

Examples
---------------------------
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).


Algorithms
---------------------------

Attemp 1:
- Loop through nums
  - if nums[idx] == nums[idx + 1]: rmv element, idx--
  - else continue
- return nums.length

Because of the splice function - this will O(n^2) in the worst case

Attemp 2:

*/

// Attempt 1
// const removeDuplicates = (nums) => {
//   for (let idx = 0; idx < nums.length; idx++) {
//     if (nums[idx] === nums[idx + 1]) {
//       nums.splice(idx, 1);
//       idx -= 1;
//     }
//   }

//   return nums.length;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let currentVal = nums[0];

  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx + 1] === currentVal) {
      nums[idx] = null;
    } else {
      currentVal = nums[idx + 1];
    }
  }

  console.log(nums);
  return nums.filter(el => el !== null).length;
}

module.exports = removeDuplicates;
