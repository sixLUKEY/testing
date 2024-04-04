import printOut from "../src/function.js";
import anotherFunc from "../src/anotherFunc.js";
import { expect } from "chai";

describe("Printing function", () => {
  it("should log printing", () => {
    const result = printOut();
    expect(result).to.equal(5);
  }),
    it("should print a 6", () => {
      const result = anotherFunc();
      expect(result).to.equal(6);
    });
});
