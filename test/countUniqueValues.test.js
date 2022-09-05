import { expect } from "chai";
import countUniqueValues from "../practice/pointer/countUniqueValues";

describe("countUniqueValues", () => {
  it("", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).to.equal(2);
    expect(countUniqueValues([1, 2, 3, 4, 5, 2])).to.equal(5);
    expect(countUniqueValues([])).to.equal(0);
    expect(countUniqueValues([-1, -2, -1, 1, 1, 2])).to.equal(4);
  })
})