const munculSekali = require("../../part3/problem2");
describe("problem2 - munculSekali", () => {
  test("test case 5", () => {
   expect(console.log(munculSekali("1234123")));
   expect(console.log(munculSekali("76523752")));
   expect(console.log(munculSekali("12345")));
   expect(console.log(munculSekali("1122334455")));
   expect(console.log(munculSekali("0872504"))); 
  });
});
