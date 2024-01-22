

const maxProfit = require('../../easy-problems/121-max-profit');

// test for mutation
describe("maxProfit", () => {
  // test 1
  test("test1: returns value of 5", () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
  });

  // test 2
  test("test2: returns value of 0", () => {
    expect(maxProfit([7,6,4,3,1])).toEqual(0);
  });

  // test 3
  test("test3: returns value of 6", () => {
    expect(maxProfit([2, 3, 4, 8, 1, 3])).toEqual(6);
  });

  // test 4
  test("test3: returns value of 2", () => {
    expect(maxProfit([2,1,2,1,0,1,2])).toEqual(2);
  });
})
