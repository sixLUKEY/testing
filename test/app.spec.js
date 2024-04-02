import printOut from "../src/function.js";
import { expect } from "chai";
describe("Printing function", () => {
    it("should log printing", () => {
        const result = printOut();
        expect(result).to.equal(5);
    });
});
