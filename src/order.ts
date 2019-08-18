
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
}
