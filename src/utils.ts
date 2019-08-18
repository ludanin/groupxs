import { book } from ".";
import Block from "./block";


/**
 * Returns unused books after the deduction from the given `Block`
 */
export function getRemainder(books: book[], ...blocks: Block[]): book[] {
  let remainder: book[] = [...books];

  for (const block of blocks) {
    for (const b of block.books) {
      const i = remainder.findIndex((r) => r === b);
      remainder = [...remainder.slice(0, i), ...remainder.slice(i + 1)];
    }
  }

  return remainder;
}

/**
 * Returns true if the given `books` has all books needed for the given
 * `block`
 */
export function canUseBlock(books: book[], block?: Block): boolean {
  if (block === undefined) return false;
  if (block.books.length > books.length) return false;

  for (const b of block.books) {
    if (books.findIndex((s) => s === b) < 0) return false;
  }

  return true;
}

export function hasDistinctBook(books: book[]): boolean {
  let prev = "";
  for (const b of books) {
    if (prev !== b) return true;

    prev = b;
  }

  return false;
}
