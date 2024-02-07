
const canJump = require('../../medium-problems/55-can-jump');

describe('canJump', () => {
  // // test 1
  // test('Returns true', () => {
  //   expect(canJump([2,3,1,1,4])).toEqual(true);
  // });

  // test 2
  test('Returns false', () => {
    expect(canJump([3,2,1,0,4])).toEqual(false);
  });

  // // test 3
  // test('Returns true', () => {
  //   expect(canJump([2, 0])).toEqual(true);
  // })


  // test 4
  test('Returns true', () => {
    expect(canJump([2, 4, 2, 1, 0, 2, 0])).toEqual(true);
  })

})
