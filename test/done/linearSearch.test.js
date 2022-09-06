import { expect } from "chai";
import linearSearch from "../../practice/search/linearSearch";

describe("linearSearch", () => {
  it("두 번째 인자가 첫 번째 인자 배열 안에 있으면 배열의 index를 return해야 한다.", () => {
    expect(linearSearch([10, 15, 20, 25, 30], 15)).to.equal(1);
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).to.equal(5);
    expect(linearSearch([100], 100)).to.equal(0);
  });

  it("찾는 값이 첫 번째 배열 안에 없다면 -1을 return 해야 한다.", () => {
    expect(linearSearch([1, 2, 3, 4, 5], 6)).to.equal(-1);
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).to.equal(-1);
  });
});
