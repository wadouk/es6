"use strict";
import expect from "expect.js";
import { square, diag } from "./lib";

describe("hello", () => {
  it("square", () => {
    expect(square(11)).to.eql(121)
  });
  it("diag", () => {
    expect(diag(4,3)).to.eql(5)
  });
});
