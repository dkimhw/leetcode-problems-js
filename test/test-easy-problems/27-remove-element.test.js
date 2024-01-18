
const removeElement = require('../../easy-problems/27-remove-element');

// test for mutation
describe("removeElement", () => {
  // test 1
  const nums_test1 = [3,2,2,3];
  const val1 = 3;
  const result1 = removeElement(nums_test1, val1);

  test("returns true if elements were removed correctly", () => {
    expect(nums_test1).not.toContain(val1);
    expect(result1).toEqual(2);
  });

  // test 2
  const nums_test2 = [0,1,2,2,3,0,4,2];
  const val2 = 2;
  const result2 = removeElement(nums_test2, val2);

  test("returns true if elements were removed correctly", () => {
    expect(nums_test2).not.toContain(val2);
    expect(result2).toEqual(5);
  });


})
