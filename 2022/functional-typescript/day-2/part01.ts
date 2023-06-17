import { pipe, A, N } from "@mobily/ts-belt";

import { parseInput, handleInput } from './common';

const input = `A Y
B X
C Z`;

const output = pipe(
  input,
  parseInput,
  A.map(handleInput),
  A.reduce(0, N.add)
);

console.log("output:", output);
