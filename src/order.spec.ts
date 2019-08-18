import "mocha";
import { expect } from "chai";
import Order from "./order";

describe("test Order constructor", () => {
  it("returns a valid Order when built with an object", () => {
    const order = new Order({ book1: 3, book2: 2, book3: -1, book4: undefined });

    expect(order.book1).to.be.equal(3);
    expect(order.book2).to.be.equal(2);
    expect(order.book3).to.be.equal(0);
    expect(order.book4).to.be.equal(0);
    expect(order.book5).to.be.equal(0);
  });

  it("returns a valid Order when built with an array", () => {
    const order = new Order({}, ["book1", "book1", "book2", "book3"]);

    expect(order.book1).to.be.equal(2);
    expect(order.book2).to.be.equal(1);
    expect(order.book3).to.be.equal(1);
    expect(order.book4).to.be.equal(0);
    expect(order.book5).to.be.equal(0);
  });
});

describe("test Order.array", () => {
  it("returns a valid array", () => {
    const order = new Order({ book1: 2, book2: 1 });
    const { array } = order;

    expect(array.length).to.be.equal(3);
    expect(array[0]).to.be.equal("book1");
    expect(array[1]).to.be.equal("book1");
    expect(array[2]).to.be.equal("book2");
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

describe("test Order solutions", () => {
  it("returns all possible solutions (2 distinct books)", () => {
    const order = new Order({ book1: 1, book2: 1 });
    // [[book1, book2]]
    // [[book1], [book2]]
    expect(order.solutions.length).to.be.equal(2);
  });
  it("returns all possible solutions (3 distinct books)", () => {
    const order = new Order({ book1: 1, book2: 1, book3: 1 });
    // [[book1, book2, book3]]
    // [[book1], [book2], [book3]]
    // ... and so on
    // We discard equal arrangements in different orders, e.g.
    // [[book1], [book2, book3]] is treated equally as [[book2, book3], [book1]]
    expect(order.solutions.length).to.be.equal(5);
  });
  it("returns all possible solutions (4 distinct books)", () => {
    const order = new Order({}, ["book1", "book2", "book3", "book4"]);
    expect(order.solutions.length).to.be.equal(15);
  });
  it("returns all possible solutions (5 distinct books)", () => {
    const order = new Order({}, ["book1", "book2", "book3", "book4", "book5"]);
    expect(order.solutions.length).to.be.equal(52);
  });

  it("returns the best solution (2 distinct books)", () => {
    const order = new Order({ book1: 1, book2: 1 });
    const { bestSolution } = order;

    expect(bestSolution.price).to.be.equal(15.2);
  });
  it("returns the best solution (3 distinct books)", () => {
    const order = new Order({ book1: 1, book2: 1, book3: 1 });
    const { bestSolution } = order;

    expect(bestSolution.price).to.be.equal(21.6);
  });
  it("returns the best solution (4 distinct books)", () => {
    const order = new Order({}, ["book1", "book2", "book3", "book4"]);
    const { bestSolution } = order;

    expect(bestSolution.price).to.be.equal(25.6);
  });
  it("returns the best solution (5 distinct books)", () => {
    const order = new Order({}, ["book1", "book2", "book3", "book4", "book5"]);
    const { bestSolution } = order;

    expect(bestSolution.price).to.be.equal(30);
  });
});
