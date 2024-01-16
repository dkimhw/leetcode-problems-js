
const merge = require('../../easy-problems/88-merge-sorted-array');

// test for mutation
describe("merge", () => {
  // test 1
  const nums1_test1 = [1,2,3,0,0,0];
  const m_test1 = 3;
  const nums2_test1 = [2,5,6];
  const n_test1 = 3;

  test("returns true if merged correctly", () => {
    merge(nums1_test1, m_test1, nums2_test1, n_test1);
    expect(nums1_test1).toStrictEqual([1,2,2,3,5,6]);
  });

  // test 2
})
