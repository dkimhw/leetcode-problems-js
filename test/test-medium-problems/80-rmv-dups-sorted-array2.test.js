

const removeDuplicates = require('../../medium-problems/80-rmv-dups-sorted-array2');

// test for mutation
describe("removeDuplicates", () => {
  // test 1
  test("test1: returns value of 5", () => {
    expect(removeDuplicates([1,1,1,2,2,3])).toEqual(5);
  });

  // test 2
  test("test2: returns value of 7", () => {
    expect(removeDuplicates([0,0,1,1,1,1,2,3,3])).toEqual(7);
  });

  // test 3
  test("test2: returns value of 5", () => {
    expect(removeDuplicates([1,1,1,2,2,3])).toEqual(5);
  });


})
