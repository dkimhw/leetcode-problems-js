
/*

Problem: https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150


Understand the Problem
--------------------------
- Input: array of integers (`nums`), integer (k)
- Output: undefined
  - Rotate array in-place k times

Example
--------------------------
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]


[1, 2, 3, 4], k = 4
[4, 1, 2, 3]
[3, 4, 1, 2]
[2, 3, 4, 1]
[1, 2, 3, 4]


[1, 2, 3, 4], k = 5
[4, 1, 2, 3]
[3, 4, 1, 2]
[2, 3, 4, 1]
[1, 2, 3, 4]
[4, 1, 2, 3]


Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Algorithm
--------------------------

Attemp 1:
- loop from 0 to k
- for each iteration:
  - pop the last value of the array
  - shift to beginning of the array

In the worst case shift is O(n) so O(nk)

Attempt 2:
- We can batch the deletions and insertions
- How many elements to insert forward:
  - k % n where n is the length of the array
- If k % n !== 0
  - Use the remainder - that's the last x amount of elements to shift forward
  - Remove the elements to shift
  - Insert elements to front
- If k % n == 0
  - Do nothing

The 1st splice - the worst case is O(n)
The 2nd splice - the worst case is O(n)

O(n)

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  let numOfShifts = k % nums.length;

  if (numOfShifts === 0) return;
  if (numOfShifts !== 0) {
    let valsToShift = nums.splice(nums.length - numOfShifts, numOfShifts);
    nums.splice(0, 0, ...valsToShift);
  }
};


module.exports = rotate;
