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
