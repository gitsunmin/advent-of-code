import { A, flow, pipe } from "@mobily/ts-belt";

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
  A.map(flow(Day3.slice, Day3.find)),
  A.flat,
  Day3.sumNumber
);

console.log("output:", output);
