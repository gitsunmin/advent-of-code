import { A, O, pipe } from "@mobily/ts-belt";

import * as Day3 from "./common";

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

const output = pipe(
  input,
  Day3.parseInput,
  A.splitEvery(3),
  A.map(Day3.find),
  A.flat,
  O.map(Day3.sumNumber)
);

console.log("output:", output);
