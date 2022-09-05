import { expect } from "chai";
import averagePair from "../practice/pointer/averagePair";

describe("averagePair", () => {
  it("음수, 양수 상관없이 적용되어야 한다.", () => {
    expect(averagePair([1,2,3],2.5)).to.equal(true);
    expect(averagePair([1,3,3,5,6,7,10,12,19],8)).to.equal(true);
    expect(averagePair([-1,0,3,4,5,6], 4.1)).to.equal(false);
  })

  it("배열의 길이가 0이라면 false를 리턴해야 한다.", () => {
    expect(averagePair([1,2,3],2.5)).to.equal(true);
    expect(averagePair([1,3,3,5,6,7,10,12,19],8)).to.equal(true);
    expect(averagePair([-1,0,3,4,5,6], 4.1)).to.equal(false);
    expect(averagePair([],4)).to.equal(false);
  })
})
