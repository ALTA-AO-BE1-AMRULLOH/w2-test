const largestNumber = require ("../../part2/problem2")
describe ("problem2 - largestNumber", () => {
    test ("test case 2", () => {
      expect(largestNumber([5, 2, 67, 37, 85, 19, 10])), toequal (85)
    })
})