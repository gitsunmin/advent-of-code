import { A, S, N, pipe, flow, O } from "@mobily/ts-belt";

import { Alphabet, getNumberFromAlphabet } from "./common";

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

const parseInput = flow(S.split("\n"), A.filter(S.isNotEmpty));

const slice = flow((str: string) => S.splitAt(str, N.divide(S.length(str), 2)));

const find = flow(([compartment1, compartment2]: readonly [string, string]) =>
  pipe(
    compartment1,
    S.split("") as (str: string) => readonly Alphabet[],
    A.find<Alphabet>((str: string) => S.includes(compartment2, str))
  )
);

const sliceAndFind = flow(A.map(flow(slice, find)), A.filterMap(O.toNullable));

const sumNumber = flow(A.map(getNumberFromAlphabet), A.reduce(0, N.add));

const output = pipe(input, parseInput, sliceAndFind, sumNumber);

console.log("output:", output);
