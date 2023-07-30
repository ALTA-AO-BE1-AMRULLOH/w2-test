const frog = require("../../part4/problem1");
describe("problem1 - frog", () => {
  test("test case 7", () => {
    expect(console.log(frog([10, 30, 40, 20]))); // Output: 30
    expect(console.log(frog([30, 10, 60, 10, 60, 50]))); // Output: 40
  });
});
