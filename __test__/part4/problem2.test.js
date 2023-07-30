const simpleEquations = require("../../part4/problem2");
describe("problem2 - simpleEquations", () => {
  test("test case 8", () => {
    expect(console.log(simpleEquations(1, 2, 3))); // Output: "no solution"
    expect(console.log(simpleEquations(6, 6, 14))); // Output: [1, 2]
});
});