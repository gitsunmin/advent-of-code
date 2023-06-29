import * as Day4 from "./common";
import { A, pipe } from "@mobily/ts-belt";

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const output = pipe(
  input,
  Day4.parseInput,
  A.filter(Day4.fullyInclusion),
  A.length
);

console.log("output:", output);
