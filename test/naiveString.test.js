import { expect } from "chai";
import naiveString from "../practice/search/naiveString";

describe("naiveString", () => {
  it("두 번째 문자열이 첫 번째 문자열에서 나오는 횟수를 return 해야 한다.", () => {
    expect(naiveString("lorie loled", "lol")).to.equal(1);
  });
});