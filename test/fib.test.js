import { expect } from "chai";
import fib from "../practice/recursion/fib";

describe("fib", () => {
  it("피보나치 수열에서 n번째 숫자를 반환하여야 한다.", () => {
    expect(fib(4)).to.equal(3);
    expect(fib(10)).to.equal(55);
    expect(fib(28)).to.equal(317811);
    expect(fib(35)).to.equal(9227465);
  })
})