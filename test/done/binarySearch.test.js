import { expect } from "chai";
import binarySearch from "../../practice/search/binarySearch";

describe("binarySearch", () => {
  it("정렬되어 있는 배열을 첫 번째 인자로 가진다. 두 번째 인자 값이 첫 번째 인자 배열안에 있으면 배열의 index를 return 해야 한다. ", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).to.equal(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).to.equal(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).to.equal(4);
    expect(binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 10)).to.equal(2);
    expect(binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
          98, 99,
    ],95)).to.equal(16);
  });

  it("두 번째 인자 값이 첫 번째 인자에 없으면 -1을 return 해야 한다.", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).to.equal(-1);
    expect(binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
      98, 99,
    ],100)).to.equal(-1);
  });
});
