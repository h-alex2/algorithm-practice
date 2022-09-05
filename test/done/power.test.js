import { expect } from "chai";
import power from "../../practice/recursion/power";

describe("power", () => {
  it("power 함수는 첫 번재 인자를 두 번째 인자만큼 거듭제곱 한 값을 return 해야합니다. ", () => {
    expect(power(2, 0)).to.equal(1);
    expect(power(2, 2)).to.equal(4);
    expect(power(2, 4)).to.equal(16);
  })

  it("power 함수는 Math.pow() 함수와 결과값이 같아야 합니다.", () => {
    expect(power(4, 2)).to.equal(Math.pow(4, 2));
  })
})
