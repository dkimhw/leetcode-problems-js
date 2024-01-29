
/*

Problem: https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150


Understand the Problem
---------------------------
Input: array of intergers `nums`
Output: integer
  - return majority element
Notes:
  - Majority element is an element that appears more than n/2 times
  - Assume that there is always a majority element


Examples
---------------------------

Input: nums = [3,2,3]
Output: 3

2/3 > 1/2

Input: nums = [2,2,1,1,1,2,2]
Output: 2

4/7 > 1/2


Algorithm
---------------------------
- Create a variable called elements = {}
- Loop through `nums`
  - For each element:
    - if element exists in `elements` - increment
    - else add to `elements`
- Loop through `elements`
  - check if cnt / n > 1/2
  - return if true

O(2n) -> O(n)
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const elements = {};

  for(let idx = 0; idx < nums.length; idx++) {
    let currElement = nums[idx];

    if (currElement in elements) {
      elements[currElement] += 1;
    } else {
      elements[currElement] = 1;
    }
  }

  let elementsArr = Object.entries(elements);
  for (let idx = 0; idx < elementsArr.length; idx++) {
    if (elementsArr[idx][1] / nums.length > .5) {
      return Number(elementsArr[idx][0]);
    }
  }
};

module.exports = majorityElement;
