
const removeDuplicates = require('../../easy-problems/26-rmv-duplicates-sorted-array');

// test for mutation
describe("removeDuplicates", () => {
  // test 1
  const nums_test1 = [1,1,2];
  const result1 = removeDuplicates(nums_test1);

  test("returns true if elements were removed correctly", () => {
    expect(result1).toEqual(2);
  });

  // test 2
  const nums_test2 = [0,0,1,1,1,2,2,3,3,4];
  const result2 = removeDuplicates(nums_test2);

  test("returns true if elements were removed correctly", () => {
    expect(result2).toEqual(5);
  });


})
