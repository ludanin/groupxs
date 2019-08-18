import Block from "./block";
import { book } from ".";

export default class Order {
  readonly book1: number = 0;
  readonly book2: number = 0;
  readonly book3: number = 0;
  readonly book4: number = 0;
  readonly book5: number = 0;

  constructor(arg: {
    book1?: number;
    book2?: number;
    book3?: number;
    book4?: number;
    book5?: number;
  }) {
    // Orders cannot have books of negative amount, neither of value undefined
    const normalizeAmount = (n?: number): number => {
      if (n === undefined) return 0;
      return n > 0 ? n : 0;
    };

    this.book1 = normalizeAmount(arg.book1);
    this.book2 = normalizeAmount(arg.book2);
    this.book3 = normalizeAmount(arg.book3);
    this.book4 = normalizeAmount(arg.book4);
    this.book5 = normalizeAmount(arg.book5);
  }

  /**
   * Returns all possible ways `Block`s of books can be arranged using the
   * source of this order.
   */
  get arrangements(): Block[] {
    const books: book[] = [];

    if (this.book1 > 0) books.push("book1");
    if (this.book2 > 0) books.push("book2");
    if (this.book3 > 0) books.push("book3");
    if (this.book4 > 0) books.push("book4");
    if (this.book5 > 0) books.push("book5");

    if (books.length < 1) return []; // No need to do anything if length < 1

    if (books.length === 1) {
      return [new Block(...books)];
    }

    const solo: Block[] = [];
    const pairs: Block[] = [];
    const trios: Block[] = [];
    const quartets: Block[] = [];
    const quintets: Block[] = [];

    if (books.length === 5) {
      quintets.push(new Block(...books));
    }

    const pushToSolo = (b1: book) => {
      const arrangement = new Block(b1);
      if (solo.findIndex((a) => a.id === arrangement.id) < 0) {
        solo.push(arrangement);
      }
    };

    const pushToPair = (b1: book, b2: book) => {
      const arrangement = new Block(b1, b2);
      if (pairs.findIndex((a) => a.id === arrangement.id) < 0) {
        pairs.push(arrangement);
      }
    };

    const pushToTrio = (b1: book, b2: book, b3: book) => {
      const arrangement = new Block(b1, b2, b3);
      if (trios.findIndex((a) => a.id === arrangement.id) < 0) {
        trios.push(arrangement);
      }
    };

    const pushToQuartet = (b1: book, b2: book, b3: book, b4: book) => {
      const arrangement = new Block(b1, b2, b3, b4);
      if (quartets.findIndex((a) => a.id === arrangement.id) < 0) {
        quartets.push(arrangement);
      }
    };

    // The easiest way to acquire all possible arrangements these books
    // can have is by looping through the source and manually find
    // all possible arragements.
    const noRepeatedBook = (...check: book[]): boolean => {
      return (new Set(check).size === check.length);
    };
    for (const loop1 of books) {
      pushToSolo(loop1);
      for (const loop2 of books) {
        if (noRepeatedBook(loop1, loop2)) {
          pushToPair(loop1, loop2);

          // Calculate trios
          for (const loop3 of books) {
            // We don't need to run this loop if the amount of books is
            // less than 3
            if (books.length < 3) break;

            if (noRepeatedBook(loop1, loop2, loop3)) {
              pushToTrio(loop1, loop2, loop3);

              // Calculate Quartets
              for (const loop4 of books) {
                // We don't need to run this loop if the amount of books
                // is less than 4
                if (books.length < 4) break;

                if (noRepeatedBook(loop1, loop2, loop3, loop4)) {
                  pushToQuartet(loop1, loop2, loop3, loop4);
                }
              }
            }
          }
        }
      }
    }

    return [...quintets, ...quartets, ...trios, ...pairs, ...solo];
  }

  /**
   * Returns this order as an array, e.g.
   * `{ book1: 2, book2: 1 }` becomes `["book1", "book1", "book2"]`
   */
  get array(): book[] {
    const array: book[] = [];

    for (let i = 1; i <= 5; i++) {
      const bookN = `book${i}`;
      const filledArray = new Array(this[bookN]).fill(bookN);
      array.push(...filledArray);
    }

    return array;
  }
}
