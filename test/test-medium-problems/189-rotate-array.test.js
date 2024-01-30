

const rotate = require('../../medium-problems/189-rotate-array');

// test for mutation
describe("rotate", () => {
  // test 1
  const nums1 = [1,2,3,4,5,6,7];
  rotate(nums1, 3);
  test("test1: returns the array [5,6,7,1,2,3,4]", () => {
    expect(nums1).toStrictEqual([5,6,7,1,2,3,4]);
  });

  // test 2
  const nums2 = [-1,-100,3,99];
  rotate(nums2, 2)
  test("test2: returns the array [3,99,-1,-100]", () => {
    expect(nums2).toStrictEqual([3,99,-1,-100]);
  });
})
