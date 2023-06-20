import { pipe, A } from "@mobily/ts-belt";

import { parseInput, handleInput, sum } from "./common";

const input = `A Y
B X
C Z`;

const handleInputs = A.map(handleInput);

const output = pipe(input, parseInput, handleInputs, sum);

console.log("output:", output); // 15
