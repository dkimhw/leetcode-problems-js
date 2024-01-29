

const majorityElement = require('../../easy-problems/169-majority-element');

// test for mutation
describe("majorityElement", () => {
  // test 1
  test("test1: returns value of 3", () => {
    expect(majorityElement([3, 2, 3])).toEqual(3);
  });

  // test 2
  test("test2: returns value of 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
  });
})
