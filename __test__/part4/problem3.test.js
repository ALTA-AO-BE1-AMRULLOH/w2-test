const dragonOfLoowater = require("../../part4/problem3");
describe("problem3 - dragonOfLoowater", () => {
  test("test case 9", () => {
    expect(console.log(dragonOfLoowater([5, 4], [7, 8, 4]))); // Output: 11
    expect(console.log(dragonOfLoowater([5, 10], [5]))); // Output: "knight fall"
    expect(console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2]))); // Output: "knight fall"
    expect(console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5]))); // Output: 10

  });
});
