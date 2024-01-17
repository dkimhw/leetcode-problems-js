
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
  Input: nums1 = [0], m = 0, nums2 = [1], n = 1
  const nums1_test2 = [0];
  const m_test2 = 0;
  const nums2_test2 = [1];
  const n_test2 = 1;

  test("returns true if merged correctly", () => {
    merge(nums1_test2, m_test2, nums2_test2, n_test2);
    expect(nums1_test2).toStrictEqual([1]);
  });
})
