import { pipe } from "@mobily/ts-belt";

import * as Day3 from "./common";

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

const output = pipe(input, Day3.parseInput, Day3.sliceAndFind, Day3.sumNumber);

console.log("output:", output);
