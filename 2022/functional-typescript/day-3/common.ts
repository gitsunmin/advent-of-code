import { A, D, N, O, S, flow, pipe } from "@mobily/ts-belt";

const LOWER_CASE_ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
] as const;

const UPPER_CASE_ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const;

type Alphabet =
  | (typeof LOWER_CASE_ALPHABET)[number]
  | (typeof UPPER_CASE_ALPHABET)[number];

const getNumberFromAlphabet = (alphabet: Alphabet) =>
  pipe(
    A.concat(LOWER_CASE_ALPHABET, UPPER_CASE_ALPHABET),
    A.mapWithIndex<Alphabet, [Alphabet, number]>((index, alphabet) => [
      alphabet,
      N.add(index, 1),
    ]),
    D.fromPairs,
    D.get(alphabet)
  );

const slice = flow((str: string) => S.splitAt(str, N.divide(S.length(str), 2)));

const find = flow(([compartment1, compartment2]: readonly [string, string]) =>
  pipe(
    compartment1,
    S.split("") as (str: string) => readonly Alphabet[],
    A.find<Alphabet>((str: string) => S.includes(compartment2, str))
  )
);

export const parseInput = flow(S.split("\n"), A.filter(S.isNotEmpty));

export const sliceAndFind = flow(
  A.map(flow(slice, find)),
  A.filterMap(O.toNullable)
);

export const sumNumber = flow(
  A.map<Alphabet, O.Option<number>>(getNumberFromAlphabet),
  A.filterMap(O.toNullable),
  A.reduce(0, N.add)
);
