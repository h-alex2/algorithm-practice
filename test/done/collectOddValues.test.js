import { expect } from "chai";
import collectOddValues from "../../practice/recursion/collectOddValues";

describe("collectOddValues", () => {
  it("인자로 주어진 배열 숫자 중 홀수만을 배열에 담아 반환해야 한다.", () => {
    expect(collectOddValues([1,2,3,4,5,6,7,8,9,10])).to.eql([1,3,5,7,9]);
  })
})
