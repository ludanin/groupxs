import { book, bookCost } from ".";


/**
 * `Block` holds distinct books, they are used to help us build discounts
 * in orders.
 */
export default class Block {
  readonly books: book[] = [];

  constructor(...books: book[]) {
    /**
     * `Block` should only hold distinct books, that ensures a block with
     * 3 books will always have a 3 distinct book discount.
     */
    const distinctBooks: book[] = [];

    for (const b of books) {
      if (distinctBooks.findIndex((dB) => dB === b) < 0) {
        distinctBooks.push(b);
      }
    }

    this.books = distinctBooks;
  }

  /**
   * Since we cannot compare arrays, objects, or classes in javascript,
   * e.g. `[1] === [1]` strangely returns false, we must abstract an id
   * for this `Block`.
   */
  get id() {
    const book1 = this.has.book1 ? "1:" : "";
    const book2 = this.has.book2 ? "2:" : "";
    const book3 = this.has.book3 ? "3:" : "";
    const book4 = this.has.book4 ? "4:" : "";
    const book5 = this.has.book5 ? "5:" : "";

    return `${book1}${book2}${book3}${book4}${book5}`;
  }

  /**
   * Returns the total amount of books in this `Block`
   */
  get length() {
    return this.books.length;
  }

  /**
   * Returns the price of this `Block`, including any found discount
   */
  get price(): number {
    switch(this.length) {
      case 1: return bookCost;
      case 2: return (bookCost * 2) * 0.95; // 5% off
      case 3: return (bookCost * 3) * 0.9;  // 10% off
      case 4: return (bookCost * 4) * 0.8;  // 20% off
      case 5: return (bookCost * 5) * 0.75; // 25% off
      default: return 0;
    }
  }

  get has() {
    const { books } = this;

    return {
      get book1() {
        return (books.findIndex((b) => b === "book1") >= 0);
      },
      get book2() {
        return (books.findIndex((b) => b === "book2") >= 0);
      },
      get book3() {
        return (books.findIndex((b) => b === "book3") >= 0);
      },
      get book4() {
        return (books.findIndex((b) => b === "book4") >= 0);
      },
      get book5() {
        return (books.findIndex((b) => b === "book5") >= 0);
      },
    };
  }
}
