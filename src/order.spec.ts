import "mocha";
import { expect } from "chai";
import Order from "./order";

describe("test Order constructor", () => {
  it("returns a valid Order", () => {
    const order = new Order({ book1: 3, book2: 2, book3: -1, book4: undefined });

    expect(order.book1).to.be.equal(3);
    expect(order.book2).to.be.equal(2);
    expect(order.book3).to.be.equal(0);
    expect(order.book4).to.be.equal(0);
    expect(order.book5).to.be.equal(0);
  });
});

describe("test Order.arrangements", () => {
  // What are the possible blocks to make with the following books?
  // books = [book1, book2, book3]
  //
  // Ignoring order of books, the answer is 7:
  // [book1, book2, book3] is by itself a block
  // [book1, book2]
  // [book1, book3]
  // [book2, book3]
  // [book1]
  // [book2]
  // [book3]

  it("returns all possible blocks (1 distinct books)", () => {
    const order = new Order({ book1: 1 });
    expect(order.arrangements.length).to.be.equal(1);
  });
  it("returns all possible blocks (2 distinct books)", () => {
    const order = new Order({ book1: 1, book2: 2 });
    expect(order.arrangements.length).to.be.equal(3);
  });
  it("returns all possible blocks (3 distinct books)", () => {
    const order = new Order({ book1: 1, book2: 2, book3: 3 });

    expect(order.arrangements.length).to.be.equal(7);
  });
  it("returns all possible blocks (4 distinct books)", () => {
    const order = new Order({ book1: 1, book2: 2, book3: 3, book4: 4 });
    expect(order.arrangements.length).to.be.equal(15);
  });
  it("returns all possible blocks (5 distinct books)", () => {
    const order = new Order({
      book1: 1, book2: 2, book3: 3, book4: 4, book5: 5
    });
    expect(order.arrangements.length).to.be.equal(31);
  });
});
