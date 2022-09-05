import { expect } from "chai";
import productOfArray from "../practice/recursion/productOfArray";

describe("productOfArray", () => {
  it("인자로 받은 배열안의 숫자를 다 곱한 값을 return 해야 한다.", () => {
    expect(productOfArray([1, 2, 3])).to.equal(6);
    expect(productOfArray([1, 2, 3, 10])).to.equal(60);
  })
})
