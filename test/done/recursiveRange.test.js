import { expect } from "chai";
import recursiveRange from "../../practice/recursion/recursiveRange";

describe("recursiveRange", () => {
  it("0부터 인수까지의 모든 합을 return 해야한다.", () => {
    expect(recursiveRange(6)).to.equal(21);
    expect(recursiveRange(10)).to.equal(55);
  })
})
