import { expect } from "chai";
import minSubArrayLen from "../practice/minSubArrayLen";

describe("minSubArrayLen", () => {
  it("", () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).to.equal(2);
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).to.equal(2);
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).to.equal(1);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).to.equal(3);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).to.equal(5);
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).to.equal(2);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).to.equal(0);
  });
});

