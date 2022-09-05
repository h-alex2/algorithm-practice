import { expect } from "chai";
import isSubsequence from "../practice/pointer/isSubsequence"

describe("isSubsequence", () => {
  it("첫 번째 인자의 각 character 순서가 바뀌면 false를 return 해야 한다." , () => {
    expect(isSubsequence('hello', 'hello world')).to.equal(true);
    expect(isSubsequence('sing', 'sting')).to.equal(true);
    expect(isSubsequence('abc', 'abracadabra')).to.equal(true);
    expect(isSubsequence('abc', 'acb')).to.equal(false);
  })
})