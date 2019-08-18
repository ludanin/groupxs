import { book } from ".";
import Block from "./block";


/**
 * Returns unused books after the deduction from the given `Block`
 */
export function getRemainder(books: book[], block: Block): book[] {
  let remainder: book[] = [...books];

  for (const s of books) {
    if (block.has[`${s}`]) {
      remainder = remainder.filter((r) => r !== s);
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
