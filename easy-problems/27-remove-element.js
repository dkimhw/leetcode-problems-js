
/*

PEDAC

Understand the Problem
-----------------------------
- Input: array of nums, integer
- Output: return integer
  - number of elements in `nums` which are not equal to val
- Notes:
  - Order of the elements may be changed

Examples
-----------------------------
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).


Algorithms
-----------------------------

Attempt 1:
- Save length in variable
- Loop over nums - check for val 3, remove all instances
  - Complication - a simple for loop won't work since we want to remove it in place
  - Ideally filter method is the easiest but it returns a new array so it won't work here
  - Use splice and whenever we remove an element decrement idx
- Count the number of removal
- return length - # removal

O(n^2) - splice in the worst case scenario is O(n) since we may need to shift all of the arrays to a new array


Attempt 2:
- Use two pointers
- Create variable `idx`
- Loop through `nums` and for each element:
  - Check if `nums[jdx] != val`
  - If so - replace `nums[idx] = nums[jdx]` and incremend `idx`
- `idx` tracks

*/


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElementWithSplice = function(nums, val) {
  let numsLength = nums.length;
  let removed = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] === val) {
      removed++;
      nums.splice(idx, 1);
      idx--;
    }
  }

  return numsLength - removed;
};

const removeElement = function(nums, val) {
  let idx = 0;
  for (let jdx = 0; jdx < nums.length; jdx++) {
    if (nums[jdx] != val) {
      nums[idx] = nums[jdx];
      idx++;
    }
  }

  if (nums[nums.length - 1] == val) nums[nums.length - 1] = null;

  return idx;
};

module.exports = removeElement;
