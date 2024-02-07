

/*

Problem: https://leetcode.com/problems/jump-game/editorial/?envType=study-plan-v2&envId=top-interview-150

Understand the Problem
------------------------------
- Input: array of nums
  - each element represents how far you can jump ahead
  - i.e. if element is 2 you can jump 1 or 2
- Output: boolean
  - true if possible to reach the end index
  - else false
- Rules
  - No negative values

Example
------------------------------
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.



Algorithm
------------------------------

Brute force (recursion)
- Base cases:
  - return false if currIdx is 0
  - return true if currIdx === nums.length - 1
  - return false if currIdx > nums.length - 1
- Recursion - the branching paths are the different jumps we can take at each index:
  - for each jump val
    - recurse - pass updated idx + curr jump val & the new jump val (nums[idx + curr jump val])
    - save the result of each recurse
  - return result

O(2^n) because we are trying every combination possible

Greedy Algorithm
- Start looping backwards
- For each element
  - check if you are able to reach a target index
  - if yes, that becomes the new target index
- This essentially checks whether from a particular position you can reach a target index
- And because you do this starting from the end of the index (the ultimate goal)
  - if the target idx is zero, return true

*/

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// const canJumpBruteForce = (nums) => {
//   const canJumpRecursionHelper = (currIdx, jumpVal, nums) => {
//     if (currIdx === nums.length - 1) {
//       memo[currIdx] = 'Good'
//       return true;
//     } else if (currIdx > nums.length - 1) {
//       memo[currIdx] = 'Bad'
//       return false;
//     } else if (nums[currIdx] === 0) {
//       memo[currIdx] = 'Bad'
//       return false;
//     }

//     let result;
//     for (let idx = 1; idx <= jumpVal; idx++) {
//       let currResult = canJumpRecursionHelper(currIdx + idx, nums[currIdx + idx], nums);
//       if (currResult) result = currResult;
//     }

//     return result;
//   }

//   let result = canJumpRecursionHelper(0, nums[0], nums);
//   return result ? result : false;
// }

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let targetIdx = nums.length - 1;

  for (let idx = nums.length - 2; idx >= 0; idx--) {
    if (targetIdx <= idx + nums[idx]) {
      targetIdx = idx; // means that you are able to reach the targetidx - set a new target for next iteration
    }
  }

  return targetIdx === 0 ? true : false;
};

/*
[3,2,1,0,4]

target idx = 4
idx = 3
so can you reach idx of 4 from idx 3 - no because 3 + nums[3] = 3 which is not greater or equal to 4

*/

module.exports = canJump;
