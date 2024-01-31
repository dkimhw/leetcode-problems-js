
const maxProfit = require('../../medium-problems/122-max-profit');

describe("maxProfit", () => {
  // test 1
  test("Returns max profit = 7", () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(7);
  });

  test("Returns max profit = 4", () => {
    expect(maxProfit([1,2,3,4,5])).toEqual(4);
  });

  test("Returns max profit = 0", () => {
    expect(maxProfit([7,6,4,3,1])).toEqual(0);
  });

  test("Returns max profit = 99", () => {
    expect(maxProfit([1,2,3,4,100])).toEqual(99);
  });

})
