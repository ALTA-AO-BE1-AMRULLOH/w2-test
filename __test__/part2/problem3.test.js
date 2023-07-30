const { fibonacci } = require("../../part2/problem3")
// const fibonacci = require ("../../part2/problem3")
describe ("problem3 - fibonacci", () =>{
    test("test case 3", () =>{
        expect (console.log(fibonacci(0))); // Output: 0)
        expect (console.log(fibonacci(2))); // Output: 1)
        expect (console.log(fibonacci(9))); // Output: 34)
        expect (console.log(fibonacci(10))); // Output: 55)
        expect (console.log(fibonacci(12))); // Output: 144)
    })
})