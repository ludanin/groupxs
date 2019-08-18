import { expect } from "chai";
import "mocha";
import { bookCost } from ".";
import Block from "./block";

describe("test Block constructor", () => {
  it("one distinct book", () => {
    const block = new Block("book1", "book1");

    expect(block.length).to.be.equal(1);
    expect(block.has.book1).to.be.equal(true);
    expect(block.has.book2).to.be.equal(false);
    expect(block.has.book3).to.be.equal(false);
    expect(block.has.book4).to.be.equal(false);
    expect(block.has.book5).to.be.equal(false);
  });
  it("two distinct book", () => {
    const block = new Block("book1", "book2");

    expect(block.length).to.be.equal(2);
    expect(block.has.book1).to.be.equal(true);
    expect(block.has.book2).to.be.equal(true);
    expect(block.has.book3).to.be.equal(false);
    expect(block.has.book4).to.be.equal(false);
    expect(block.has.book5).to.be.equal(false);
  });
  it("three distinct book", () => {
    const block = new Block("book1", "book2", "book3");

    expect(block.length).to.be.equal(3);
    expect(block.has.book1).to.be.equal(true);
    expect(block.has.book2).to.be.equal(true);
    expect(block.has.book3).to.be.equal(true);
    expect(block.has.book4).to.be.equal(false);
    expect(block.has.book5).to.be.equal(false);
  });
  it("four distinct book", () => {
    const block = new Block("book1", "book2", "book3", "book4");

    expect(block.length).to.be.equal(4);
    expect(block.has.book1).to.be.equal(true);
    expect(block.has.book2).to.be.equal(true);
    expect(block.has.book3).to.be.equal(true);
    expect(block.has.book4).to.be.equal(true);
    expect(block.has.book5).to.be.equal(false);
  });
  it("five distinct book", () => {
    const block = new Block(
      "book1", "book2", "book3", "book4", "book5"
    );

    expect(block.length).to.be.equal(5);
    expect(block.has.book1).to.be.equal(true);
    expect(block.has.book2).to.be.equal(true);
    expect(block.has.book3).to.be.equal(true);
    expect(block.has.book4).to.be.equal(true);
    expect(block.has.book5).to.be.equal(true);
  });
});

describe("test Block equality by id", () => {
  it("works if built equally", () => {
    const arrangementA = new Block("book5", "book4");
    const arrangementB = new Block("book5", "book4");

    expect(arrangementA === arrangementB).to.be.equal(false);
    expect(arrangementA.id === arrangementB.id).to.be.equal(true);
  });
  it("works even if built differently", () => {
    const arrangementA = new Block("book5", "book4");
    const arrangementB = new Block("book4", "book5", "book4");

    expect(arrangementA === arrangementB).to.be.equal(false);
    expect(arrangementA.id === arrangementB.id).to.be.equal(true);
  });
});

describe("test Block.price", () => {
  it("one distinct books => 0% off", () => {
    const block = new Block("book1");

    expect(block.price).to.be.equal(bookCost);
  });
  it("two distinct books => 5% off", () => {
    const block = new Block("book1", "book2");

    expect(block.price).to.be.equal(15.2); /* (8 * 2) * 0.95 */
  });
  it("three distinct books => 10% off", () => {
    const block = new Block("book1", "book2", "book3");

    expect(block.price).to.be.equal(21.6); /* (8 * 3) * 0.9 */
  });
  it("four distinct books => 20% off", () => {
    const block = new Block("book1", "book2", "book3", "book4");

    expect(block.price).to.be.equal(25.6); /* (8 * 4) * 0.8 */
  });
  it("five distinct books => 25% off", () => {
    const block = new Block(
      "book1", "book2", "book3", "book4", "book5"
    );

    expect(block.price).to.be.equal(30); /* (8 * 5) * 0.75 */
  });
});
