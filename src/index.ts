import Order from "./order";

export type book = "book1" | "book2" | "book3" | "book4" | "book5";

export const bookCost = 8;


const order = new Order({
  book1: 2,
  book2: 2,
  book3: 2,
  book4: 1,
  book5: 1,
});

const { bestSolution } = order;

console.log(`The best price for the order is: ${bestSolution.price} EUR`);
console.log(`Books should be arranged in these groups: ${JSON.stringify(bestSolution.books)}`);
