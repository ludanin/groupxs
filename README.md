# Important Note

To run the tests you'd probably desire to remove any code executed at
`src/index.ts`, such as the one calculating the mission's solution.

Whenever you run `yarn test` it's going to trigger the code written there,
and the current algorithm is not optimized for speed.

## How to run?

To run the tests simply run `yarn test`.

To run the program simply run `yarn start`.

An `Order` is defined at `src/index.ts`, you can change it to see how the
program behaves with different orders. By the way, the current approach
to solve the task is a bit of an overkill, besides the lowest price you
can see every single possible way to arrange the books of an `Order`.

# Official Problem

## Description

Once upon a time there was a series of 5 books about a very English hero
called Harry. Children all over the world thought he was fantastic, and,
of course, so did the publisher. So in a gesture of immense generosity to
mankind, (and to increase sales) they set up the following pricing model
to take advantage of Harry's magical powers.

One copy of any of the five books costs 8 EUR. If, however, you buy two
different books from the series, you get a 5% discount on those two books.
If you buy 3 different books, you get a 10% discount. With 4 different
books, you get a 20% discount. If you go the whole hog, and buy all 5, you
get a huge 25% discount. Note that if you buy, say, four books, of which
3 are different titles, you get a 10% discount on the 3 that form part of
a set, but the fourth book still costs 8 EUR. Potter mania is sweeping the
country and parents of teenagers everywhere are queuing up with shopping
baskets overflowing with Potter books.

## Mission

Your mission is to write a piece of code to calculate the price of any
conceivable shopping basket, giving as big a discount as possible.

For example, how much does this basket of books cost? (answer: 51.20 EUR)

  * 2 copies of the first book
  * 2 copies of the second book
  * 2 copies of the third book
  * 1 copy of the fourth book
  * 1 copy of the fifth book

# Personal Thoughts

## Notes

  * Each book has a initial cost of 8 EUR;
  * Discounts increase by the amount of different books, in the following fashion:
    * 2 different books => 5% off on both;
    * 3 different books => 10% off;
    * 4 different books => 20% off;
    * 5 different books => 25% off;
  * Our algorithm must try to find all potential discounts for an order.
  It's probable for us to jump to erroneous conclusions. Takint the order
  given by the mission for example, it's very likely for us to believe the
  smallest possible price to be calculated by `((5 * 8) - 25%) + ((3 * 8) - 10%)`,
  that's not the highest possible discount for this order, which can be
  acquired using `2 * ((4 * 8) - 20%)`;

# Goals and Progress

## Goals:
  * ~~Code the necessary boilerplate, i.e. Types, Stub functions, etc.~~
  ~~Prioritize writing code relating to purchase orders first, such as an~~
  ~~interface defining what is an order, its possible discounts, etc.;~~
  * ~~Trying to always combine books to sell them with discounts, in how~~
  ~~many ways can the order `{first: 1, second: 1, third: 1}` be deconstructed?~~
  * ~~What are the valid ways to charge for order `{ first: 2, second: 1, third: 1 }`?~~
  * ~~Get the lowest possible value for an order;~~
