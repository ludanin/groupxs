import { book } from ".";
import Block from "./block";


/**
 * Returns an array subtracting from the given `books` all books used by
 *  the `blocks`
 */
export function getRemainder(books: book[], ...blocks: Block[]): book[] {
  let remainder: book[] = [...books];

  for (const block of blocks) {
    for (const b of block.books) {
      const i = remainder.findIndex((r) => r === b);
      if (i >= 0) {
        remainder = [...remainder.slice(0, i), ...remainder.slice(i + 1)];
      }
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

/**
 * Returns true if the `books` array has distinct books
 */
export function hasDistinctBook(books: book[]): boolean {
  let prev = "";
  for (const b of books) {
    if (prev !== b && prev !== "") return true;

    prev = b;
  }

  return false;
}

// TFW passing by reference is really useful
export function sortBlocks(blocks: Block[]) {
  blocks.sort((a, b) => a.id < b.id ? -1 : 1);
}

/**
 * Generates an ID for an array of `Block`
 * @param blocks
 */
export function blocksID(blocks: Block[]): string {
  let id = "";

  blocks.forEach((b) => id += `${b.id}+`);
  return id;
}
