const PairSum = require("../../part3/problem3");
describe("problem3 - PairSum", () => {
  test("test case 6", () => {
    expect(console.log(PairSum([1, 2, 3, 4, 6], 6))); // [1, 3]
    expect(console.log(PairSum([2, 5, 9, 11], 11))); // [0, 2]
    expect(console.log(PairSum([1, 3, 5, 7], 12))); // [2, 3]
    expect(console.log(PairSum([1, 4, 6, 8], 10))); // [1, 2]
    expect(console.log(PairSum([1, 5, 6, 7], 6))); // [0, 1]
  });
});
