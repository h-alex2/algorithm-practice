import { expect } from "chai";
import insertionSort from "../../practice/sort/insertionSort";

describe("insertionSort", () => {
  it("", () => {
    expect(insertionSort([2, 1, 9, 76, 4])).to.eql([1, 2, 4, 9, 76]);
  });
});
