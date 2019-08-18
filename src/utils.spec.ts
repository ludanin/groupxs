import "mocha";
import { expect } from "chai";
import { book } from ".";
import Block from "./block";
import * as utils from "./utils";

describe("test utils.canUseBlock", () => {
  it("returns true if desired books are within the given source", () => {
    const books = new Block("book1", "book2");
    const sourceA: book[] = ["book1", "book2", "book3"];
    const sourceB: book[] = ["book1", "book2"];
    const sourceC: book[] = ["book1"];

    expect(utils.canUseBlock(sourceA, books)).to.be.equal(true);
    expect(utils.canUseBlock(sourceB, books)).to.be.equal(true);
    expect(utils.canUseBlock(sourceC, books)).to.be.equal(false);
  });
});


describe("test utils.getRemainder", () => {
  it("properly returns the remainder", () => {
    const books: book[] = ["book1", "book2"];
    const block = new Block("book1");
    const remainder = utils.getRemainder(books, block);

    expect(remainder.length).to.be.equal(1);
    expect(remainder[0]).to.be.equal("book2");
  });
  it("properly subtracts only a single book", () => {
    const books: book[] = ["book1", "book1", "book2"];
    const block = new Block("book1");
    const remainder = utils.getRemainder(books, block);

    expect(remainder.length).to.be.equal(2);
  });
});
