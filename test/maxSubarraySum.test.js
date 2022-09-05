import { expect } from "chai";
import maxSubarraySum from "../practice/pointer/maxSubarraySum";

describe("maxSubarraySum", () => {
  it("두 번째 인자로 주어진 값 만큼의 길이를 더한 값 중 가장 큰 값을 반환해야 한다." , () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).to.equal(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).to.equal(17);
  })

  it("개수와 맞지 않으면 null을 반환해야 한다." , () => {
    expect(maxSubarraySum([], 4)).to.equal(null);
  })
})