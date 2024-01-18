
/*
https://leetcode.com/problems/merge-sorted-array/editorial/?envType=study-plan-v2&envId=top-interview-150


PEDAC framework

Understand the Problem
-------------------------
- Input: nums1, nums2 (both arrays - sorted in non-decreasing order)
- Output: mutate array `nums1` merging nums1 and nums2 - sorted in ascending order
- Notes:
  - nums1 has length of m + n - elements not part of nums1 are marked as zeros

Examples
-------------------------
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

The difficulty comes from needing to shift the elements to the right if we need to insert a new value from nums2

Algorithms
-------------------------

Attempt 1:
1. Insert `nums2` elements into `nums1` where elements are zero
2. Sort `nums1` in place

O(m + n) + O((m + n) * log(m + n))

Attempt 2:
1. Track two pointers for each array
2. Create a copy of array 1 - `num1Copy`
3. Loop num1
  - if num1Copy[ptr1] <= num2[ptr2]
    - num1[idx] = num1Copy[ptr1]
    - move ptr1 forward
  - else
    - num1[idx] = num2[ptr2]
    - move ptr2 forward



*/


const mergeAttempt1 = (nums1, m, nums2, n) => {
  for(let idx = 0; idx < n; idx++) {
    nums1[idx + m] = nums2[idx];
  }

  nums1.sort();
}

const merge = (nums1, m, nums2, n) => {
  let ptr1 = 0;
  let ptr2 = 0;
  let numsCopy1 = nums1.slice(0, m);
  for(let idx = 0; idx < nums1.length; idx++) {
    if (numsCopy1[ptr1] <= nums2[ptr2] || nums2[ptr2] === undefined) {
      nums1[idx] = numsCopy1[ptr1];
      ptr1++;
    } else {
      nums1[idx] = nums2[ptr2];
      ptr2++;
    }
  }
}

module.exports = merge;
