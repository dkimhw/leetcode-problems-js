/*

Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150


Understand the Problem
---------------------------
Input: `nums` - array of integers
Output: none
  - `nums` should only contain unique elements at most twice
  - must mutate in place
  - the first `k` unique values should show up first then rest of the array does not matter
  - do not allocate another array - must be memory efficient

Examples
---------------------------
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

idx = 0
let ptr1 = 0
let ptr2 = 0

idx = 1
ptr1 is 1
ptr2 is 1 - ptr2 needs to move forward

idx = 2
ptr1 is 2
ptr 2 is 1 - ptr2 should not move forward

idx = 2
ptr1 is 3
ptr2 is 1
replace at index 2 and move up ptr2

So to do this we need a way to tell ptr2 when to move forward or not.
Maybe look forward and backward and if it's the same move the ptr2 up so we maintain at most two unique elements

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).


Algorithms
-----------------------
- create two pointers: idx & jdx (idx - ptr tracking the for loop)
- for loop
  - check whether we should move the second pointer up by 2 or 1 (jdx)
  - check if nums[idx] != nums[jdx] - this means that there is a new unique element that we want to use
    - increment jdx
    - nums[jdx] = nums[idx]
- return jdx + 1

[0,0,1,1,1,1,2,3,3]

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let jdx = 0;
  let stop2ndPointer = false;
  let prev2ndPointerVal = nums[0];

  for (let idx = 0; idx < nums.length; idx++) {
    // check 2nd pointer
    if ( (nums[jdx] === nums[jdx + 1]) && !stop2ndPointer ) {
      jdx += 2;
      stop2ndPointer = true;
    }

    console.log("before", jdx, idx, nums)

    // check for unique element
    if (jdx < idx && nums[jdx] !== nums[idx] && stop2ndPointer) {
      //jdx++;
      nums[jdx++] = nums[idx];
      stop2ndPointer = false;
    } else if (jdx < idx && nums[jdx] !== nums[idx]) {
      nums[jdx++] = nums[idx];
    } else if (nums[idx] !== prev2ndPointerVal && nums[idx] === nums[idx+1]) {
      prev2ndPointerVal = nums[idx];
      jdx += 2;
      stop2ndPointer = true;
    }

    console.log("after", jdx, idx, nums)

  }

  // console.log(jdx, nums);
};

removeDuplicates([0,0,1,1,1,1,2,3,3])
