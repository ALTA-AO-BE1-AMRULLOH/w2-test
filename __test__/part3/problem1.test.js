const primeNumber = require("../../part3/problem1");
describe("problem1 - primeNumber", () => {
  test("test case 4", () => {
    expect(console.log(primeNumber(1000000007)));
    expect(console.log(primeNumber(1500450271)));
    expect(console.log(primeNumber(1000000000)));
    expect(console.log(primeNumber(10000000019)));
    expect(console.log(primeNumber(10000000033)));
  });
});
